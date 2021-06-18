```js
const console1 = async (ctx, next) => {
  console.log('我是console 1');
  await next();
  console.log('我是console 6');
}

const console2 = async (ctx, next) => {
  console.log('我是console 2');
  await next();
  console.log('我是console 5');
}

const console3 = async (ctx, next) => {
  console.log('我是console 3');
  console.log('我是console 4');
}

const middleware = [];
function use(fn) {
  middleware.push(fn);
}

use(console1);
use(console2);
use(console3);

function start(ctx) {
  const i = 0;
  const dispatch = (i) => {
    if (i === middleware.length) return false;
    const fn = middleware[i];
    return fn(ctx, dispatch.bind(null, i + 1))
  }
  dispatch(i);
}
start();

// result:
// 我是console 1
// 我是console 2
// 我是console 3
// 我是console 4
// 我是console 5
// 我是console 6
```
#### ref、reactive问题

```ts 
// vue2.x
data: {
  form: {
    name: ''
  }
},
method: {
  handleInput: (val) => {
    this.form = {
      ...this.form,
      name: val
    }
  }
}
// 在vue2.x中，这样写是可以触发响应式

// vue3.x
setup() {
  const obj = reactive({
    name: '张三',
  })
  hanldeInput(val) {
    // 这样是不能触发响应式的，reactive 和 ref的内部实现都是基于proxy的，当你在vue3.x中使用以上方式更新对象的时候，虽然form改变了，但是proxy监听的那个form对象并没有改变，因此就没法触发更新
  
    obj = {
      ...obj,
      name: '李四'
    }
  }
}
```
可以用以下方式使其正确触发响应式
```ts
// 1.使用Object.assign
const obj = reactive({
  name: '张三',
})
Object.assign(obj, {
  name: '李四'
})
// 2.在reactive外面包一层
const state = reactive({
  obj: { name: '张三' }
})
state.obj = {
  ...state.obj,
  name: '李四'
}
// 3.使用 ref 替代 reactive
const obj = ref({name: '张三'})
obj.value = {
  ...obj.value,
  name: '李四',
}
})
```
module.exports = {
  title: '我的博客',
  description: '我的博客',
  base: '/blob/',
  themeConfig: {
    sidebarDepth: 3,
    sidebar: [
        {
          title: 'Vue3.x',
          collapsable: true,
          children: [
              { title: 'ref和reactive', path: '/refAndReactive' },
            ],
        },
        {
          title: 'koa洋葱模型原理',
          path: '/koa-onion'
        }
        
    ]
  }
}
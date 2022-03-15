module.exports = {
  title: '面试相关文档',
  description: '提供面试的一些问题的解法',
  base: '/vuepress-learn/',
  theme: 'reco', // 使用下载的主题 vuepress-theme-reco
  subSidebar: 'auto', // 侧边栏的位置
  locales: {
    '/': {
      lang: 'zh-CN' // 设置语言
    }
  },
  themeConfig: {
    nav: [
        { text: '首页', link: '/' },
        { 
            text: '我的博客', 
            items: [
              { text: 'Github', link: 'https://github.com/mqyqingfeng' },
              { text: '掘金', link: 'https://juejin.cn/user/712139234359182/posts' }
            ]
        }
    ],
    sidebar: [
      {
          title: '面试相关',
          path: '/',
          collapsable: false, // 不折叠
          children: [
              { title: "学前必读", path: "/" }
          ]
      },
      {
        title: "细则",
        path: '/pages/pageOne', // 对应页面的位置
        collapsable: false, // 不折叠
        children: [
          { title: "条件类型", path: "/pages/pageOne" },
          { title: "泛型", path: "/pages/pageTwo" },
          { title: "怎么做", path: "/pages/pageThree" },
        ],
      }
    ]
  }
}
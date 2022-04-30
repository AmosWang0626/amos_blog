const { defaultTheme } = require('vuepress')
const { searchPlugin } = require('@vuepress/plugin-search')

module.exports = {
  lang: 'zh-CN',
  title: "Amos's Blog",
  description: 'https://www.amos.wang/',
  head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
  theme: defaultTheme({
    // Logo 配置
    logo: '/images/logo.png',
    logoDark: '/images/logo-dark.png',
    // 其他配置
    editLink: false,
    repo: 'https://github.com/AmosWang0626/amos_blog',
    // 导航栏
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '编程技术',
        children: [
          {
            text: '服务端开发',
            link: '/backend',
            // 该元素将一直处于激活状态
            activeMatch: '/',
          },
          {
            text: '前端开发',
            link: '/front/',
            // 支持正则表达式
            activeMatch: '^/front/',
          },
          {
            text: '服务器相关',
            link: '/ops/',
            activeMatch: '^/ops/',
          },
        ],
      },
      {
        text: '精选文章',
        link: '/boutique',
      }
    ],
    // 侧边栏
    sidebar: [
      {
        text: 'Java',
        link: '/java/',
        children: [
          {
            text: 'Java高效并发',
            link: '/backend/1-Java高效并发.md'
          },
          {
            text: '设计模式',
            link: '/backend/2-设计模式.md'
          },
        ],
      },
    ],
    notFound: [
      "你访问的页面飞走了～",
      "页面飞走了～",
      "您访问的页面飞走了～"
    ],
    backToHome: "回到首页",
  }),
  plugins: [
    searchPlugin({
    })
  ]
}

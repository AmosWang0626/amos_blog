const { defaultTheme } = require('vuepress')
const { searchPlugin } = require('@vuepress/plugin-search')

module.exports = {
  lang: 'zh-CN',
  title: "AMOS",
  description: 'https://www.amos.wang/',
  head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
  // custom config
  dest: './dist',
  public: './asset/public',
  port: 8088,
  open: true,
  // theme config
  theme: defaultTheme({
    // Logo 配置
    logo: '/images/logo.png',
    logoDark: '/images/logo-dark.png',
    // 其他配置
    editLink: false,
    repo: 'https://github.com/AmosWang0626/amos_blog',
    // 导航栏 https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#navbar
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        // java/spring/mybatis/
        text: 'Java技术栈',
        link: '/backend/'
      },
      {
        // linux/docker/nginx/
        text: 'Ops相关',
        link: '/ops/'
      },
      {
        text: '杂货铺',
        link: '/boutique/',
      }
    ],
    // 侧边栏, 可为每个URL指定侧边栏 https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#sidebar
    sidebar: {
      '/backend/': [
        {
          text: 'Java基础特性',
          link: '/backend/1-Java高效并发.md'
        },
        {
          text: '设计模式',
          link: '/backend/2-设计模式.md'
        },
      ],
      '/ops/': [
        {
          text: 'Ops',
          link: '/ops/'
        }
      ],
      '/boutique/': [
        {
          text: '前端技术',
          link: '/boutique/front/',
          children: [
            {
              text: '编写可维护的JavaScript',
              link: '/boutique/front/01.编写可维护的JavaScript.md'
            },
            {
              text: 'Hexo挂掉自动重启',
              link: '/boutique/front/02.Hexo挂掉自动重启.md'
            }
          ]
        }
      ],
    },
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

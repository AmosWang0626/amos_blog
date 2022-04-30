const { defaultTheme } = require('vuepress')
const { searchPlugin } = require('@vuepress/plugin-search')

module.exports = {
  lang: 'zh-CN',
  title: "Amos's Blog",
  description: 'https://www.amos.wang/',
  head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
  // custom config
  dest: './dist',
  public: './asset/public',
  port: 8088,
  open: true,
  markdown: {
    code: {
      lineNumbers: false
    }
  },
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
        text: '编程技术',
        children: [
          {
            text: '服务端开发',
            link: '/backend/'
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
        link: '/boutique/',
      }
    ],
    // 侧边栏, 可为每个URL指定侧边栏 https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#sidebar
    sidebar: {
      '/backend/': [
        {
          text: 'Java高效并发',
          link: '/backend/1-Java高效并发.md'
        },
        {
          text: '设计模式',
          link: '/backend/2-设计模式.md'
        },
      ],
      '/front/': [
        {
          text: 'Vue',
          link: '/backend/1-Java高效并发.md'
        },
        {
          text: 'Hexo',
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
          text: 'Boutique',
          link: '/boutique/'
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

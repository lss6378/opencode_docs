import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'OpenCode 教程',
  description: 'OpenCode AI 编程助手快速入门指南',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '快速入门', link: '/guide/installation' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '快速入门',
          items: [
            { text: '安装', link: '/guide/installation' },
            { text: '开始使用', link: '/guide/getting-started' },
            { text: '基础用法', link: '/guide/basic-usage' }
          ]
        },
        {
          text: '进阶功能',
          items: [
            { text: '高级特性', link: '/guide/advanced-features' },
            { text: '集成开发', link: '/guide/integration' },
            { text: '最佳实践', link: '/guide/best-practices' }
          ]
        }
      ]
    },

    outline: {
      level: [2, 3],
      label: '本页目录'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lss6378/opencode_docs' }
    ]
  }
})

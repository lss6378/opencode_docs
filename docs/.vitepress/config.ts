import { defineConfig } from 'vitepress'

const sharedThemeConfig = {
  search: {
    provider: 'local' as const
  }
}

const zhNav = [
  { text: '首页', link: '/' },
  { text: '快速入门', link: '/guide/installation' }
]

const zhSidebar = {
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
}

const enNav = [
  { text: 'Home', link: '/en/' },
  { text: 'Quick Start', link: '/en/guide/installation' }
]

const enSidebar = {
  '/en/guide/': [
    {
      text: 'Quick Start',
      items: [
        { text: 'Installation', link: '/en/guide/installation' },
        { text: 'Getting Started', link: '/en/guide/getting-started' },
        { text: 'Basic Usage', link: '/en/guide/basic-usage' }
      ]
    },
    {
      text: 'Advanced',
      items: [
        { text: 'Advanced Features', link: '/en/guide/advanced-features' },
        { text: 'Integration', link: '/en/guide/integration' },
        { text: 'Best Practices', link: '/en/guide/best-practices' }
      ]
    }
  ]
}

export default defineConfig({
  lang: 'zh-CN',
  title: 'OpenCode 教程',
  description: 'OpenCode AI 编程助手快速入门指南',
  themeConfig: {
    ...sharedThemeConfig,
    nav: zhNav,
    sidebar: zhSidebar,
    outline: {
      level: [2, 3],
      label: '本页目录'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lss6378/opencode_docs' }
    ]
  },
  locales: {
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'OpenCode Tutorial',
      description: 'Quick start guide for OpenCode AI coding assistant',
      themeConfig: {
        ...sharedThemeConfig,
        nav: enNav,
        sidebar: enSidebar,
        outline: {
          level: [2, 3],
          label: 'On this page'
        }
      }
    }
  }
})

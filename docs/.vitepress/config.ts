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
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lss6378/opencode_docs' }
    ]
  },

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'OpenCode 教程',
      description: 'OpenCode AI 编程助手快速入门指南'
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'OpenCode Tutorial',
      description: 'Quick start guide for OpenCode AI coding assistant',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Quick Start', link: '/en/guide/installation' }
        ],
        sidebar: {
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
        },
        outline: {
          level: [2, 3],
          label: 'On this page'
        },
        search: {
          provider: 'local',
          options: {
            locales: {
              en: {
                translations: {
                  button: {
                    buttonText: 'Search',
                    buttonAriaLabel: 'Search'
                  },
                  modal: {
                    noResultsText: 'No results for',
                    footer: {
                      selectText: 'to select',
                      navigateText: 'to navigate'
                    }
                  }
                }
              }
            }
          }
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/lss6378/opencode_docs' }
        ]
      }
    }
  }
})

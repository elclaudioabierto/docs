// @ts-check

const config = {
  title: 'AgentKit Docs',
  tagline: 'Documentation for AgentKit',

  url: 'https://elclaudioabierto.github.io',
  baseUrl: '/docs/',

  organizationName: 'elclaudioabierto',
  projectName: 'docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js'
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css'
        }
      }
    ]
  ],

  themeConfig: {
    navbar: {
      title: 'AgentKit',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} AgentKit`
    }
  }
};

module.exports = config;

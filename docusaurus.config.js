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
          sidebarPath: './sidebars.js',
          routeBasePath: '/'
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css'
        }
      }
    ]
  ],

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
      onBrokenMarkdownImages: 'warn'
    }
  },
  themes: [
    '@docusaurus/theme-mermaid',
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        indexPages: false
      }
    ]
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false
    },
    navbar: {
      title: 'AgentKit',
      items: [
        { type: 'docSidebar', sidebarId: 'docsSidebar', position: 'left', label: 'Docs' },
        { to: '/faq', label: 'FAQ', position: 'left' },
        { href: 'https://github.com/elclaudioabierto/agentkit', label: 'GitHub', position: 'right' },
        { to: '/support', label: 'Donate', position: 'right' }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Repos',
          items: [
            { label: 'agentkit', href: 'https://github.com/elclaudioabierto/agentkit' },
            { label: 'registry', href: 'https://github.com/elclaudioabierto/registry' },
            { label: 'registry-template', href: 'https://github.com/elclaudioabierto/registry-template' },
            { label: 'docs', href: 'https://github.com/elclaudioabierto/docs' }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AgentKit`
    }
  }
};

module.exports = config;

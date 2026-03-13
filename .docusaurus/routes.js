import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs/search',
    component: ComponentCreator('/docs/search', 'b58'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', '40b'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', 'd3b'),
        routes: [
          {
            path: '/docs/',
            component: ComponentCreator('/docs/', 'f61'),
            routes: [
              {
                path: '/docs/acknowledgements',
                component: ComponentCreator('/docs/acknowledgements', 'a57'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/agent-determinism',
                component: ComponentCreator('/docs/agent-determinism', '557'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/agents-md',
                component: ComponentCreator('/docs/agents-md', '015'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/cli',
                component: ComponentCreator('/docs/cli', '4c1'),
                exact: true
              },
              {
                path: '/docs/concepts',
                component: ComponentCreator('/docs/concepts', '818'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/debugging',
                component: ComponentCreator('/docs/debugging', '725'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/faq',
                component: ComponentCreator('/docs/faq', '489'),
                exact: true
              },
              {
                path: '/docs/flow',
                component: ComponentCreator('/docs/flow', '9c9'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/getting-started',
                component: ComponentCreator('/docs/getting-started', '3fb'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/installation',
                component: ComponentCreator('/docs/installation', '034'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/overview',
                component: ComponentCreator('/docs/overview', 'bdc'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/quickstart',
                component: ComponentCreator('/docs/quickstart', '510'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/recipes',
                component: ComponentCreator('/docs/recipes', '977'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/registry',
                component: ComponentCreator('/docs/registry', 'a17'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/registry-schema',
                component: ComponentCreator('/docs/registry-schema', '116'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/roadmap',
                component: ComponentCreator('/docs/roadmap', '693'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/sources',
                component: ComponentCreator('/docs/sources', '1b8'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/support',
                component: ComponentCreator('/docs/support', 'd89'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/token-savings',
                component: ComponentCreator('/docs/token-savings', '45e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/troubleshooting',
                component: ComponentCreator('/docs/troubleshooting', 'ca4'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/update',
                component: ComponentCreator('/docs/update', '742'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/workflow',
                component: ComponentCreator('/docs/workflow', 'af3'),
                exact: true
              },
              {
                path: '/docs/workflows',
                component: ComponentCreator('/docs/workflows', 'cce'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/',
                component: ComponentCreator('/docs/', 'af3'),
                exact: true,
                sidebar: "docsSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

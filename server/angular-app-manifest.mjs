
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/quests',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/quests"
  },
  {
    "renderMode": 2,
    "route": "/quests/quest"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 548, hash: 'c9728a81dca6708ae9837f03a882cc4fc14760f4076e7f0bb8368406e35eaa67', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 950, hash: 'a01c60908695b7f22d677ceb772cf97b3d2df0ed2eb495a45aeea16700a56270', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3223, hash: '64a1dd59f9075603576e01fdec2f47cfc472b27eefbc2684624cab4ace0a47ee', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'quest/index.html': {size: 3825, hash: '25adc62963717efa74763ace9fadc1f4157b4967ea239248e3c61a7fd5aa241f', text: () => import('./assets-chunks/quest_index_html.mjs').then(m => m.default)},
    'styles-WU5FYB4O.css': {size: 168, hash: 'aLzPkcnJNzY', text: () => import('./assets-chunks/styles-WU5FYB4O_css.mjs').then(m => m.default)}
  },
};

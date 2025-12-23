
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/quests/',
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
    'index.csr.html': {size: 549, hash: 'a75d77bfb7cb7d5f1b4a6b1b84e11870c1923fd00e064a0d8b6953af3905651d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 951, hash: 'dbb71b0cd300aebf9d81e94aedc3ef957424f04af126d3748b18452c479c9815', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3224, hash: '67828ccab8c56d5b27ec90cebe0e79b971deeb2f8f26714f62a3df8137e6d8fc', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'quest/index.html': {size: 3837, hash: 'de9661eb94438706e05964e7f2f1c2281c6c3cf1479ab82ac68f9106d09dd3b3', text: () => import('./assets-chunks/quest_index_html.mjs').then(m => m.default)},
    'styles-WU5FYB4O.css': {size: 168, hash: 'aLzPkcnJNzY', text: () => import('./assets-chunks/styles-WU5FYB4O_css.mjs').then(m => m.default)}
  },
};

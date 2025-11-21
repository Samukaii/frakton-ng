
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/docs/getting-started-installation"
  },
  {
    "renderMode": 2,
    "route": "/docs/getting-started-migration-guides"
  },
  {
    "renderMode": 2,
    "route": "/docs/getting-started-theming-styling"
  },
  {
    "renderMode": 2,
    "route": "/docs/autocomplete"
  },
  {
    "renderMode": 2,
    "route": "/docs/badge"
  },
  {
    "renderMode": 2,
    "route": "/docs/badge-selector"
  },
  {
    "renderMode": 2,
    "route": "/docs/button"
  },
  {
    "renderMode": 2,
    "route": "/docs/buttons-list"
  },
  {
    "renderMode": 2,
    "route": "/docs/calendar"
  },
  {
    "renderMode": 2,
    "route": "/docs/calendar-navigator"
  },
  {
    "renderMode": 2,
    "route": "/docs/checkbox"
  },
  {
    "renderMode": 2,
    "route": "/docs/color-picker"
  },
  {
    "renderMode": 2,
    "route": "/docs/date-picker"
  },
  {
    "renderMode": 2,
    "route": "/docs/dialog"
  },
  {
    "renderMode": 2,
    "route": "/docs/drawer"
  },
  {
    "renderMode": 2,
    "route": "/docs/focus-trap"
  },
  {
    "renderMode": 2,
    "route": "/docs/icon"
  },
  {
    "renderMode": 2,
    "route": "/docs/input"
  },
  {
    "renderMode": 2,
    "route": "/docs/navigator"
  },
  {
    "renderMode": 2,
    "route": "/docs/no-results"
  },
  {
    "renderMode": 2,
    "route": "/docs/overlay"
  },
  {
    "renderMode": 2,
    "route": "/docs/paginator"
  },
  {
    "renderMode": 2,
    "route": "/docs/select"
  },
  {
    "renderMode": 2,
    "route": "/docs/side-menu"
  },
  {
    "renderMode": 2,
    "route": "/docs/skeleton"
  },
  {
    "renderMode": 2,
    "route": "/docs/spinner"
  },
  {
    "renderMode": 2,
    "route": "/docs/table"
  },
  {
    "renderMode": 2,
    "route": "/docs/textarea"
  },
  {
    "renderMode": 2,
    "route": "/docs/tooltip"
  },
  {
    "renderMode": 0,
    "route": "/docs/*"
  },
  {
    "renderMode": 1,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16526, hash: 'adab1309f4dca15de2b47ece8a1abcd522dfd8a9ad6fa00b17f8e4898c3d6e9e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 9686, hash: 'e9fb3e83d81f0499c12ab6e7ef16117c7b5ce02504c8c00068c02f58e01860fa', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 324, hash: 'ee95ed057946a17941839b39790de904855fcd98d8011a62adeb729fa8cda55b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'docs/getting-started-installation/index.html': {size: 106990, hash: '967f92e63d7c36db6eeab04cdfdae2ad198ca98a1c6c46829831f24fece580db', text: () => import('./assets-chunks/docs_getting-started-installation_index_html.mjs').then(m => m.default)},
    'docs/badge/index.html': {size: 157519, hash: '701348fb46a2e8e80d9c42057ba5fe704503383550234d8e81f3c3b51eb73ad2', text: () => import('./assets-chunks/docs_badge_index_html.mjs').then(m => m.default)},
    'docs/badge-selector/index.html': {size: 146976, hash: '9ac5575fc0cd3607fc9c5551b6c4d3b2b5b726783ca954c7b56bb4454b9557eb', text: () => import('./assets-chunks/docs_badge-selector_index_html.mjs').then(m => m.default)},
    'docs/color-picker/index.html': {size: 146808, hash: '0cf35f299cd7958a466021684bb913068fc78d0501aab8489f1c19acf3a2ce5b', text: () => import('./assets-chunks/docs_color-picker_index_html.mjs').then(m => m.default)},
    'docs/calendar-navigator/index.html': {size: 157505, hash: 'f6759aa8bcbe997802294c7870ff0110c8521f367beef7b04b64a043705750c6', text: () => import('./assets-chunks/docs_calendar-navigator_index_html.mjs').then(m => m.default)},
    'docs/dialog/index.html': {size: 157560, hash: 'f1a40b2ae3a5679d13a1eea5b77edab753a2eb9d10500a022036355713228b91', text: () => import('./assets-chunks/docs_dialog_index_html.mjs').then(m => m.default)},
    'docs/input/index.html': {size: 149483, hash: '7b4bed68c36c9c5553000a388b85f0f40c2ca9471e81b1944dfc93cdfb231e2d', text: () => import('./assets-chunks/docs_input_index_html.mjs').then(m => m.default)},
    'docs/focus-trap/index.html': {size: 173203, hash: '7fbc4d18ff0ba0ecfbeb3f284a05edd7a716459d79aeccd260c688bd2e43be11', text: () => import('./assets-chunks/docs_focus-trap_index_html.mjs').then(m => m.default)},
    'docs/spinner/index.html': {size: 149355, hash: 'f166a0f9884afad0116b7e46b0384fdfe5ae0d9dc951cd3d458ef84203ae825e', text: () => import('./assets-chunks/docs_spinner_index_html.mjs').then(m => m.default)},
    'docs/paginator/index.html': {size: 169921, hash: '68026464b36d1810b74559181ad4a42bccd158792ad1d52a07b476319ccc879d', text: () => import('./assets-chunks/docs_paginator_index_html.mjs').then(m => m.default)},
    'docs/no-results/index.html': {size: 139761, hash: 'b8b9a8e5281c2187b889d0493d180b8ac25f72b1bc68e1917fcfdba593c9ef1d', text: () => import('./assets-chunks/docs_no-results_index_html.mjs').then(m => m.default)},
    'docs/side-menu/index.html': {size: 210586, hash: 'f7c77132df1b3d9a3c5852a5828b985201e503671aa2b91790ceff9f2e72ba64', text: () => import('./assets-chunks/docs_side-menu_index_html.mjs').then(m => m.default)},
    'docs/getting-started-migration-guides/index.html': {size: 116833, hash: '05b7e5ec948e28a9e47ab4b5285d9f216317be498461a0dcb1c210eb59fc6f8b', text: () => import('./assets-chunks/docs_getting-started-migration-guides_index_html.mjs').then(m => m.default)},
    'docs/buttons-list/index.html': {size: 165855, hash: 'b7988ab74282d78ce6287812142ce8eff88a844a3b13fd8864f5860ef9786a24', text: () => import('./assets-chunks/docs_buttons-list_index_html.mjs').then(m => m.default)},
    'docs/autocomplete/index.html': {size: 208717, hash: '651d338d3428f61c83b21c0e6d7ea8104df2cbbad910fcae5e0d4151b2a703c4', text: () => import('./assets-chunks/docs_autocomplete_index_html.mjs').then(m => m.default)},
    'docs/textarea/index.html': {size: 208046, hash: '73772dfd7bb7f23043206c58a6756ce83d87ecc1af5542dd1f7886a33e1c47d5', text: () => import('./assets-chunks/docs_textarea_index_html.mjs').then(m => m.default)},
    'docs/checkbox/index.html': {size: 132656, hash: 'dacebe3392454d3f51d033d4346382d9fb7e23c48f7a966dfec7e5cfc073cda0', text: () => import('./assets-chunks/docs_checkbox_index_html.mjs').then(m => m.default)},
    'docs/drawer/index.html': {size: 353508, hash: 'f66e7dad20aa682a414994ae0d4c24ebd917f58203e96698a81c15e091cc7d99', text: () => import('./assets-chunks/docs_drawer_index_html.mjs').then(m => m.default)},
    'docs/select/index.html': {size: 177516, hash: '7be152b69a5f6b66cb40064e83b834ec812f520efd957b4b4b2a6b19391ef03b', text: () => import('./assets-chunks/docs_select_index_html.mjs').then(m => m.default)},
    'docs/navigator/index.html': {size: 180528, hash: '49ec1250620b49bc932d93f7d3a6b80113973b1b793b2189f112e06abf53dcba', text: () => import('./assets-chunks/docs_navigator_index_html.mjs').then(m => m.default)},
    'docs/getting-started-theming-styling/index.html': {size: 121344, hash: '8d14eebb35d23a0a339a9692938d937acfaa97abcbc9755d8be591d571bb5c25', text: () => import('./assets-chunks/docs_getting-started-theming-styling_index_html.mjs').then(m => m.default)},
    'docs/table/index.html': {size: 260668, hash: '40aca2fe0f5d4346a015e635205b5ad2e674c77868a47d7d472a5fd2e7a7fff6', text: () => import('./assets-chunks/docs_table_index_html.mjs').then(m => m.default)},
    'docs/calendar/index.html': {size: 222168, hash: '17c16e782279a50443dd777740bbfc7cf0b66f5bc0ba2ba9cb8a9fe62d5cc510', text: () => import('./assets-chunks/docs_calendar_index_html.mjs').then(m => m.default)},
    'docs/icon/index.html': {size: 390728, hash: '12a07d381a03edf8562d57ec39e6eb2db589ecc1d84e76813468aad166e22781', text: () => import('./assets-chunks/docs_icon_index_html.mjs').then(m => m.default)},
    'docs/skeleton/index.html': {size: 200586, hash: 'a1444268024a151e8593e8d25f19f71a6542175e3f36c3533fa9bdd8bc2ebe20', text: () => import('./assets-chunks/docs_skeleton_index_html.mjs').then(m => m.default)},
    'docs/date-picker/index.html': {size: 140079, hash: 'b8d521039ae21463ada53767e996feb35829f6ae2c0d708f21c253d70235d83c', text: () => import('./assets-chunks/docs_date-picker_index_html.mjs').then(m => m.default)},
    'docs/button/index.html': {size: 337903, hash: '26362bc947a38a1f0ad42aa1111a154f4a81b4e9df4ddacbd73268e4043262a6', text: () => import('./assets-chunks/docs_button_index_html.mjs').then(m => m.default)},
    'docs/overlay/index.html': {size: 172448, hash: '841495a67f866e0aa924eb8d93adf5dedeb8189d1ea432fd82838772843b4a36', text: () => import('./assets-chunks/docs_overlay_index_html.mjs').then(m => m.default)},
    'docs/tooltip/index.html': {size: 249801, hash: 'b89ca3eb08843298e8d141c3243628fb5c6214755dbcb1a06af21f330b830aa0', text: () => import('./assets-chunks/docs_tooltip_index_html.mjs').then(m => m.default)},
    'styles-4RGLFDWV.css': {size: 13169, hash: '9AxVn0vCwMw', text: () => import('./assets-chunks/styles-4RGLFDWV_css.mjs').then(m => m.default)}
  },
};

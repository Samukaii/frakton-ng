
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 1,
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
    'docs/getting-started-installation/index.html': {size: 106990, hash: '967f92e63d7c36db6eeab04cdfdae2ad198ca98a1c6c46829831f24fece580db', text: () => import('./assets-chunks/docs_getting-started-installation_index_html.mjs').then(m => m.default)},
    'docs/getting-started-migration-guides/index.html': {size: 116833, hash: '37098f0d9f9be21a51830a2819fd7ab70c5e8f822d5d99139afbfc992c62d762', text: () => import('./assets-chunks/docs_getting-started-migration-guides_index_html.mjs').then(m => m.default)},
    'docs/badge-selector/index.html': {size: 146976, hash: '9ac5575fc0cd3607fc9c5551b6c4d3b2b5b726783ca954c7b56bb4454b9557eb', text: () => import('./assets-chunks/docs_badge-selector_index_html.mjs').then(m => m.default)},
    'docs/button/index.html': {size: 337903, hash: '44571f8be21265318948a7d911ec21a8f9777eef549990f4e7ac076596d28853', text: () => import('./assets-chunks/docs_button_index_html.mjs').then(m => m.default)},
    'docs/checkbox/index.html': {size: 132656, hash: 'e368001c244b2dc5111020375a29124b7d84e5350dadfaf92842b110f71b1742', text: () => import('./assets-chunks/docs_checkbox_index_html.mjs').then(m => m.default)},
    'docs/date-picker/index.html': {size: 140079, hash: '9a1e46f5bc36502ea48e04323f273b8cc6648e935f785568e67bee9102a58df3', text: () => import('./assets-chunks/docs_date-picker_index_html.mjs').then(m => m.default)},
    'docs/drawer/index.html': {size: 353508, hash: '451612f6e39277f3b83757f77e0303db45da52118a7f0b1a83a4314427a41855', text: () => import('./assets-chunks/docs_drawer_index_html.mjs').then(m => m.default)},
    'docs/icon/index.html': {size: 390728, hash: '80468902cc46fdec92c3eaf4ffc2e06b12f64995a8f53519bc7b00f58f5ee5ae', text: () => import('./assets-chunks/docs_icon_index_html.mjs').then(m => m.default)},
    'docs/overlay/index.html': {size: 172448, hash: 'c8997ea46439c5283bf599c0f4bfc571129a97fcfa989035609889b1f34aefaa', text: () => import('./assets-chunks/docs_overlay_index_html.mjs').then(m => m.default)},
    'docs/navigator/index.html': {size: 180528, hash: '8a318917f3ceba355b3cb5004f1b4f4306ac1a7d73ec38ef23f7eb8a2b1c9ca2', text: () => import('./assets-chunks/docs_navigator_index_html.mjs').then(m => m.default)},
    'docs/select/index.html': {size: 177516, hash: '715274534987e3f0d02c733dbdbc5e113bf432cb4e9137ec7249e87a60ee9d9c', text: () => import('./assets-chunks/docs_select_index_html.mjs').then(m => m.default)},
    'docs/skeleton/index.html': {size: 200586, hash: 'd4d706493c3d176c8b35e3ae4ba816e7618f6be7a92e3a83afc9758866b1a81b', text: () => import('./assets-chunks/docs_skeleton_index_html.mjs').then(m => m.default)},
    'docs/tooltip/index.html': {size: 249801, hash: '0dc2bf8ba0d8ecd49ecc32ff049f01635937573f3862d7698082fd649748d4ec', text: () => import('./assets-chunks/docs_tooltip_index_html.mjs').then(m => m.default)},
    'docs/table/index.html': {size: 260694, hash: 'e7315471c2aa49ac033cca62acc6c456ec7744279c62dc639bb7737bea2843f3', text: () => import('./assets-chunks/docs_table_index_html.mjs').then(m => m.default)},
    'docs/autocomplete/index.html': {size: 208717, hash: 'f5a253e52ed75b7f6d429674676ea058188f3aaef69920b5a8cc5a051639844c', text: () => import('./assets-chunks/docs_autocomplete_index_html.mjs').then(m => m.default)},
    'docs/buttons-list/index.html': {size: 165855, hash: '74741c73ae427653c20c814a57613b890c95ff0f3ab746c03454ee2dfed29d8a', text: () => import('./assets-chunks/docs_buttons-list_index_html.mjs').then(m => m.default)},
    'docs/dialog/index.html': {size: 157560, hash: '8550e9c19acee4e60ca1eb3322d6b6a031cc7f0d46f664f5f8510d62dd501ce4', text: () => import('./assets-chunks/docs_dialog_index_html.mjs').then(m => m.default)},
    'docs/calendar-navigator/index.html': {size: 157505, hash: '51bdbdc57611d45fd4ae413c413b894e983437a074bde79c0da9e4c26f7625a9', text: () => import('./assets-chunks/docs_calendar-navigator_index_html.mjs').then(m => m.default)},
    'docs/input/index.html': {size: 149483, hash: '6173169755014d0182ba8fc8f7c58388762f5a55461555d84b0975e0fca4774a', text: () => import('./assets-chunks/docs_input_index_html.mjs').then(m => m.default)},
    'docs/getting-started-theming-styling/index.html': {size: 121344, hash: '8d14eebb35d23a0a339a9692938d937acfaa97abcbc9755d8be591d571bb5c25', text: () => import('./assets-chunks/docs_getting-started-theming-styling_index_html.mjs').then(m => m.default)},
    'docs/paginator/index.html': {size: 169921, hash: '2a18e49d4b27895e30f19697ee31877ac5091e80053e9f3e7462fb5906451a13', text: () => import('./assets-chunks/docs_paginator_index_html.mjs').then(m => m.default)},
    'docs/spinner/index.html': {size: 149355, hash: '32f55ea55f6b91f5ff6666123cffc1d22b971c9366bc4352a47ede921f91e8e2', text: () => import('./assets-chunks/docs_spinner_index_html.mjs').then(m => m.default)},
    'docs/calendar/index.html': {size: 222168, hash: '2cdaab494336b8244152c1b339b122c090e3fd659413f46085831e12c4073f77', text: () => import('./assets-chunks/docs_calendar_index_html.mjs').then(m => m.default)},
    'docs/badge/index.html': {size: 157519, hash: '7da8effbce30bafb60d3dfce5ee3ff4a81180704c42043f006b60b9a60139fda', text: () => import('./assets-chunks/docs_badge_index_html.mjs').then(m => m.default)},
    'docs/side-menu/index.html': {size: 210586, hash: 'affff77ed8cece3db4179fc0f809dcffa253ef7f066a93ea9c3f46fadb40b7aa', text: () => import('./assets-chunks/docs_side-menu_index_html.mjs').then(m => m.default)},
    'docs/focus-trap/index.html': {size: 173203, hash: 'b6b826080a0834859a1434447c22aa7ac7baf8a16b3c2adac2a1cecc23a78c99', text: () => import('./assets-chunks/docs_focus-trap_index_html.mjs').then(m => m.default)},
    'docs/no-results/index.html': {size: 139761, hash: 'fc8e641acd17f4f89d31ec3ac61a0864bbbcb45af4c9a01c39d870cf0821a35b', text: () => import('./assets-chunks/docs_no-results_index_html.mjs').then(m => m.default)},
    'docs/color-picker/index.html': {size: 146808, hash: '4b9815239392e3f6735021b787fdc60dc482161c24e66648043a042ec7ca1e2c', text: () => import('./assets-chunks/docs_color-picker_index_html.mjs').then(m => m.default)},
    'docs/textarea/index.html': {size: 208046, hash: '7600877d72836ef4b7b6cf124b1db71e25c34ce99207b3eefc40829615989c22', text: () => import('./assets-chunks/docs_textarea_index_html.mjs').then(m => m.default)},
    'styles-4RGLFDWV.css': {size: 13169, hash: '9AxVn0vCwMw', text: () => import('./assets-chunks/styles-4RGLFDWV_css.mjs').then(m => m.default)}
  },
};


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
    'index.csr.html': {size: 16526, hash: '3961262af3588824a7bba9646123e7e3fa021be9e167d9187aa120da7a547a83', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 9686, hash: '026f06452fcb1c3532c003e96a375989f32d4ba7bbbb9da0c10eee37a9439ab0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 324, hash: 'ee95ed057946a17941839b39790de904855fcd98d8011a62adeb729fa8cda55b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'docs/getting-started-installation/index.html': {size: 107151, hash: '3af727e52d2cb01c60b2f58d622e39e85607a941e943848faa8c071cdd5fca3b', text: () => import('./assets-chunks/docs_getting-started-installation_index_html.mjs').then(m => m.default)},
    'docs/badge-selector/index.html': {size: 150728, hash: '8d0fe932591c25e5fefe635c6a40bbc5cc5a5f3fdffbcf719aed0fd8c1e5040d', text: () => import('./assets-chunks/docs_badge-selector_index_html.mjs').then(m => m.default)},
    'docs/badge/index.html': {size: 160790, hash: 'a10f43d147034c75d76a45c1b898955fafbd35f23aef836c4ddc1e4e4e7ad09d', text: () => import('./assets-chunks/docs_badge_index_html.mjs').then(m => m.default)},
    'docs/color-picker/index.html': {size: 158786, hash: '58e8edab0d241c34b83c7ed95e301532e9137bf4eceec359b89d566f3a4f7a80', text: () => import('./assets-chunks/docs_color-picker_index_html.mjs').then(m => m.default)},
    'docs/calendar-navigator/index.html': {size: 160017, hash: '429ec913a9ac1befcdb6ede3e64cbd0616e7d808bf1421df9df4a62bcc9a4ec4', text: () => import('./assets-chunks/docs_calendar-navigator_index_html.mjs').then(m => m.default)},
    'docs/focus-trap/index.html': {size: 179876, hash: '75194a8e9ef06b161650b71f173057f57c379ff91645de4787c02a0b82aa02f7', text: () => import('./assets-chunks/docs_focus-trap_index_html.mjs').then(m => m.default)},
    'docs/dialog/index.html': {size: 176324, hash: '7855fa41daae6aa26cfffda6f296b3889e5f69fece842b554e880abd6472fd18', text: () => import('./assets-chunks/docs_dialog_index_html.mjs').then(m => m.default)},
    'docs/input/index.html': {size: 152120, hash: 'c8a407ce34d5ab5d1cb455260793e36fdce2f66feb3a7b1e10a74ac4e68f287f', text: () => import('./assets-chunks/docs_input_index_html.mjs').then(m => m.default)},
    'docs/no-results/index.html': {size: 142863, hash: '5a7bf9c12b4fed2f9de00411aac6b57b2758e2472b7def5e9ffef55277f1759e', text: () => import('./assets-chunks/docs_no-results_index_html.mjs').then(m => m.default)},
    'docs/paginator/index.html': {size: 175649, hash: '8a9ac052bf58dd26bff015e5098d52151e195abe71f97f6e8061464d1581bbb8', text: () => import('./assets-chunks/docs_paginator_index_html.mjs').then(m => m.default)},
    'docs/side-menu/index.html': {size: 218105, hash: '68be5cb4cf5bdd78183c3710bb57404922996246cd4ba579c8a9d1d135ded87f', text: () => import('./assets-chunks/docs_side-menu_index_html.mjs').then(m => m.default)},
    'docs/spinner/index.html': {size: 151916, hash: '44bdcead0569f6a9f1263b34ab2bcc0e14a1c9d4a644ecad3bf3959843b8ac9b', text: () => import('./assets-chunks/docs_spinner_index_html.mjs').then(m => m.default)},
    'docs/getting-started-migration-guides/index.html': {size: 116994, hash: '93df16890dd2478ea456e433c083bf091b22873c3de3f3fb3d7bb5bb8115b601', text: () => import('./assets-chunks/docs_getting-started-migration-guides_index_html.mjs').then(m => m.default)},
    'docs/textarea/index.html': {size: 210830, hash: '6880f7aef5c4562cb14a74c8a8695717f2cff3537ac5008d78d38439eda2fe0c', text: () => import('./assets-chunks/docs_textarea_index_html.mjs').then(m => m.default)},
    'docs/autocomplete/index.html': {size: 214577, hash: 'e83f07ce805223d2d62de0d9b7c4e06a43cb0209adb3462dd29ac19939e6c412', text: () => import('./assets-chunks/docs_autocomplete_index_html.mjs').then(m => m.default)},
    'docs/buttons-list/index.html': {size: 170922, hash: 'b896ccd205c0f003e1fa9853155a2a03da412aff6ae0a2ff72a49ae7c8c86755', text: () => import('./assets-chunks/docs_buttons-list_index_html.mjs').then(m => m.default)},
    'docs/checkbox/index.html': {size: 135642, hash: '8eaf8697ce248925794c3ce2088b5296a7dd1870687336a8b95cd79889db1615', text: () => import('./assets-chunks/docs_checkbox_index_html.mjs').then(m => m.default)},
    'docs/drawer/index.html': {size: 356676, hash: '5597f3b966f5406a450c96ae269f29dc2506e52ceed28a1afa8beac5986883a6', text: () => import('./assets-chunks/docs_drawer_index_html.mjs').then(m => m.default)},
    'docs/navigator/index.html': {size: 183259, hash: 'd27ce7b35c0ec1c347772178ce6c4721f32efb4d22d0cc20ff03ed2e5dc01c7e', text: () => import('./assets-chunks/docs_navigator_index_html.mjs').then(m => m.default)},
    'docs/select/index.html': {size: 180545, hash: '12ab9c45e05351a2790e3cb97ae18a2ff9c2a61a3cf38eef84719868021c36ab', text: () => import('./assets-chunks/docs_select_index_html.mjs').then(m => m.default)},
    'docs/getting-started-theming-styling/index.html': {size: 121505, hash: '9db40e3a5e98d3b8c58fce25fbf417400f11a523f38d92b2f8b4449a0449347b', text: () => import('./assets-chunks/docs_getting-started-theming-styling_index_html.mjs').then(m => m.default)},
    'docs/calendar/index.html': {size: 228083, hash: 'e25290b78cd6f84f3febe7341343aa9f247a486d0c5f40525cc732ed9a8d0643', text: () => import('./assets-chunks/docs_calendar_index_html.mjs').then(m => m.default)},
    'docs/table/index.html': {size: 268150, hash: '3e2b3fab2d6394a8afdc27575477516ef3573494ff829127e3a308e220cc4f0f', text: () => import('./assets-chunks/docs_table_index_html.mjs').then(m => m.default)},
    'docs/skeleton/index.html': {size: 209328, hash: '850029b957dd8704927dff75ac0f308dab60e95b71063663b6141f4e5a4eefd3', text: () => import('./assets-chunks/docs_skeleton_index_html.mjs').then(m => m.default)},
    'docs/icon/index.html': {size: 393638, hash: 'a06219cedc5a21e1ec4ae0852dcc8cecbdbfd66646984f4116a9641ff91359c4', text: () => import('./assets-chunks/docs_icon_index_html.mjs').then(m => m.default)},
    'docs/overlay/index.html': {size: 190206, hash: 'eb380133073b125b41558c3726d24601a465022f1f8e934b76826a70f3ae0885', text: () => import('./assets-chunks/docs_overlay_index_html.mjs').then(m => m.default)},
    'docs/date-picker/index.html': {size: 143835, hash: '909e0a0d895b72f69528cdab485abf5c68aaf836d0dd8bd06483446ccec4db75', text: () => import('./assets-chunks/docs_date-picker_index_html.mjs').then(m => m.default)},
    'docs/button/index.html': {size: 340718, hash: '03db5c4149954acb18b025b7c5f5a1eb4735044ab8e21ea1766504766efccd2d', text: () => import('./assets-chunks/docs_button_index_html.mjs').then(m => m.default)},
    'docs/tooltip/index.html': {size: 253890, hash: 'c5b17e158a82a30afb4de96d1690c162ef2394c699a86d2fd2e128aa74ca006b', text: () => import('./assets-chunks/docs_tooltip_index_html.mjs').then(m => m.default)},
    'styles-4RGLFDWV.css': {size: 13169, hash: '9AxVn0vCwMw', text: () => import('./assets-chunks/styles-4RGLFDWV_css.mjs').then(m => m.default)}
  },
};

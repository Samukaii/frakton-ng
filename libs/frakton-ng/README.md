# Frakton NG
**Modern Angular UI. Enterprise-ready. Effortless developer experience.**
[![npm version](https://img.shields.io/npm/v/frakton-ng?style=flat-square)](https://www.npmjs.com/package/frakton-ng)

Frakton NG is an **opinionated, accessible, and robust UI library** built from scratch for Angular.  
Delivers speed, scalability, and real productivity — with a design language ready for real-world apps, not só pra tela de demo.

<img width="2312" height="1342" alt="image" src="https://github.com/user-attachments/assets/11df3f3e-6392-40a4-ab83-09ddfa622e73" />

---

### ✨ Why Frakton NG?

- **Serious DX:** Ergonomic APIs, overlays, and true type safety (Signals everywhere)
- **Accessible by default:** WCAG & keyboard-friendly out-of-the-box
- **Consistent design:** Token-based theming, ready for branding or vanilla use
- **No bloat:** Standalone Angular components only. No wrappers, no nonsense.
- **Productivity, not complexity:** Ship faster, maintain easier

[📚 See the docs & interactive demos →](https://samukaii.github.io/frakton-ng)

---

## 🚀 Installation

```bash
npm install frakton-ng
```

---

## 🎨 Styles & Themes

Add the Frakton NG styles in your angular.json:

```json
"styles": [
  "node_modules/@frakton-ng/core/assets/styles.css",
  "node_modules/@frakton-ng/core/assets/themes/light.css"
]
```

- styles.css: Core styles and resets
- light.css: Default light theme
- Custom themes: See theming docs



---

## 🧑‍💻 Quick usage

```ts
import { FktButtonComponent } from '@frakton-ng/core';

@Component({
  template: `<fkt-button text="Click" (click)="..."></fkt-button>`,
  imports: [FktButtonComponent],
  standalone: true
})
export class AppComponent {}
```

---

## 🧩 Features

- 100% standalone components (no module hell)
- Accessible, WCAG-ready out of the box
- Signal-first reactivity (no hacks)
- Real overlays: dialogs, tooltips, snackbars — composable and nestable
- Token-based theming (change or extend easily)
- Built-in docs with real-world playgrounds
- MIT licensed, open, forever

---

## ⚡️ Quick links

- [📚 Docs & Demos](https://samukaii.github.io/frakton-ng)
- [🐛 Issues](https://github.com/Samukaii/frakton-ng/issues)

---

## 🛠️ Contributing

Found a bug or want to suggest something?
Check `CONTRIBUTING.md` or open an issue.

---

MIT © Samuel Alejandro

Frakton NG

Frakton NG is a modern, opinionated, and enterprise-ready UI component library for Angular. Built with accessibility, performance, and developer experience in mind, Frakton NG accelerates the creation of visually stunning, scalable, and maintainable applications.

> ✨ Why Frakton NG?
> - Robust and accessible: Components follow best practices and work for everyone.
> - Consistent design language: Out-of-the-box themes and design tokens for brand consistency.
> - Real productivity: Intuitive APIs, type-safe signals, advanced overlays, and DX you actually feel.

---

## 📚 Documentation

Explore full documentation, interactive demos, and the API reference:

[Frakton NG Docs](https://samukaii.github.io/frakton-ng)

---

## 🚀 Installation

Add Frakton NG to your project using your favorite package manager:

```shell
npm install @frakton-ng/core
```
or
```shell
yarn add @frakton-ng/core
```
or
```shell
pnpm add @frakton-ng/core
```


---

## 🎨 Integration

Import the required styles and theme files into your app by adding them to the styles array in your angular.json:

```json
{
	"styles": [
		"node_modules/@frakton-ng/core/assets/styles.css",
		"node_modules/@frakton-ng/core/assets/themes/light.css",
		"src/styles.css"
	]
}
```

- `styles.css`: Base component styles, tokens, and resets.
- `light.css`: The default light theme (you can customize or swap themes).
- Custom themes: Create your own theme using the built-in design tokens.



---

## 🧑‍💻 Usage Example

Here’s how to use a Frakton NG button in a standalone Angular component:

```ts
import { Component } from '@angular/core';
import { FktButtonComponent } from '@frakton-ng/core';

@Component({
	selector: 'app-root',
	template: `
		<fkt-button 
		  text="Click Me"
		  theme="raised"
		  color="primary"
		  (click)="handleClick()"
		></fkt-button>
	  `,
	imports: [FktButtonComponent]
})
export class AppComponent {
	handleClick() {
		console.log('Button clicked!');
	}
}
```

---

## 🧩 Features

- Angular-first: 100% standalone components, typed with Signals.
- Ready for enterprise: Accessible, customizable, and scalable.
- Modern overlay system: Ultra-flexible dialogs, tooltips, snackbars, with smart positioning and signal binding.
- Themeable & token-based: Swap, extend, or create new themes easily using design tokens.
- Best-in-class DX: API focused on productivity and ergonomics.
- Built-in documentation: Full Storybook with real-world demos and custom playgrounds.
- Open source, MIT licensed.

---

## ⚡️ Quick links
- Full Docs & Storybook
- Component Gallery
- GitHub Issues / Feature requests

---

## 🛠️ Contributing

Frakton NG is in active development!
If you want to report bugs, suggest new features, or contribute code, check out the contributing guide or open an issue.


---

## 📦 License

MIT © Samuel Alejandro

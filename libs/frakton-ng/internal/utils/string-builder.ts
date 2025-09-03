export class StringBuilder {
	constructor(private initialValue = '') {
	}

	blankLine(amount = 1) {
		this.initialValue += '\n'.repeat(amount);
		return this;
	}

	tab(amount = 1) {
		this.initialValue += '    '.repeat(amount);
		return this;
	}

	insert(text: string) {
		this.initialValue += text;
		return this;
	}

	insertAtNewLine(text: string) {
		this.initialValue += `\n${text}`;
		return this;
	}

	build() {
		return this.initialValue;
	}
}

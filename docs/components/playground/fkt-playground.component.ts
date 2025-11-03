import {
	Component,
	computed,
	DestroyRef,
	effect,
	ElementRef,
	inject,
	input,
	inputBinding,
	linkedSignal,
	OnInit,
	reflectComponentType,
	signal,
	Type,
	viewChild,
	ViewContainerRef
} from '@angular/core';
import { Generic } from 'frakton-ng/internal/types';
import { DesignToken } from '../../models/design-token';
import { ArgType } from '../../models/arg-type';
import { ArgItem } from '../../models/arg-item';
import { DesignTokenItem } from '../../models/design-token-item';
import { FktPlaygroundTabsComponent } from './tabs/fkt-playground-tabs.component';
import { getGlobalTheme } from '../../utils/get-global.theme';
import { FktIconComponent } from 'frakton-ng/icon';


export const globalTheme = () => {
	const destroyRef = inject(DestroyRef);
	const theme = signal<'light' | 'dark'>(getGlobalTheme());

	effect(() => {
		if (theme() === getGlobalTheme()) return;

		window.parent.document.dispatchEvent(new CustomEvent('theme-changed', {detail: theme()}))
		document.dispatchEvent(new CustomEvent('theme-changed', {detail: theme()}));
	});

	const listener = (event: Event) => {
		const themeValue = (event as unknown as { detail: 'light' | 'dark' }).detail;

		document.body.setAttribute('data-fkt-theme', themeValue);
		theme.set(themeValue);
	}

	document.addEventListener('theme-changed', listener);

	destroyRef.onDestroy(() => {
		document.removeEventListener('theme-changed', listener);
	})

	return theme;
}


@Component({
	selector: 'fkt-playground',
	imports: [
		FktPlaygroundTabsComponent,
		FktIconComponent
	],
	templateUrl: './fkt-playground.component.html',
	styleUrl: './fkt-playground.component.scss',
	host: {
		'[class.view-mode--story]': "viewMode() === 'story'",
		'[class.dark]': "theme() === 'dark'",
		'[attr.data-fkt-theme]': "theme()",
	}
})
export class FktPlaygroundComponent implements OnInit {
	component = input.required<Type<any>>();
	selector = input<string>();
	viewMode = input.required<'story' | 'docs'>();
	targetComponent = input.required<Type<any>>();
	args = input<Generic>();
	argTypes = input<Record<string, ArgType>>();
	noPadding = input(false);
	customDimensions = input<{ width?: string; height?: string }>();
	rawDesignTokens = input<DesignToken[]>([], {
		alias: "designTokens",
	});

	protected theme = globalTheme();

	private viewRef = viewChild.required('template', {read: ViewContainerRef});
	private elementRef = viewChild.required('container', {read: ElementRef});


	expanded = linkedSignal(() => {
		return this.viewMode() === 'story';
	})

	protected templateSelector = computed(() => {
		let selector = this.selector() ?? ':host'

		if (!this.selector()) {
			try {
				const reflection = reflectComponentType(this.targetComponent())
				if (reflection?.selector)
					selector = reflection?.selector;
			} catch (e) {}
		}

		return selector;
	})

	protected designTokens = computed((): DesignTokenItem[] => {
		const tokens = this.rawDesignTokens();
		this.theme();

		return tokens.map(token => {
			let defaultValue = token.defaultValue;

			if (token.reference.startsWith('--')) {
				const element = this.elementRef().nativeElement as HTMLElement;

				const result = getComputedStyle(element).getPropertyValue(token.reference);

				if (result) defaultValue = result;
			}

			return {
				name: token.name,
				type: token.type,
				reference: token.reference,
				category: token.category,
				description: token.description,
				component: token.component,
				defaultValue: defaultValue,
				control: signal(defaultValue),
			}
		})
	});

	protected designTokensStyle = computed(() => {
		const tokens = this.designTokens();


		return Object.fromEntries(tokens.flatMap(token => {
			if (!token.control()) return [];

			return [[token.name, token.control()]]
		}))
	});

	protected argsList = computed((): ArgItem<any>[] => {
		const argTypes = this.argTypes();
		const args = this.args();

		if (!args) return [];

		return Object.entries(args).flatMap(([key, value]) => {
			const argType = argTypes?.[key];

			if (!argType) return [];

			if (argType.table.category !== "Attributes")
				return [];

			return {
				name: key,
				type: argType.control.type,
				options: argType.options?.map((option) => ({label: option, value: option})) ?? [],
				description: argType.description,
				control: signal(value)
			}
		});
	})

	protected buttonThemeLabel = computed(() => {
		return this.theme() === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
	});

	protected buttonThemeIcon = computed(() => {
		return this.theme() === 'dark' ? 'sun' : 'moon';
	})

	protected toggleTheme() {
		this.theme.update(theme => theme === 'dark' ? 'light' : 'dark');
	}

	ngOnInit() {
		const component = this.component();
		const argTypes = this.argsList();

		if (!component || !argTypes) return;

		try {
			this.viewRef().createComponent(component, {
				bindings: argTypes.map(arg => {
					return inputBinding(arg.name, arg.control)
				})
			});
		} catch (e) {
			console.log(e)
		}
	}
}

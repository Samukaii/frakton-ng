import {
	Component,
	computed,
	effect, ElementRef,
	inject,
	input,
	inputBinding,
	reflectComponentType,
	signal,
	untracked, viewChild, ViewContainerRef
} from '@angular/core';
import { FktPlaygroundPanelComponent } from '../panel/fkt-playground-panel.component';
import { ThemeService } from '@/core/services/theme.service';
import { StoryInfoService } from '@/core/services/story-info.service';
import { ArgItem } from '@/models/arg-item';
import { MarkUsed } from 'frakton-ng/internal/utils';
import { DesignTokenItem } from '@/models/design-token-item';

@Component({
  selector: 'fkt-playground-preview',
	imports: [
		FktPlaygroundPanelComponent
	],
  templateUrl: './playground-preview.component.html',
  styleUrl: './playground-preview.component.scss'
})
export class PlaygroundPreviewComponent {
	storyName = input.required<string>();
	selector = input<string>();
	noPadding = input(false);
	customDimensions = input<{ width?: string; height?: string }>();

	protected readonly themeService = inject(ThemeService);
	protected readonly storyInfoService = inject(StoryInfoService);
	protected expanded = signal(false);

	private readonly viewRef = viewChild('template', {read: ViewContainerRef});
	private readonly elementRef = viewChild('container', {read: ElementRef});

	@MarkUsed()
	protected readonly renderComponent = effect(()=> {
		const component = this.storyInfoService.getStoryComponent(this.storyName());
		const argTypes = this.argsList();
		const viewRef = this.viewRef()

		if (!component || !argTypes || !viewRef) return;

		untracked(() => {
			try {
				viewRef.createComponent(component, {
					bindings: argTypes.map(arg => {
						return inputBinding(arg.name, arg.control)
					})
				});
			} catch (e) {
				console.log(e)
			}
		})
	})

	protected readonly designTokens = computed((): DesignTokenItem[] => {
		const tokens = this.storyInfoService.storyData.meta.designTokens ?? [];
		this.themeService.currentTheme();

		const elementRef = this.elementRef();

		if(!elementRef) return [];

		return tokens.map(token => {
			let defaultValue = token.defaultValue;

			if (token.reference.startsWith('--')) {
				const element = elementRef.nativeElement as HTMLElement;

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

	protected readonly designTokensStyle = computed(() => {
		const tokens = this.designTokens();


		return Object.fromEntries(tokens.flatMap(token => {
			if (!token.control()) return [];

			return [[token.name, token.control()]]
		}))
	});


	protected readonly templateSelector = computed(() => {
		let selector = this.selector() ?? ':host'
		const component = this.storyInfoService.storyData.meta.component;

		if (!this.selector() && !!component) {
			try {
				const reflection = reflectComponentType(component)
				if (reflection?.selector)
					selector = reflection?.selector;
			} catch (e) {}
		}

		return selector;
	})

	protected readonly argsList = computed((): ArgItem<any>[] => {
		const argTypes = this.storyInfoService.storyData.meta.argTypes;
		const args = this.storyInfoService.getStory(this.storyName())?.story?.args ?? {};

		if (!args) return [];

		return Object.entries(args).flatMap(([key, value]) => {
			const argType = argTypes?.[key];

			if (!argType) return [];

			if (argType.category !== "Attributes")
				return [];

			return {
				name: key,
				type: argType.control,
				options: argType.options?.map((option) => ({label: option, value: option})) ?? [],
				description: argType.description!,
				control: signal(value)
			}
		});
	})
}

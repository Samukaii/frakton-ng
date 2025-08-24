import {
	ApplicationRef, ComponentRef,
	createComponent,
	DOCUMENT,
	EnvironmentInjector,
	inject,
	Injectable, Injector,
	Type,
} from '@angular/core';
import { createComponentBindings } from '../../utils';
import { FktReactiveComponentData } from '../../shared/types';


@Injectable({providedIn: 'root'})
export class FktElementAnchorService {
	private document = inject(DOCUMENT);

	private zIndex = 9999;

	constructor(
		private appRef: ApplicationRef,
		private injector: EnvironmentInjector
	) {
	}

	createAnchor<T>(component: Type<T>, options?: Partial<FktReactiveComponentData<T>>, injector?: Injector) {
		const componentRef = createComponent(component, {
			elementInjector: injector,
			environmentInjector: this.injector,
			bindings: createComponentBindings(component, options ?? {})
		});

		this.appRef.attachView(componentRef.hostView);

		const el = (componentRef.hostView as any).rootNodes[0] as HTMLElement;
		this.document.body.appendChild(el);

		const element = componentRef.location.nativeElement as HTMLElement;
		element.style.zIndex = `${this.getZIndex()}`

		return { componentRef, destroy: () => this.destroy(componentRef), zIndex: this.getZIndex() };
	}

	private getZIndex() {
		this.zIndex++;

		return this.zIndex;
	}

	private destroy(ref: ComponentRef<any>) {
		ref.destroy();
		this.zIndex--;
	}
}

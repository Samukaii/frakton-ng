import {
	ApplicationRef,
	createComponent,
	DOCUMENT,
	EnvironmentInjector,
	inject,
	Injectable,
	Injector,
	Type,
} from '@angular/core';
import { createComponentBindings } from 'frakton-ng/internal/utils';
import { FktReactiveComponentData } from 'frakton-ng/internal/types';


@Injectable({
	providedIn: 'root'
})
export class FktElementAnchorService {
	private document = inject(DOCUMENT);
	private appRef = inject(ApplicationRef);
	private injector = inject(EnvironmentInjector);

	createAnchor<T>(component: Type<T>, options?: Partial<FktReactiveComponentData<T>>, injector?: Injector) {
		const componentRef = createComponent(component, {
			elementInjector: injector,
			environmentInjector: this.injector,
			bindings: createComponentBindings(component, options ?? {})
		});

		this.appRef.attachView(componentRef.hostView);

		const el = (componentRef.hostView as any).rootNodes[0] as HTMLElement;
		this.document.body.appendChild(el);

		return { componentRef, destroy: () => componentRef.destroy() };
	}
}

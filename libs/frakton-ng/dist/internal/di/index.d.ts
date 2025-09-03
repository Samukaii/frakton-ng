import * as _angular_core from '@angular/core';
import { InjectionToken } from '@angular/core';
import { FktGeometryPoint } from 'frakton-ng/internal/types';

declare const injectWindowScroll: () => _angular_core.Signal<FktGeometryPoint>;

declare const WINDOW: InjectionToken<Window>;

export { WINDOW, injectWindowScroll };

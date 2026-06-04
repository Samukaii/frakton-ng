import { Signal } from '@angular/core';
import { Observable } from 'rxjs';

export type RecomputeOn =
    | Signal<any>
    | Observable<any>
    | (Signal<any> | Observable<any>)[];

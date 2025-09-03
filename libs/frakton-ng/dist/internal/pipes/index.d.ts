import * as i0 from '@angular/core';
import { PipeTransform } from '@angular/core';

declare class CallPipe<C> implements PipeTransform {
    private readonly context;
    transform<Fn extends (...args: any[]) => any>(first: Parameters<Fn>[0], fn: Fn, ...params: Parameters<Fn>): ReturnType<Fn>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CallPipe<any>, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<CallPipe<any>, "call", true>;
}

declare class ToClassPipe implements PipeTransform {
    transform(value: string[]): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToClassPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ToClassPipe, "toClass", true>;
}

export { CallPipe, ToClassPipe };

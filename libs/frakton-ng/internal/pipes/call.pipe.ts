import { ChangeDetectorRef, EmbeddedViewRef, inject, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'call',
})
export class CallPipe<C> implements PipeTransform {
    private readonly context = (<EmbeddedViewRef<C>>inject(ChangeDetectorRef)).context;

    transform<Fn extends (...args: any[]) => any>(first: Parameters<Fn>[0], fn: Fn, ...params: Parameters<Fn>): ReturnType<Fn> {
        return fn.apply(this.context, [first,...params]);
    }
}

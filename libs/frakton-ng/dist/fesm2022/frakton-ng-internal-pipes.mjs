import * as i0 from '@angular/core';
import { inject, ChangeDetectorRef, Pipe } from '@angular/core';

class CallPipe {
    context = inject(ChangeDetectorRef).context;
    transform(first, fn, ...params) {
        return fn.apply(this.context, [first, ...params]);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: CallPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "20.2.3", ngImport: i0, type: CallPipe, isStandalone: true, name: "call" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: CallPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'call',
                }]
        }] });

class ToClassPipe {
    transform(value) {
        return value.join(' ');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: ToClassPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "20.2.3", ngImport: i0, type: ToClassPipe, isStandalone: true, name: "toClass" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: ToClassPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'toClass',
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { CallPipe, ToClassPipe };
//# sourceMappingURL=frakton-ng-internal-pipes.mjs.map

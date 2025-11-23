import { inject, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'bypassHtml',
})
export class BypassHtmlPipe implements PipeTransform {
    private readonly sanitizer = inject(DomSanitizer);

    transform(value: string): string {
        return this.sanitizer.bypassSecurityTrustHtml(value) as string ?? "";
    }
}

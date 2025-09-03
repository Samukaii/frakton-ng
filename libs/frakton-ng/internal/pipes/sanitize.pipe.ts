import {inject, Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({
	name: 'sanitize',
	standalone: true
})
export class SanitizePipe implements PipeTransform {
	private sanitizer = inject(DomSanitizer);

	transform(value: string) {
		return this.sanitizer.bypassSecurityTrustHtml(value) as string;
	}
}

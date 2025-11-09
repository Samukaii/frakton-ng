import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { defineLanguages } from './prism-languages/define-languages'

defineLanguages();

@Component({
	imports: [RouterModule],
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
}

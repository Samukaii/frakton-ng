import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FktButtonComponent } from 'frakton-ng/button';

@Component({
    selector: 'app-button-anchors-example',
    imports: [FktButtonComponent, RouterLink],
    templateUrl: './button-anchors-example.component.html',
    styleUrl: './button-anchors-example.component.scss',
})
export class ButtonAnchorsExampleComponent {}

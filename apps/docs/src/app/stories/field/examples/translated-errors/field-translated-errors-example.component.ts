import { Component, effect, inject, signal } from '@angular/core';
import {
    email,
    Field,
    form,
    maxLength,
    minLength,
    required,
} from '@angular/forms/signals';
import { TranslateService } from '@/core/services/translate.service';
import { FktFieldComponent, FktInputTextDirective } from 'frakton-ng/field';
import { FktIconComponent } from 'frakton-ng/icon';
import { FktSelectComponent, FktSelectOption } from 'frakton-ng/select';

@Component({
    selector: 'app-field-translated-errors-example',
    imports: [
        Field,
        FktFieldComponent,
        FktInputTextDirective,
        FktIconComponent,
        FktSelectComponent,
    ],
    templateUrl: './field-translated-errors-example.component.html',
    styleUrl: './field-translated-errors-example.component.scss',
})
export class FieldTranslatedErrorsExampleComponent {
    private translate = inject(TranslateService);

    private model = signal({
        name: '',
        username: 'ab',
        bio: 'This text is too long',
        email: '',
    });

    private selectedLanguage = signal('en-US');

    protected form = form(this.model, (schema) => {
        required(schema.name);
        minLength(schema.username, 5);
        maxLength(schema.bio, 12);
        required(schema.email);
        email(schema.email);
    });

    protected language = form(this.selectedLanguage);

    protected languageOptions: FktSelectOption[] = [
        { label: 'English', value: 'en-US' },
        { label: 'Spanish', value: 'es-ES' },
        { label: 'French', value: 'fr-FR' },
        { label: 'Portuguese', value: 'pt-BR' },
        { label: 'German', value: 'de-DE' },
        { label: 'Italian', value: 'it-IT' },
    ];

    protected updateLanguage = effect(() => {
        this.translate.setLanguage(this.language().value() as string);
    });
}

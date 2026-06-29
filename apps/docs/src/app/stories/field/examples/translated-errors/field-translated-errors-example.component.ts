import { Component, effect, inject, signal } from '@angular/core';
import {
    email,
    form,
    FormField,
    maxLength,
    minLength,
    required,
} from '@angular/forms/signals';
import { MyTranslateService } from '@/core/services/my-translate.service';
import { FktFieldComponent, FktFieldPrefixDirective } from 'frakton-ng/field';
import { FktInputTextDirective } from 'frakton-ng/input-text';
import { FktIconComponent } from 'frakton-ng/icon';
import { FktSelectComponent } from 'frakton-ng/select';

@Component({
    selector: 'app-field-translated-errors-example',
    imports: [
        FormField,
        FktFieldComponent,
        FktInputTextDirective,
        FktIconComponent,
        FktSelectComponent,
        FktFieldPrefixDirective,
    ],
    templateUrl: './field-translated-errors-example.component.html',
    styleUrl: './field-translated-errors-example.component.scss',
})
export class FieldTranslatedErrorsExampleComponent {
    private translate = inject(MyTranslateService);

    private model = signal({
        name: '',
        username: 'ab',
        bio: 'This text is too long',
        email: '',
    });

    private selectedLanguage = signal('en');

    protected form = form(this.model, (schema) => {
        required(schema.name);
        minLength(schema.username, 5);
        maxLength(schema.bio, 12);
        required(schema.email);
        email(schema.email);
    });

    protected language = form(this.selectedLanguage);

    protected languageOptions: { label: string; value: string }[] = [
        { label: 'English', value: 'en' },
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

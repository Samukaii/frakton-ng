import { FktFieldComponent } from 'frakton-ng/field';
import { Meta } from '@/models/meta';
import { Story } from '@/models/story';
// @ts-expect-error
import documentation from './fkt-field.docs.md' with { loader: 'text' };
import designTokens from './fkt-field-design-tokens.json';
import { DesignToken } from '@/models/design-token';
import { BasicExampleComponent } from '@/stories/field/examples/basic/basic-example.component';

const meta: Meta = {
	title: "Components/Form/Field",
	component: FktFieldComponent,
    designTokens: designTokens as DesignToken[],
    description: "A versatile form input component with multiple types, data transformers, and comprehensive validation support. Built with Angular signals for reactive form integration.",
	documentation,
    panelStyle: {
        outerWidth: '100%',
        fillContainer: true
    },
	argTypes: {
	}
}

export const Basic: Story<BasicExampleComponent> = {
    component: BasicExampleComponent,
	description: "A basic form field",
	args: {
        label: "Teste"
	}
};

export default meta;

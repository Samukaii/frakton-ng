import { FktDatePickerComponent } from 'frakton-ng/date-picker';
import { Meta } from '@/models/meta';
import { Story } from '@/models/story';
// @ts-expect-error
import documentation from './fkt-date-picker.docs.md' with { loader: "text" };

const meta: Meta = {
	title: "Components/Form/Date Picker",
    description: "The FktDatePicker component provides an intuitive and accessible date selection interface. Built with Angular signals and reactive forms, it offers a clean input field with a calendar overlay for date selection.",
	component: FktDatePickerComponent,
	documentation,
	argTypes: {
		label: {
			control: "text",
			category: "Attributes",
			type: "string",
			defaultValue: "undefined",
			description: 'Label text displayed above the input field'
		},
		placeholder: {
			control: "text",
			category: "Attributes",
			type: "string",
			defaultValue: "undefined",
			description: 'Placeholder text shown in the input field'
		}
	}
}

export const BasicDatePicker: Story<FktDatePickerComponent> = {
	description: "A basic date picker with label and placeholder. Click the input field to open the calendar modal for date selection.",
	args: {
		label: "Birth Date",
		placeholder: "Select your birth date"
	}
};

export const WithPrefilledDate: Story<FktDatePickerComponent> = {
	description: "A date picker initialized with today's date, showing how the component displays pre-selected values.",
	args: {
		label: "Event Date",
		placeholder: "Select event date"
	}
};

export const RequiredValidation: Story<FktDatePickerComponent> = {
	description: "A date picker with required field validation. The field shows error state when empty and must be filled for form submission.",
	args: {
		label: "Due Date (Required)",
		placeholder: "Please select a due date"
	}
};

export const DisabledState: Story<FktDatePickerComponent> = {
	description: "A date picker in disabled state. The field shows a date value but cannot be modified by the user.",
	args: {
		label: "Fixed Date",
		placeholder: "This date cannot be changed"
	}
};

export const WithFormatHint: Story<FktDatePickerComponent> = {
	description: "A date picker with a format hint in the placeholder to guide users on the expected date format.",
	args: {
		label: "Start Date",
		placeholder: "DD/MM/YYYY format"
	}
};

export default meta;

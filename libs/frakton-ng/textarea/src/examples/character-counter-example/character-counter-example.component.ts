import { Component, computed, input } from '@angular/core';
import { FktTextareaComponent } from 'frakton-ng/textarea';
import { SignalFormControl, SignalValidators } from 'frakton-ng/forms';

@Component({
	selector: 'textarea-character-counter-example',
	standalone: true,
	imports: [FktTextareaComponent],
	template: `
		<div class="w-full space-y-4">
			<fkt-textarea
				class="w-full"
				autoExpand
				[control]="control"
				[label]="label()"
				[placeholder]="placeholder()"
			/>

			<div class="space-y-2">
				<!-- Character counter -->
				<div class="flex justify-between items-center">
					<span class="text-sm text-gray-600">Character count:</span>
					<span
						class="text-sm font-medium"
						[class.text-gray-700]="characterCount() <= warningThreshold()"
						[class.text-yellow-600]="characterCount() > warningThreshold() && characterCount() <= maxLength()"
						[class.text-red-600]="characterCount() > maxLength()"
					>
						{{ characterCount() }} / {{ maxLength() }}
					</span>
				</div>

				<!-- Progress bar -->
				<div class="w-full bg-gray-200 rounded-full h-2">
					<div
						class="h-2 rounded-full transition-all duration-300"
						[class.bg-green-500]="characterCount() <= warningThreshold()"
						[class.bg-yellow-500]="characterCount() > warningThreshold() && characterCount() <= maxLength()"
						[class.bg-red-500]="characterCount() > maxLength()"
						[style.width.%]="progressPercentage()"
					></div>
				</div>

				<!-- Stats -->
				<div class="grid grid-cols-3 gap-2 text-xs text-gray-600">
					<div>
						<span class="font-medium">Words:</span> {{ wordCount() }}
					</div>
					<div>
						<span class="font-medium">Lines:</span> {{ lineCount() }}
					</div>
					<div>
						<span class="font-medium">Remaining:</span> {{ remainingCharacters() }}
					</div>
				</div>

				<!-- Warning messages -->
				@if (characterCount() > warningThreshold()) {
					<div class="text-sm">
						@if (characterCount() <= maxLength()) {
							<p class="text-yellow-600">⚠️ You're approaching the character limit</p>
						}
						@if (characterCount() > maxLength()) {
							<p class="text-red-600">❌ Character limit exceeded by {{ characterCount() - maxLength() }} characters</p>
						}
					</div>
				}
			</div>
		</div>
	`,
	styleUrl: './character-counter-example.component.scss'
})
export class CharacterCounterExampleComponent {
	maxLength = input(280); // Twitter-like limit
	warningThreshold = computed(() => Math.floor(this.maxLength() * 0.8));
	label = input('Tweet');
	placeholder = input("What's happening?");

	protected control = new SignalFormControl<string>('', {
		validators: [
			SignalValidators.maxLength(this.maxLength())
		]
	});

	protected characterCount = computed(() => {
		const value = this.control.value();
		return value?.length || 0;
	});

	protected wordCount = computed(() => {
		const value = this.control.value();
		if (!value) return 0;
		const text = value.trim();
		return text ? text.split(/\s+/).length : 0;
	});

	protected lineCount = computed(() => {
		const value = this.control.value();
		if (!value) return 1;
		return value.split('\n').length;
	});

	protected remainingCharacters = computed(() => {
		const remaining = this.maxLength() - this.characterCount();
		return remaining >= 0 ? remaining : 0;
	});

	protected progressPercentage = computed(() => {
		const percentage = (this.characterCount() / this.maxLength()) * 100;
		return Math.min(percentage, 100);
	});
}

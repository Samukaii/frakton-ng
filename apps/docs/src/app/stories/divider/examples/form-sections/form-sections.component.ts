import { Component, signal } from '@angular/core';
import { FktDividerComponent } from 'frakton-ng/divider';

@Component({
    selector: 'form-sections',
    imports: [FktDividerComponent],
    template: `
        <div class="example-container">
            <h3>Form Sections with Dividers</h3>
            
            <form class="demo-form">
                <fieldset class="form-section">
                    <legend>Personal Information</legend>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="firstName">First Name</label>
                            <input type="text" id="firstName" placeholder="Enter first name" />
                        </div>
                        
                        <div class="form-group">
                            <label for="lastName">Last Name</label>
                            <input type="text" id="lastName" placeholder="Enter last name" />
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" placeholder="Enter email address" />
                    </div>
                    
                    <div class="form-group">
                        <label for="birthDate">Date of Birth</label>
                        <input type="date" id="birthDate" />
                    </div>
                </fieldset>

                <fkt-divider 
                    label="Contact Information" 
                    spacing="lg" 
                    color="primary"
                    variant="solid"
                />

                <fieldset class="form-section">
                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="tel" id="phone" placeholder="Enter phone number" />
                    </div>
                    
                    <div class="form-group">
                        <label for="address">Street Address</label>
                        <input type="text" id="address" placeholder="Enter street address" />
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="city">City</label>
                            <input type="text" id="city" placeholder="Enter city" />
                        </div>
                        
                        <div class="form-group">
                            <label for="state">State</label>
                            <select id="state">
                                <option value="">Select state</option>
                                <option value="ca">California</option>
                                <option value="ny">New York</option>
                                <option value="tx">Texas</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="zip">ZIP Code</label>
                            <input type="text" id="zip" placeholder="12345" />
                        </div>
                    </div>
                </fieldset>

                <fkt-divider 
                    label="Preferences" 
                    spacing="lg" 
                    color="secondary"
                    variant="dashed"
                />

                <fieldset class="form-section">
                    <div class="form-group">
                        <label class="checkbox-label">
                            <input type="checkbox" [checked]="preferences().newsletter" />
                            <span class="checkmark"></span>
                            Subscribe to newsletter
                        </label>
                    </div>
                    
                    <div class="form-group">
                        <label class="checkbox-label">
                            <input type="checkbox" [checked]="preferences().notifications" />
                            <span class="checkmark"></span>
                            Receive email notifications
                        </label>
                    </div>
                    
                    <div class="form-group">
                        <label class="checkbox-label">
                            <input type="checkbox" [checked]="preferences().marketing" />
                            <span class="checkmark"></span>
                            Allow marketing communications
                        </label>
                    </div>
                </fieldset>

                <fkt-divider spacing="xl" />

                <div class="form-actions">
                    <button type="button" class="btn-secondary">Cancel</button>
                    <button type="submit" class="btn-primary">Save Profile</button>
                </div>
            </form>
        </div>
    `,
    styleUrl: './form-sections.component.scss'
})
export class FormSectionsComponent {
    preferences = signal({
        newsletter: true,
        notifications: false,
        marketing: false
    });
}
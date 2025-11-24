import { Component } from '@angular/core';
import { FktDividerComponent } from 'frakton-ng/divider';

@Component({
    selector: 'layout-showcase',
    imports: [FktDividerComponent],
    template: `
        <div class="example-container">
            <h3>Layout Showcase with Dividers</h3>
            
            <!-- Dashboard-style layout -->
            <div class="dashboard">
                <div class="metrics-grid">
                    <div class="metric-card">
                        <div class="metric-value">1,234</div>
                        <div class="metric-label">Total Users</div>
                    </div>
                    
                    <fkt-divider orientation="vertical" spacing="none" />
                    
                    <div class="metric-card">
                        <div class="metric-value">567</div>
                        <div class="metric-label">Active Sessions</div>
                    </div>
                    
                    <fkt-divider orientation="vertical" spacing="none" />
                    
                    <div class="metric-card">
                        <div class="metric-value">89%</div>
                        <div class="metric-label">Satisfaction</div>
                    </div>
                </div>

                <fkt-divider 
                    label="Recent Activity" 
                    spacing="xl" 
                    color="primary" 
                    variant="solid"
                />

                <div class="activity-section">
                    <div class="activity-item">
                        <div class="activity-time">2 mins ago</div>
                        <div class="activity-description">New user registration from John Doe</div>
                    </div>
                    
                    <fkt-divider spacing="xs" variant="dotted" />
                    
                    <div class="activity-item">
                        <div class="activity-time">5 mins ago</div>
                        <div class="activity-description">Payment processed for order #12345</div>
                    </div>
                    
                    <fkt-divider spacing="xs" variant="dotted" />
                    
                    <div class="activity-item">
                        <div class="activity-time">10 mins ago</div>
                        <div class="activity-description">System backup completed successfully</div>
                    </div>
                </div>
            </div>

            <!-- Card layout -->
            <div class="card-showcase">
                <h4>Card with Dividers</h4>
                
                <div class="showcase-card">
                    <div class="card-header">
                        <h5>Project Alpha</h5>
                        <span class="status-badge">In Progress</span>
                    </div>
                    
                    <fkt-divider spacing="sm" />
                    
                    <div class="card-content">
                        <p>A comprehensive web application for managing team projects and tracking progress across multiple departments.</p>
                        
                        <div class="project-stats">
                            <div class="stat">
                                <span class="stat-number">75%</span>
                                <span class="stat-text">Complete</span>
                            </div>
                            <div class="stat">
                                <span class="stat-number">12</span>
                                <span class="stat-text">Team Members</span>
                            </div>
                            <div class="stat">
                                <span class="stat-number">3</span>
                                <span class="stat-text">Days Left</span>
                            </div>
                        </div>
                    </div>
                    
                    <fkt-divider spacing="sm" />
                    
                    <div class="card-footer">
                        <button class="btn-outline">View Details</button>
                        <button class="btn-primary">Update Status</button>
                    </div>
                </div>
            </div>

            <!-- Navigation layout -->
            <div class="nav-showcase">
                <h4>Navigation with Dividers</h4>
                
                <nav class="demo-nav">
                    <div class="nav-section">
                        <h6>Main</h6>
                        <a href="#" class="nav-item active">Dashboard</a>
                        <a href="#" class="nav-item">Projects</a>
                        <a href="#" class="nav-item">Team</a>
                    </div>
                    
                    <fkt-divider spacing="md" />
                    
                    <div class="nav-section">
                        <h6>Analytics</h6>
                        <a href="#" class="nav-item">Reports</a>
                        <a href="#" class="nav-item">Insights</a>
                        <a href="#" class="nav-item">Exports</a>
                    </div>
                    
                    <fkt-divider spacing="md" />
                    
                    <div class="nav-section">
                        <h6>Account</h6>
                        <a href="#" class="nav-item">Settings</a>
                        <a href="#" class="nav-item">Profile</a>
                        <a href="#" class="nav-item">Logout</a>
                    </div>
                </nav>
            </div>
        </div>
    `,
    styleUrl: './layout-showcase.component.scss'
})
export class LayoutShowcaseComponent {}
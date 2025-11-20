# Skeleton

The `FktSkeleton` component provides loading placeholders that mimic the structure of content while it loads. It supports multiple types, animations, and is fully customizable via design tokens.

## Features

- 🎨 **Multiple types** - Text, circle, rectangle, button, and image placeholders
- ✨ **Rich animations** - Shimmer, pulse, wave effects or no animation
- 🎯 **Smart defaults** - Auto-sizing based on type with override options
- 📱 **Responsive** - Works with CSS container queries and responsive designs
- ♿ **Accessible** - Proper ARIA labels for screen readers
- 🎨 **Themeable** - Customizable via design tokens

## Basic Usage

```typescript
import { FktSkeletonComponent } from 'frakton-ng/skeleton';

@Component({
  imports: [FktSkeletonComponent],
  template: `
    <!-- Basic rectangle -->
    <fkt-skeleton />
    
    <!-- Text placeholder -->
    <fkt-skeleton type="text" lines="3" />
    
    <!-- Circle avatar -->
    <fkt-skeleton type="circle" />
    
    <!-- Button placeholder -->
    <fkt-skeleton type="button" />
  `
})
export class MyComponent {}
```

## Types

### Text Skeleton
Perfect for text content placeholders:

```typescript
<fkt-skeleton type="text" />                    <!-- Single line -->
<fkt-skeleton type="text" lines="3" />          <!-- Multiple lines -->
<fkt-skeleton type="text" width="60%" />        <!-- Custom width -->
```

### Circle Skeleton  
Ideal for avatars and profile images:

```typescript
<fkt-skeleton type="circle" />                  <!-- Default 40px -->
<fkt-skeleton type="circle" height="80px" />    <!-- Large avatar -->
```

### Rectangle Skeleton
General purpose placeholder:

```typescript
<fkt-skeleton type="rect" />                    <!-- Default rectangle -->
<fkt-skeleton type="rect" height="200px" />     <!-- Custom height -->
```

### Button Skeleton
Button-shaped placeholder:

```typescript
<fkt-skeleton type="button" />                  <!-- Default button -->
<fkt-skeleton type="button" width="120px" />    <!-- Custom width -->
```

### Image Skeleton
For image placeholders with aspect ratios:

```typescript
<fkt-skeleton type="image" />                           <!-- Default image -->
<fkt-skeleton type="image" aspectRatio="16/9" />        <!-- Widescreen -->
<fkt-skeleton type="image" aspectRatio="1/1" />         <!-- Square -->
```

## Animations

Control the loading animation effect:

```typescript
<fkt-skeleton animation="shimmer" />    <!-- Default shimmer effect -->
<fkt-skeleton animation="pulse" />      <!-- Pulsing opacity -->  
<fkt-skeleton animation="wave" />       <!-- Wave sweep -->
<fkt-skeleton animation="none" />       <!-- No animation -->
```

## Layout with Container

Use `FktSkeletonContainer` for structured layouts:

```typescript
import { FktSkeletonContainerComponent } from 'frakton-ng/skeleton';

<!-- User card layout -->
<fkt-skeleton-container direction="row" gap="md" align="start">
  <fkt-skeleton type="circle" />
  <fkt-skeleton-container direction="column" gap="sm">
    <fkt-skeleton type="text" />
    <fkt-skeleton type="text" width="70%" />
  </fkt-skeleton-container>
</fkt-skeleton-container>

<!-- Vertical list -->
<fkt-skeleton-container direction="column" gap="lg">
  <fkt-skeleton type="rect" height="100px" />
  <fkt-skeleton type="rect" height="100px" />
  <fkt-skeleton type="rect" height="100px" />
</fkt-skeleton-container>
```

## Common Patterns

### User Profile Card
```typescript
<fkt-skeleton-container direction="row" gap="md">
  <fkt-skeleton type="circle" height="60px" />
  <fkt-skeleton-container direction="column" gap="sm">
    <fkt-skeleton type="text" width="150px" />
    <fkt-skeleton type="text" lines="2" />
    <fkt-skeleton type="button" width="100px" />
  </fkt-skeleton-container>
</fkt-skeleton-container>
```

### Article Preview
```typescript
<fkt-skeleton-container direction="column" gap="md">
  <fkt-skeleton type="image" aspectRatio="16/9" />
  <fkt-skeleton type="text" width="80%" />
  <fkt-skeleton type="text" lines="3" />
  <fkt-skeleton-container direction="row" gap="sm">
    <fkt-skeleton type="circle" height="24px" />
    <fkt-skeleton type="text" width="120px" />
  </fkt-skeleton-container>
</fkt-skeleton-container>
```

### Data Table Row
```typescript
<fkt-skeleton-container direction="row" gap="lg" align="center">
  <fkt-skeleton type="circle" height="32px" />
  <fkt-skeleton type="text" width="150px" />
  <fkt-skeleton type="text" width="100px" />
  <fkt-skeleton type="button" width="80px" />
</fkt-skeleton-container>
```

## Design Tokens

Customize appearance using design tokens:

```css
:root {
  --fkt-skeleton-color: #e5e7eb;
  --fkt-skeleton-highlight-color: #f3f4f6;
  --fkt-skeleton-animation-duration: 1.5s;
  --fkt-skeleton-border-radius-sm: 4px;
  --fkt-skeleton-border-radius-md: 8px;
  --fkt-skeleton-line-gap: 8px;
}
```

## API Reference

### FktSkeletonComponent

```typescript
interface FktSkeletonComponent {
  width: string;                    // Width of skeleton (default: '100%')
  height?: string;                  // Height (auto-calculated if not provided)
  type: FktSkeletonType;           // Type of skeleton (default: 'rect')
  animation: FktSkeletonAnimation; // Animation effect (default: 'shimmer')
  lines: number;                   // Number of lines for text type (default: 1)
  aspectRatio?: string;            // Aspect ratio for images (e.g., '16/9')
  borderRadius?: string;           // Custom border radius
  ariaLabel: string;               // Accessibility label (default: 'Loading content')
}
```

### FktSkeletonContainerComponent

```typescript
interface FktSkeletonContainerComponent {
  direction: 'row' | 'column';           // Flex direction (default: 'column')
  justify: FktSkeletonAlignment;         // Justify content (default: 'start')
  align: FktSkeletonAlignment;           // Align items (default: 'stretch')
  gap: FktSkeletonGap;                   // Gap between items (default: 'sm')
  width: string;                         // Container width (default: '100%')
  height: string;                        // Container height (default: 'auto')
}
```

### Types

```typescript
type FktSkeletonType = 'text' | 'circle' | 'rect' | 'button' | 'image';
type FktSkeletonAnimation = 'shimmer' | 'pulse' | 'wave' | 'none';
type FktSkeletonAlignment = 'start' | 'center' | 'end' | 'stretch';
type FktSkeletonGap = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
```
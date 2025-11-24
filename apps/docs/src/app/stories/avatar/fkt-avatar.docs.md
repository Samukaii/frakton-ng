# Avatar

A versatile avatar component that displays user profile pictures, initials, or icons with customizable styling options.

## Key Features

- **Multiple Display Modes**: Image, initials, icon, or placeholder
- **Flexible Sizing**: 5 size variants from extra small to extra large
- **Shape Options**: Circle, rounded corners, or square
- **Color Customization**: Semantic colors and custom hex values
- **Loading States**: Built-in loading spinner
- **Accessibility**: Proper alt text and ARIA support

## Basic Usage

```typescript
import { FktAvatarComponent } from 'frakton-ng/avatar';

@Component({
    imports: [FktAvatarComponent],
    template: `
        <!-- Image avatar -->
        <fkt-avatar
            src="https://example.com/user.jpg"
            alt="John Doe"
            size="md"
        />

        <!-- Initials avatar -->
        <fkt-avatar
            initials="JD"
            backgroundColor="primary"
            size="md"
        />

        <!-- Icon avatar -->
        <fkt-avatar
            icon="person"
            backgroundColor="neutral"
            shape="rounded"
        />
    `
})
export class MyPageComponent {}
```

## API Reference

### Inputs

| Name            | Type                          | Default   | Description                                      |
|-----------------|-------------------------------|-----------|--------------------------------------------------|
| src             | string                        | undefined | URL of the avatar image                          |
| alt             | string                        | 'Avatar'  | Alternative text for the avatar image            |
| initials        | string                        | ''        | Initials to display when no image is provided   |
| icon            | FktIconName                   | 'person'  | Icon to display when no image/initials provided |
| size            | FktAvatarSize                 | 'md'      | Size of the avatar (xs, sm, md, lg, xl)         |
| shape           | FktAvatarShape                | 'circle'  | Shape of the avatar (circle, rounded, square)   |
| backgroundColor | FktColor                      | 'primary' | Background color of the avatar                   |
| textColor       | FktColor \| 'auto'            | 'auto'    | Text color (auto for contrast-based)            |
| loading         | boolean                       | false     | Whether avatar is in loading state              |

### Types

```typescript
import { 
    FktAvatarSize, 
    FktAvatarShape, 
    FktAvatarVariant 
} from 'frakton-ng/avatar';

type FktAvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type FktAvatarShape = 'circle' | 'rounded' | 'square';
type FktAvatarVariant = 'image' | 'initials' | 'icon' | 'placeholder';
```

## Accessibility

- Proper `alt` attribute for images
- Semantic role attributes
- Keyboard navigation support
- High contrast text colors

## Display Modes

The avatar component automatically determines the display mode based on provided inputs:

1. **Image Mode**: When `src` is provided
2. **Initials Mode**: When `initials` is provided (and no src)
3. **Icon Mode**: When `icon` is provided (and no src/initials)
4. **Placeholder Mode**: Default fallback with person icon

## Best Practices

### Do ✅

- Provide meaningful `alt` text for images
- Use appropriate sizes for your UI context
- Choose high contrast color combinations
- Limit initials to 1-2 characters for readability
- Use semantic colors for consistency

### Don't ❌

- Use very long initials (truncated to 2 chars)
- Mix too many different sizes in one interface
- Ignore accessibility requirements
- Use low contrast color combinations
- Forget to handle image loading errors

## Use Cases

- **User Profiles**: Display user profile pictures in headers, cards, or lists
- **Team Members**: Show team member avatars in collaboration interfaces
- **Contact Lists**: Visual identification in contact or user lists
- **Comments/Reviews**: Author avatars in comment threads
- **Navigation**: User identification in navigation bars

## Examples

### User Profile Header
```typescript
<fkt-avatar
    src="user.profileImage"
    alt="{{user.name}}"
    size="xl"
    shape="circle"
/>
```

### Team Member List
```typescript
@for (member of team; track member.id) {
    <fkt-avatar
        [initials]="member.initials"
        backgroundColor="primary"
        size="md"
        shape="rounded"
    />
}
```

### Loading State
```typescript
<fkt-avatar
    [src]="user.avatar"
    [loading]="isLoading"
    size="lg"
/>
```

### Custom Colors
```typescript
<fkt-avatar
    initials="AB"
    backgroundColor="#8B5CF6"
    textColor="#FFFFFF"
    size="md"
/>
```

## Customization

### Custom Colors

You can use custom hex colors for both background and text:

```typescript
<fkt-avatar
    initials="CU"
    backgroundColor="#FF6B6B"
    textColor="#FFFFFF"
/>
```

### Design Tokens

The component uses design tokens for consistent styling. Key tokens include:

- `--fkt-avatar-size-*`: Size variants
- `--fkt-avatar-bg-*`: Background colors
- `--fkt-avatar-text-*`: Text colors
- `--fkt-avatar-border-radius-*`: Shape variants
# AI Automation Studio - Architecture Documentation

## 📁 Project Structure

This project follows a scalable, enterprise-level architecture designed for maintainability and extensibility with **clear separation by device type**.

```
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with providers
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   └── about/
│       └── page.tsx             # About page
├── components/                   # React components
│   ├── index.ts                 # Main component exports
│   ├── DeviceLayout.tsx         # Device-aware wrapper
│   ├── shared/                  # Device-agnostic components
│   │   ├── index.ts
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   └── ...
│   ├── desktop/                 # Desktop-specific components
│   │   ├── index.ts
│   │   ├── DesktopHeader.tsx
│   │   ├── DesktopLayout.tsx
│   │   ├── DesktopFooter.tsx
│   │   └── ...
│   ├── tablet/                  # Tablet-specific components
│   │   ├── index.ts
│   │   ├── TabletHeader.tsx
│   │   ├── TabletLayout.tsx
│   │   ├── TabletFooter.tsx
│   │   └── ...
│   └── mobile/                  # Mobile-specific components
│       ├── index.ts
│       ├── MobileHeader.tsx
│       ├── MobileLayout.tsx
│       ├── MobileFooter.tsx
│       └── ...
├── contexts/                    # React contexts
│   ├── index.ts
│   ├── AuthContext.tsx
│   ├── ThemeContext.tsx
│   └── DeviceContext.tsx
├── hooks/                       # Custom React hooks
│   ├── index.ts
│   ├── useDevice.ts
│   ├── useAuth.ts
│   ├── useApi.ts
│   └── ...
├── types/                       # TypeScript type definitions
│   ├── index.ts
│   ├── api.ts
│   ├── components.ts
│   └── layout.ts
├── utils/                       # Utility functions
│   ├── index.ts
│   ├── format.ts
│   ├── validation.ts
│   └── ...
├── constants/                   # Application constants
│   └── index.ts
└── public/                      # Static assets
```

## 🎯 Key Principles

### 1. **Device-Based Separation**
- **`/components/shared/`**: Components that work identically across all devices
- **`/components/desktop/`**: Components optimized specifically for desktop (≥1024px)
- **`/components/tablet/`**: Components optimized specifically for tablet (768px-1023px)
- **`/components/mobile/`**: Components optimized specifically for mobile (<768px)

### 2. **Logical Grouping**
- Each device type has its own dedicated folder
- Related functionality is grouped together
- No mixing of different device logic in the same folder
- Clear separation of concerns

### 3. **Smart Component Selection**
- `DeviceLayout` automatically selects appropriate layout based on device
- Server-side rendering with graceful fallbacks
- Client-side device detection for optimal UX

### 4. **Type Safety**
- All components have proper TypeScript interfaces
- Centralized type definitions in `/types`
- Strict TypeScript configuration

## 🔄 Data Flow

```
User Interaction → Component → DeviceContext → DeviceLayout → Device-Specific Component
```

## 📱 Device Strategy

### Shared Components (`/components/shared/`)
These components work identically across all devices:
- `Button` - Universal button with variants
- `Input` - Form input with validation
- `Card` - Content container with header/body/footer
- `Modal` - Overlay dialogs
- `Loading` - Loading states

### Device-Specific Components

#### Desktop (`/components/desktop/`)
- **DesktopHeader**: Full navigation with user menu
- **DesktopLayout**: Wide layout with max-w-7xl
- **DesktopFooter**: Multi-column footer with full links

#### Tablet (`/components/tablet/`)
- **TabletHeader**: Compact navigation with hamburger menu
- **TabletLayout**: Medium layout with max-w-5xl
- **TabletFooter**: Simplified footer with essential links

#### Mobile (`/components/mobile/`)
- **MobileHeader**: Minimal header with slide-out menu
- **MobileLayout**: Full-width layout optimized for touch
- **MobileFooter**: Compact footer with essential info only

### Device Detection
- `DeviceContext` provides device type information
- Breakpoints: Mobile (<768px), Tablet (768-1023px), Desktop (≥1024px)
- Server-side rendering support with fallbacks

## 🎨 Styling Approach

- **Tailwind CSS** for utility-first styling
- **Responsive utilities** for adaptive design
- **Device-specific styling** when needed
- **Consistent design system** across all devices

## 🔧 Development Guidelines

### Adding New Components

#### 1. Determine Component Type
```typescript
// Is it device-agnostic? → /components/shared/
// Is it desktop-specific? → /components/desktop/
// Is it tablet-specific? → /components/tablet/
// Is it mobile-specific? → /components/mobile/
```

#### 2. Create Component File
```typescript
// Example: /components/desktop/DesktopFeature.tsx
import { BaseComponentProps } from '@/types/components'

interface DesktopFeatureProps extends BaseComponentProps {
  // Desktop-specific props
}

export function DesktopFeature({ children, className }: DesktopFeatureProps) {
  return (
    <div className={`desktop-specific-styles ${className}`}>
      {children}
    </div>
  )
}
```

#### 3. Export from Index
```typescript
// /components/desktop/index.ts
export { default as DesktopFeature } from './DesktopFeature'
```

#### 4. Use in DeviceLayout
```typescript
// DeviceLayout automatically selects the right component
import { DeviceLayout } from '@/components'

export default function Page() {
  return <DeviceLayout>Content</DeviceLayout>
}
```

### Device-Specific Logic

#### When to Use Device-Specific Components:
- **Layout differences**: Desktop sidebar vs mobile hamburger menu
- **Interaction patterns**: Hover vs touch
- **Content density**: More info on desktop, simplified on mobile
- **Performance**: Heavy features only on capable devices

#### When to Use Shared Components:
- **Form elements**: Buttons, inputs, selects
- **Data display**: Cards, tables, lists
- **Utility components**: Modals, tooltips, loading states

## 🚀 Best Practices

1. **Always consider device context** when creating components
2. **Test on all device types** during development
3. **Use shared components** whenever possible
4. **Keep device-specific logic** in device folders
5. **Maintain consistent interfaces** across device variants
6. **Use semantic HTML** for accessibility
7. **Optimize for touch** on mobile devices
8. **Leverage hover states** on desktop

## 📋 File Organization Rules

### ✅ Good Practices
- One logical concern per folder
- Device-specific components in device folders
- Shared components in shared folder
- Clear, descriptive file names
- Consistent export patterns

### ❌ Avoid
- Mixing device types in same folder
- Generic component names like "Header.tsx" in root
- Scattering related files across different folders
- Deep nesting without clear purpose

## 🔄 Migration Strategy

### From Mixed Structure to Device-Based:
1. **Identify device-specific logic** in existing components
2. **Create device folders** if they don't exist
3. **Move components** to appropriate device folders
4. **Extract shared logic** to shared components
5. **Update imports** throughout the application
6. **Test thoroughly** on all device types

This architecture ensures:
- **Clear separation** of concerns by device type
- **Easy maintenance** and feature addition
- **Optimal user experience** for each device
- **Scalable codebase** that grows with your needs

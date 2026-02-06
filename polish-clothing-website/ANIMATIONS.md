# Website Animations Documentation

This document provides a comprehensive list of all animations used in the Polish Clothing Website.

## Table of Contents
1. [AnimatedElement Component Animations](#animatedelement-component-animations)
2. [CSS Keyframe Animations](#css-keyframe-animations)
3. [Tailwind Configuration Animations](#tailwind-configuration-animations)
4. [CSS Utility Classes & Transitions](#css-utility-classes--transitions)
5. [Component-Specific Animations](#component-specific-animations)
6. [Custom Easing Functions](#custom-easing-functions)
7. [UI Library Animations](#ui-library-animations-shadcnui-with-radix)
8. [Accessibility Considerations](#accessibility-considerations)

---

## AnimatedElement Component Animations

The `AnimatedElement` component (`src/components/AnimatedElement.tsx`) provides 7 animation types that can be used throughout the site:

### Animation Types

| Animation Type | Description | Initial State | Used In |
|---------------|-------------|---------------|---------|
| `fade-up` | Element fades in while moving up | `translateY(8px) opacity-0` | Brand Story, Featured Products, Services, Footer, New Arrivals, Collection Showcase |
| `fade-down` | Element fades in while moving down | `translateY(-8px) opacity-0` | - |
| `fade-left` | Element fades in while moving left | `translateX(8px) opacity-0` | - |
| `fade-right` | Element fades in while moving right | `translateX(-8px) opacity-0` | New Arrivals, Collection Showcase |
| `fade-in` | Element simply fades in | `opacity-0` | Services, Footer, Newsletter |
| `scale-in` | Element scales up while fading in | `scale-95 opacity-0` | Newsletter |
| `slide-up` | Element slides up from below | `translateY(12px) opacity-0` | - |

### Properties
- **Default Duration**: 700ms
- **Default Delay**: 0ms
- **Timing Function**: `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out)
- **Properties**: All properties can be customized via props

### Usage Example
```tsx
<AnimatedElement
  animation="fade-up"
  isVisible={true}
  delay={200}
  duration={700}
>
  Content here
</AnimatedElement>
```

---

## CSS Keyframe Animations

Defined in `src/index.css`:

### 1. fadeIn
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```
- **Purpose**: Simple fade-in effect
- **Duration**: 0.3s (via `.animate-in`)
- **Usage**: `.fade-in` class

### 2. slideInFromTop2
```css
@keyframes slideInFromTop2 {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}
```
- **Purpose**: Slide in from top with fade
- **Duration**: 0.3s (via `.animate-in`)
- **Usage**: `.slide-in-from-top-2` class

### 3. scroll-indicator
```css
@keyframes scroll-indicator {
  0% { transform: translateY(-100%); }
  50% { transform: translateY(0); }
  100% { transform: translateY(100%); }
}
```
- **Purpose**: Continuous scroll indicator animation
- **Duration**: 2s
- **Timing**: ease-in-out
- **Loop**: infinite
- **Usage**: `.animate-scroll-indicator` class

### 4. float
```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}
```
- **Purpose**: Gentle floating animation
- **Duration**: 5s
- **Timing**: ease-in-out
- **Loop**: infinite
- **Usage**: `.animate-float` class

### 5. pulse-subtle
```css
@keyframes pulse-subtle {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}
```
- **Purpose**: Subtle pulsing effect
- **Duration**: 3s
- **Timing**: ease-in-out
- **Loop**: infinite
- **Usage**: `.animate-pulse-subtle` class

### 6. shimmer
```css
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```
- **Purpose**: Loading shimmer effect
- **Duration**: 1.5s
- **Timing**: linear
- **Loop**: infinite
- **Background**: Linear gradient with transparency
- **Usage**: `.animate-shimmer` class

---

## Tailwind Configuration Animations

Defined in `tailwind.config.js`:

### 1. accordion-down
```javascript
"accordion-down": {
  from: { height: "0" },
  to: { height: "var(--radix-accordion-content-height)" },
}
```
- **Duration**: 0.2s
- **Timing**: ease-out
- **Usage**: `animate-accordion-down`
- **Purpose**: Expand accordion content

### 2. accordion-up
```javascript
"accordion-up": {
  from: { height: "var(--radix-accordion-content-height)" },
  to: { height: "0" },
}
```
- **Duration**: 0.2s
- **Timing**: ease-out
- **Usage**: `animate-accordion-up`
- **Purpose**: Collapse accordion content

### 3. caret-blink
```javascript
"caret-blink": {
  "0%,70%,100%": { opacity: "1" },
  "20%,50%": { opacity: "0" },
}
```
- **Duration**: 1.25s
- **Timing**: ease-out
- **Loop**: infinite
- **Usage**: `animate-caret-blink`
- **Purpose**: Blinking cursor effect for input fields

---

## CSS Utility Classes & Transitions

Defined in `src/index.css`:

### Transition Classes

#### 1. Button/Link Base Transitions
```css
button, a {
  transition: all 0.3s ease;
}
```
- **Duration**: 300ms
- **Properties**: all
- **Timing**: ease

#### 2. .card-hover
- **Duration**: 500ms
- **Effect**: Translates Y by -8px and adds shadow on hover
- **Properties**: all
- **Purpose**: Product card hover effect

#### 3. .img-container img
- **Duration**: 700ms
- **Effect**: Scales image to 1.05 on hover
- **Properties**: transform
- **Purpose**: Image zoom on hover

#### 4. .link-underline::after
- **Duration**: 300ms
- **Effect**: Width expands from 0 to 100% on hover
- **Properties**: all
- **Purpose**: Animated underline for links

#### 5. .transition-smooth
- **Timing**: `var(--ease-smooth)` = `cubic-bezier(0.4, 0, 0.2, 1)`

#### 6. .transition-expo
- **Timing**: `var(--ease-expo-out)` = `cubic-bezier(0.16, 1, 0.3, 1)`

### Component-Level Transitions

#### Button Styles
- `.btn-primary`: hover scale (1.05) + shadow + background color change
- `.btn-secondary`: hover background/text/border color changes
- **Duration**: 300ms (inherited)

---

## Component-Specific Animations

### App.css Animations
```css
button, a {
  transition: all 0.3s ease;
}
```
- **Global button/link transitions**
- **Duration**: 300ms
- **Properties**: all

### Smooth Scrolling
```css
html {
  scroll-behavior: smooth;
}
```
- **Applied**: Site-wide
- **Purpose**: Smooth scroll navigation

---

## Custom Easing Functions

Defined in `src/index.css` as CSS variables:

| Variable Name | Value | Description |
|--------------|-------|-------------|
| `--ease-expo-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Exponential ease-out (primary) |
| `--ease-expo-in` | `cubic-bezier(0.7, 0, 0.84, 0)` | Exponential ease-in |
| `--ease-elastic` | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` | Elastic/bouncy effect |
| `--ease-smooth` | `cubic-bezier(0.4, 0, 0.2, 1)` | Smooth standard easing |
| `--ease-dramatic` | `cubic-bezier(0.87, 0, 0.13, 1)` | Dramatic motion |
| `--ease-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Bounce effect |
| `--ease-liquid` | `cubic-bezier(0.23, 1, 0.32, 1)` | Liquid/fluid motion |
| `--ease-spring` | `cubic-bezier(0.175, 0.885, 0.32, 1.275)` | Spring effect |

---

## Accessibility Considerations

### Reduced Motion Support

The website respects user motion preferences via `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  
  .animate-scroll-indicator,
  .animate-float,
  .animate-pulse-subtle {
    animation: none !important;
  }
}
```

**Impact**: 
- All animations are essentially disabled for users who prefer reduced motion
- Scroll behavior becomes instant
- Infinite animations are completely removed
- Ensures accessibility compliance

---

## Animation Usage by Section

### Hero Section
- Carousel slide transitions (custom implementation)
- Button hover animations

### Brand Story Section
- `fade-up` animations for text content
- Staggered delays for sequential reveals

### Featured Products Section
- `fade-up` animations for section headers and product grids
- Card hover effects (`.card-hover`)
- Image zoom effects (`.img-container`)

### Services Section
- `fade-up` animations for service cards
- `fade-in` animation for CTA section

### Collection Showcase Section
- `fade-right` animation for main heading
- `fade-up` animations for collection items

### New Arrivals Section
- `fade-up` animations for headers and tabs
- `fade-right` animation for view all link
- Product card animations

### Newsletter Section
- `scale-in` animation for heading
- `fade-up` animations for form elements
- `fade-in` animation for trust indicators

### Footer Section
- `fade-up` animations for brand section and footer columns
- `fade-in` animation for bottom bar

### Navbar
- Transitions on navigation items
- Glass morphism effects with backdrop blur

---

## Performance Optimizations

### GPU Acceleration
```css
.gpu-accelerate {
  transform: translateZ(0);
  will-change: transform;
}
```

### Will-change Property
The `AnimatedElement` component uses:
```css
.will-change-transform
```

This hints to the browser which properties will animate, improving performance.

---

## UI Library Animations (shadcn/ui with Radix)

The website uses shadcn/ui components built on Radix UI primitives. These components include built-in animations using Tailwind's `tailwindcss-animate` plugin:

### Data-State Animations

Many UI components use data-state attributes for animations:

#### Common Animation Patterns

**1. Fade In/Out Animations**
```
data-[state=open]:fade-in-0
data-[state=closed]:fade-out-0
```
- Used in: Sheet, Alert Dialog, Popover, Select, Dropdown Menu, etc.

**2. Zoom In/Out Animations**
```
data-[state=open]:zoom-in-95
data-[state=closed]:zoom-out-95
```
- Scales from/to 95% on open/close
- Used in: Alert Dialog, Popover, Select, Dropdown Menu, etc.

**3. Slide In Animations**
```
data-[side=bottom]:slide-in-from-top-2
data-[side=left]:slide-in-from-right-2
data-[side=right]:slide-in-from-left-2
data-[side=top]:slide-in-from-bottom-2
```
- Directional slide based on positioning
- Used in: Popover, Select, Dropdown Menu, Tooltip, etc.

**4. Navigation Menu Animations**
```
data-[motion=from-end]:slide-in-from-right-52
data-[motion=from-start]:slide-in-from-left-52
data-[motion=to-end]:slide-out-to-right-52
data-[motion=to-start]:slide-out-to-left-52
```
- Larger slide distances for navigation
- Smooth motion between menu items

### Component-Specific Animations

| Component | Animation Type | Duration | Description |
|-----------|---------------|----------|-------------|
| **Sheet** | fade-in/out | 300ms (closed), 500ms (open) | Overlay and content slides in |
| **Alert Dialog** | fade-in/out + zoom | 200ms | Modal appears with fade and scale |
| **Popover** | fade-in/out + zoom + slide | Default | Positioned popover with multi-effect |
| **Dropdown Menu** | fade-in/out + zoom + slide | Default | Menu items with smooth reveal |
| **Tooltip** | fade-in/out + zoom + slide | Default | Quick tooltip appearance |
| **Select** | fade-in/out + zoom + slide | Default | Dropdown options animation |
| **Hover Card** | fade-in/out + zoom + slide | Default | Card appears on hover |
| **Context Menu** | fade-in/out + zoom + slide | Default | Right-click menu animation |
| **Navigation Menu** | fade-in/out + zoom + slide | Default | Complex navigation with viewport |
| **Drawer** | fade-in/out | Default | Side panel animation |

### Product Card Specific Animations

In `ProductCard.tsx`:

1. **Image Hover Effect**
   - Scale: 1.05
   - Duration: 500ms
   - Trigger: Mouse hover

2. **Quick Actions Overlay**
   - Opacity: 0 → 1
   - Duration: 300ms
   - Buttons translate Y from 16px to 0
   - Staggered delays: 0ms, 50ms

3. **Like Button Animation**
   - Heart icon scales to 1.1 when liked
   - Fill color changes with transition
   - Duration: 300ms

4. **Loading Skeleton**
   - Uses `animate-pulse` (Tailwind default)
   - Continuous pulse until image loads

5. **Quick Add Button (Compact variant)**
   - Background/text color transition
   - Duration: 300ms

---

## Summary Statistics

- **Total AnimatedElement Types**: 7
- **Total CSS Keyframe Animations**: 6
- **Total Tailwind Animations**: 3
- **Custom Easing Functions**: 8
- **Transition-based Effects**: 5+
- **UI Library Animations**: 15+ components with data-state animations
- **Product Card Animations**: 5 distinct animations
- **Accessibility Features**: Reduced motion support

---

## Notes for Developers

1. **Prefer AnimatedElement**: Use the `AnimatedElement` component for scroll-triggered animations
2. **Consistent Timing**: Default animation duration is 700ms across the site
3. **Stagger Delays**: Use delay prop for sequential animations (typically 100-200ms increments)
4. **Performance**: All animations use `transform` and `opacity` for best performance
5. **Accessibility**: All animations respect `prefers-reduced-motion`
6. **Browser Support**: Modern browsers (uses CSS custom properties and modern easing functions)

---

Last Updated: 2026-02-06

# THE SCRIBOR — Style Guide

## 🎨 Color Palette

### Primary Colors

```css
Primary Teal:    #00B4D8
Primary Sky:     #6DD3FF
```

**Usage**: Primary CTAs, links, brand elements, gradients

**Gradient**:
```css
background: linear-gradient(135deg, #00B4D8 0%, #6DD3FF 100%);
```

### Accent Colors

```css
Accent Coral:    #FF758C
Accent Peach:    #FFB199
```

**Usage**: Secondary CTAs, highlights, promotional badges

**Gradient**:
```css
background: linear-gradient(135deg, #FF758C 0%, #FFB199 100%);
```

### Neutral Colors

```css
Background:      #F7FAFC
Text:            #0F172A
White:           #FFFFFF
```

### Dark Mode Colors

```css
Dark Background: #0F172A
Dark Surface:    #1e293b (slate-800)
Dark Text:       #F7FAFC
```

## 📝 Typography

### Font Families

**Headings**: Poppins
```css
font-family: 'Poppins', sans-serif;
```

**Body Text**: Inter
```css
font-family: 'Inter', sans-serif;
```

### Font Weights

- Light: 300
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

### Type Scale

```css
/* Headings */
h1: 3.5rem (56px) - font-bold
h2: 2.25rem (36px) - font-bold
h3: 1.875rem (30px) - font-semibold
h4: 1.5rem (24px) - font-semibold
h5: 1.25rem (20px) - font-semibold
h6: 1rem (16px) - font-semibold

/* Body */
Large: 1.125rem (18px)
Base: 1rem (16px)
Small: 0.875rem (14px)
XSmall: 0.75rem (12px)
```

### Line Heights

- Tight: 1.25
- Normal: 1.5
- Relaxed: 1.75

## 🎯 Spacing

### Padding/Margin Scale

```
0: 0px
1: 0.25rem (4px)
2: 0.5rem (8px)
3: 0.75rem (12px)
4: 1rem (16px)
5: 1.25rem (20px)
6: 1.5rem (24px)
8: 2rem (32px)
10: 2.5rem (40px)
12: 3rem (48px)
16: 4rem (64px)
20: 5rem (80px)
24: 6rem (96px)
```

### Section Padding

```css
.section-padding {
  padding-top: 4rem;    /* 64px */
  padding-bottom: 4rem;
  padding-left: 1rem;   /* 16px */
  padding-right: 1rem;
}

@media (min-width: 768px) {
  .section-padding {
    padding-top: 6rem;    /* 96px */
    padding-bottom: 6rem;
    padding-left: 2rem;   /* 32px */
    padding-right: 2rem;
  }
}
```

## 🔘 Buttons

### Primary Button

```css
.btn-primary {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #00B4D8 0%, #6DD3FF 100%);
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 180, 216, 0.3);
}
```

### Secondary Button

```css
.btn-secondary {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  color: #00B4D8;
  border: 2px solid #00B4D8;
  background: transparent;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: #00B4D8;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 180, 216, 0.3);
}
```

## 📦 Cards

```css
.card {
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.card:hover {
  transform: scale(1.03);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}
```

## 🎭 Animations

### Fade Up

```css
@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-up {
  animation: fadeUp 0.6s ease-out;
}
```

### Scale In

```css
@keyframes scaleIn {
  0% {
    opacity: 0;
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-scale-in {
  animation: scaleIn 0.3s ease-out;
}
```

### Gradient Animation

```css
@keyframes gradient {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}
```

## 📱 Breakpoints

```css
/* Mobile First */
sm:  640px   /* Small devices (landscape phones) */
md:  768px   /* Medium devices (tablets) */
lg:  1024px  /* Large devices (desktops) */
xl:  1280px  /* Extra large devices (large desktops) */
2xl: 1536px  /* 2X large devices */
```

## 🎨 Utility Classes

### Text Gradients

```css
.text-gradient-primary {
  background: linear-gradient(135deg, #00B4D8 0%, #6DD3FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-gradient-accent {
  background: linear-gradient(135deg, #FF758C 0%, #FFB199 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Container

```css
.container-custom {
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
}
```

### Reveal (Scroll Animation)

```css
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}
```

## ♿ Accessibility

### Focus States

```css
*:focus-visible {
  outline: 2px solid #00B4D8;
  outline-offset: 2px;
}
```

### Skip to Content

```css
.skip-to-content {
  position: absolute;
  top: -40px;
  left: 0;
  background: #00B4D8;
  color: white;
  padding: 8px 16px;
  z-index: 100;
}

.skip-to-content:focus {
  top: 0;
}
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 🖼️ Images

### Aspect Ratios

- Product Images: 1:1 (square)
- Category Cards: 3:2
- Hero Images: 16:9
- Team Photos: 1:1 (square)
- Open Graph: 1.91:1 (1200x630)

### Optimization

- Use WebP format when possible
- Provide fallback formats (JPEG/PNG)
- Implement lazy loading
- Use Next.js Image component for automatic optimization

## 📐 Layout

### Grid System

```css
/* 2 columns on mobile, 3 on tablet, 4 on desktop */
.grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

## 🎯 Best Practices

1. **Mobile First**: Always design for mobile first, then enhance for larger screens
2. **Consistent Spacing**: Use the spacing scale consistently throughout
3. **Color Contrast**: Ensure text has sufficient contrast (WCAG AA minimum)
4. **Touch Targets**: Minimum 44x44px for interactive elements
5. **Loading States**: Provide visual feedback for async operations
6. **Error States**: Clear, helpful error messages
7. **Empty States**: Informative messages when content is unavailable

## 🔧 Tailwind CSS Classes Reference

### Common Patterns

```html
<!-- Card -->
<div class="card p-6">...</div>

<!-- Primary Button -->
<button class="btn-primary">Click Me</button>

<!-- Section -->
<section class="section-padding bg-neutral-bg dark:bg-slate-900">
  <div class="container-custom">...</div>
</section>

<!-- Gradient Text -->
<h1 class="text-gradient-primary">Heading</h1>

<!-- Responsive Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  ...
</div>
```

---

**Last Updated**: October 2, 2025

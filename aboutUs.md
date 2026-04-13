# 🧠 Technical Prompt – "About Us" View (LAR)

## Context
There is already an existing landing page implemented for **LAR Materiales de Construcción** with a defined design system (colors, spacing, typography, reusable components).

I need to implement a new page/section: **"About Us"**, reusing as much of the existing architecture as possible. Also add it to the navbar.

---

## 🎯 Objective
Implement a new page that:
- Maintains full visual and structural consistency with the existing landing
- Reuses existing components
- Respects the current design system
- Is fully responsive (mobile-first)
- Does not introduce unnecessary new patterns

---

## ⚙️ Implementation Rules (CRITICAL)

### 1. Reusability
- Use existing components from the landing:
  - `Section`
  - `Container`
  - `Heading`
  - `Text`
  - `Card`
  - `Button`
- Do NOT create new components if an equivalent already exists

---

### 2. Layout
- Follow the same grid system
- Maintain vertical spacing consistency (section paddings)
- Use the same max-width container

---

### 3. Typography
- Use the exact same classes or tokens:
  - H1 / H2 / H3
  - Body text
  - H1's -> Franklin Gothic Heavy
- Preserve visual hierarchy

---

### 4. Colors
Use the existing palette:
- `#f24a49` → primary
- `#000000` → main text
- `#74020c` → accent
- `#f2c979` → neutral/background

---

### 5. Buttons / CTAs
- Reuse the existing `Button` component
- Maintain hover states, radius, and padding
- Primary CTA: WhatsApp contact

---

## 🧱 Page Structure

### 1. Hero Section
- Reuse the same hero pattern as the main landing
- Background image with overlay
- H1 + paragraph + CTA

---

### 2. About Section ("Who We Are")
- Simple text block section
- Layout:
  - Desktop: 2 columns (text + image)
  - Mobile: 1 column

---

### 3. Trajectory / Experience
- Use grid or stacked cards
- Avoid complex timelines if not present in the design system
- Each item: title + short description

---

### 4. Values / Differentiators
- Reuse `Card` component
- Grid layout:
  - Desktop: 4 columns
  - Tablet: 2 columns
  - Mobile: 1 column

---

### 5. Team (Optional)
- Cards with image + name + role
- Maintain consistent styling with existing cards

---

### 6. Final CTA Section
- Reuse existing CTA section
- Do NOT create a new variation
- Button: “Contact via WhatsApp”

---

## 📱 Responsiveness

Ensure:
- Mobile-first approach
- Consistent padding across breakpoints
- Scalable typography
- Flexible grid (no hardcoded widths)

---

## 🚫 Constraints

- Do NOT modify the design system
- Do NOT change global components
- Do NOT break visual consistency

---

## 🧪 Expected Output

1. Clean, modular code
2. Proper reuse of existing components
3. Layout consistent with the landing
4. No unnecessary inline styles
5. Easily scalable structure

---

## 🧱 Page Objective

Create an "About Us" section that:

- Builds trust
- Reinforces the company's history
- Humanizes the brand
- Showcases industry experience
- Strengthens its positioning as a reliable supplier

---

## 💡 Optional Improvements

If possible without breaking consistency:
- Subtle animations
- Lazy loading for images
- Basic SEO improvements (meta tags)

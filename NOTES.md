# Baobab Bites Café Website - Technical Notes

## Project Overview

**Baobab Bites Café** is a static, modern website built for a Gambian café in Jalangbam. The site showcases the café's menu, gallery, services, and provides direct booking via WhatsApp. It's a single-page navigation experience built with HTML5, CSS3, and no JavaScript dependencies (keep it simple!).

---

## 📁 Project Structure

```
Baobab-Bites-Cafe.St/
│
├── index.html              # Home page (main landing)
├── menu.html               # Full menu showcase
├── gallery.html            # Photo gallery
├── contact.html            # Contact & booking info
│
├── style.css               # Master stylesheet with CSS variables
│
├── images/                 # Asset folder (33 images)
│   ├── hero-main.webp
│   ├── menu-banner.jpeg
│   ├── about-us.jpg
│   ├── owner.jpg           # Ismaila Jallow (Founder & Head Chef)
│   ├── chef.jpeg
│   ├── barista.jpeg
│   ├── head-baker.jpeg
│   ├── Dishes/
│   │   ├── chicken-yassa.webp
│   │   ├── benachin.png
│   │   ├── domada-soup.png
│   │   ├── mafe.jpg
│   │   ├── fried-plantain-eggs.png
│   │   ├── grilled-fish-salad.jpg
│   │   └── vegetable-rice.jpg
│   ├── Beverages/
│   │   ├── baobab-latte.webp
│   │   ├── baobab-ginger.webp
│   │   ├── gambian-coffee-touba.jpg
│   │   ├── mango-smoothie.webp
│   │   ├── green-smoothie.webp
│   │   ├── pineapple-juice.jpg
│   │   └── black-coffee.jpg
│   ├── Baked Goods/
│   │   ├── banana-bread.png
│   │   ├── butter-croissant.webp
│   │   ├── cinnamon-roll.webp
│   │   ├── bean-cakes.png
│   │   ├── pepper-cookies.webp
│   │   └── coconut-cake.jpeg
│   └── Ambiance/
│       ├── cafe.jpeg
│       ├── barista.jpeg
│       └── fruit-yogurt-bowl.png
│
├── README.md               # Project documentation
├── NOTES.md                # This file (technical details)
└── fonts/                  # (Referenced, not included)
    ├── bitter.woff2        # Serif font for headings
    └── nunito-sans.woff2   # Sans-serif font for body
```

---

## 🎨 Design System

### Color Palette

The website uses a **warm, earthy color scheme** inspired by Gambian café culture:

| Color Name | Hex Value | Usage | RGB |
|-----------|-----------|-------|-----|
| **Cocoa** | #40291F | Primary dark background, text | 64, 41, 31 |
| **Persimmon** | #D9603F | Primary accent, buttons, badges | 217, 96, 63 |
| **Persimmon Dark** | #BC4A2B | Hover state for buttons | 188, 74, 43 |
| **Persimmon Bright** | #F0855C | Gradient highlights | 240, 133, 92 |
| **Cream** | #FBF3E8 | Light background sections | 251, 243, 232 |
| **Cream Deep** | #F3E6D3 | Medium background | 243, 230, 211 |
| **Taupe** | #7A6653 | Secondary text, muted content | 122, 102, 83 |
| **Ink Deep** | #23120E | Deep text color | 35, 18, 14 |
| **Navy** | #14335A | Accent blue (reserved) | 20, 51, 90 |
| **Navy Light** | #7EA7DF | Light blue accents | 126, 167, 223 |
| **Sky Blue** | #D7E7FF | Very light blue background | 215, 231, 255 |
| **White** | #FFFFFF | Pure white, contrast | 255, 255, 255 |
| **Border** | #E9DAC5 | Subtle dividers | 233, 218, 197 |

**Color Psychology:**
- **Cocoa & Cream**: Warm, inviting café feeling
- **Persimmon**: Energy, warmth, appetite stimulation (food industry standard)
- **Taupe/Navy**: Sophistication, trust

### Typography

#### Font Families

```css
--font-head: 'Bitter', Georgia, 'Times New Roman', serif;
--font-body: 'Nunito Sans', 'Helvetica Neue', Arial, sans-serif;
```

**Bitter (Headings)**
- Serif font with personality
- Used for: h1, h2, h3, h4, buttons
- Weight: 400 (regular), 700 (bold)
- File: `fonts/bitter.woff2`

**Nunito Sans (Body)**
- Modern, clean sans-serif
- Used for: paragraphs, navigation, labels
- Weight: 400 (regular), 700 (bold)
- File: `fonts/nunito-sans.woff2`

#### Font Sizing (Responsive with `clamp()`)

```css
h1: clamp(2.2rem, 5vw, 3.6rem)      /* 35px to 58px */
h2: clamp(1.9rem, 3.6vw, 2.7rem)    /* 30px to 43px */
h3: clamp(1.15rem, 2.5vw, 1.35rem)  /* 18px to 22px */
Body: 1rem (16px)
Line-height: 1.75 (for readability)
```

**Why `clamp()`?** Automatically scales fonts between viewport width changes without media queries. Min-Max responsive design.

---

## 🏗️ HTML Structure & Semantics

### 1. Document Head
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Baobab Bites Café | Gambian Home Cooking in Jalangbam</title>
  <link rel="stylesheet" href="style.css">
</head>
```

**Key Points:**
- `lang="en"`: Accessibility for screen readers
- Viewport meta: Mobile responsiveness (1:1 CSS pixels)
- Title: SEO-friendly with location & keywords

### 2. Navigation Structure

```html
<header class="navbar">
  <div class="container">
    <div class="logo">B Baobab Bites ☕</div>
    <nav>
      <ul>
        <li><a href="index.html" class="active">Home</a></li>
        <li><a href="menu.html">Menu</a></li>
        <li><a href="gallery.html">Gallery</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
      <a href="https://wa.me/2207480021..." class="btn btn-primary">Book a table</a>
    </nav>
    <button class="mobile-menu-btn">☰</button>
  </div>
</header>
```

**Features:**
- Sticky positioning (stays at top while scrolling)
- Active link highlighting with underline animation
- Mobile menu button (appears on small screens)
- WhatsApp integration for direct bookings

### 3. Main Content Sections

#### Hero Section
```html
<section class="hero">
  <div class="container hero-grid">
    <div class="hero-text">
      <!-- Left: Headline, description, CTA buttons -->
    </div>
    <div class="hero-images">
      <!-- Right: Main image + thumbnail gallery -->
    </div>
  </div>
  <div class="ribbon">
    <!-- Scrolling news ticker -->
  </div>
</section>
```

#### About Section
```html
<section class="about">
  <div class="container grid-2">
    <div class="about-img">
      <!-- Image with year badge (2019) -->
    </div>
    <div class="about-text">
      <!-- History, values, founder signature -->
    </div>
  </div>
</section>
```

#### Menu Board Section
```html
<section class="menu-board">
  <div class="board-grid">
    <div class="featured-dish">
      <!-- Today's special highlight -->
    </div>
    <div class="menu-list">
      <!-- Quick links to full menu -->
    </div>
  </div>
</section>
```

#### Services Section
```html
<section class="services">
  <div class="services-grid">
    <!-- 01 Breakfast, 02 Coffee & Juices, 03 Fresh Bakes -->
  </div>
</section>
```

#### Testimonials Section (included in index.html)
- Customer reviews
- Rating system
- Social proof

---

## 🎯 CSS Architecture

### 1. CSS Variables System (Custom Properties)

All theme values are stored in `:root` selector for easy maintenance:

```css
:root {
  --cocoa: #40291F;
  --persimmon: #D9603F;
  --cream: #FBF3E8;
  --font-head: 'Bitter', Georgia, serif;
  --font-body: 'Nunito Sans', sans-serif;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

**Benefits:**
- Change theme by updating one variable
- Consistent spacing, colors, animations
- Easy dark mode implementation (if needed)

### 2. CSS Reset & Base Styles

```css
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

- **Removes default browser margins/padding**
- **box-sizing: border-box**: Padding included in width (predictable layouts)

### 3. Layout Systems

#### Container
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
```
- Centered max-width layout
- 24px horizontal padding on mobile

#### Grid Layouts

```css
.grid-2 { grid-template-columns: 1fr 1fr; gap: 3rem; }
.grid-3 { grid-template-columns: repeat(3, 1fr); gap: 2rem; }
.hero-grid { grid-template-columns: 1fr 1fr; gap: 3rem; }
.board-grid { grid-template-columns: 2fr 1fr; gap: 2rem; }
.services-grid { grid-template-columns: repeat(3, 1fr); gap: 2rem; }
.hero-thumbs { grid-template-columns: 1fr 1fr; gap: 1rem; }
```

**Why CSS Grid?**
- Powerful 2D layouts
- Responsive without media queries (with `auto-fit`, `minmax()`)
- Cleaner code than flexbox for multi-row layouts

### 4. Component Classes

#### Kicker (Small Label)
```css
.kicker {
  display: inline-flex;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--persimmon);
  background: rgba(217, 96, 63, 0.14);
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
}
```
- Used for section labels ("WELCOME TO BAOBAB BITES", "ABOUT US")
- `border-radius: 999px` = perfectly rounded pill shape

#### Button Variations
```css
.btn-primary { /* Main CTA button */
  background: linear-gradient(135deg, var(--persimmon), var(--persimmon-bright));
  color: var(--white);
  box-shadow: 0 18px 30px rgba(217, 96, 63, 0.18);
}

.btn-outline { /* Secondary button */
  border: 2px solid rgba(46, 27, 18, 0.25);
  color: var(--ink-deep);
  background: rgba(255, 255, 255, 0.92);
}

.btn-light { /* For dark backgrounds */
  border: 2px solid rgba(255, 255, 255, 0.7);
  color: var(--white);
  background: transparent;
}
```

### 5. Animations

#### Coffee Bounce (Logo)
```css
@keyframes coffeeBounce {
  0% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0); }
}

.logo { animation: coffeeBounce 2s ease-in-out infinite; }
```
Subtle bounce effect adds personality to the logo.

#### Underline Hover (Navigation)
```css
.navbar nav a::after {
  content: '';
  position: absolute;
  left: 0; bottom: -6px;
  width: 0; height: 3px;
  background: var(--persimmon);
  transition: width 0.3s ease;
}

.navbar nav a:hover::after,
.navbar nav a.active::after {
  width: 100%;
}
```
Smooth underline animation on hover/active state.

#### Fade In Up
```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```
Used for section reveals (could be triggered with Intersection Observer if JavaScript added).

### 6. Responsive Design Approach

#### Mobile-First
CSS starts with mobile defaults, expands upward:
```css
/* Mobile styles by default */
.grid-2 { grid-template-columns: 1fr; }

/* Tablet+ */
@media (min-width: 768px) {
  .grid-2 { grid-template-columns: 1fr 1fr; }
}

/* Desktop+ */
@media (min-width: 1200px) {
  /* More refinements */
}
```

#### Navigation Mobile Menu
```css
.mobile-menu-btn { display: none; }

@media (max-width: 768px) {
  .mobile-menu-btn { display: block; }
  .navbar nav { display: none; } /* Hidden, needs JS to toggle */
}
```

---

## 📄 Page-by-Page Breakdown

### 1. **index.html** (Home Page)

**Sections:**
1. **Header/Navbar** - Sticky navigation, logo animation
2. **Hero** - Full-width intro with headline, CTA buttons, images
3. **Ribbon** - Scrolling news ticker
4. **About** - Cafe history, founder info, value proposition
5. **Menu Board** - Featured dish + quick menu links
6. **Services** - 3-column grid (Breakfast, Coffee, Fresh Bakes)
7. **Testimonials** - Customer reviews (section skeleton present)

**Key Elements:**
- Opens with strong value proposition
- Hero image: `images/hero-main.webp`
- WhatsApp booking integration (2 CTA buttons)
- Founder signature: Ismaila Jallow (Owner & Head Chef)
- Operating hours badge: "7:30am - 8:00pm"

### 2. **menu.html** (Menu Page)

**Sections:**
1. **Hero Menu** - Page header with overlay
2. **Menu Categories** - "Five ways to eat with us"
   - Breakfast (7:30am opening)
   - Lunch specials
   - Coffee & Juices
   - Fresh Bakes
   - Dinner offerings

**Features:**
- Menu banner image
- Pricing in GMD (Gambian Dalasi)
- Allergy/dietary notes
- Links to ordering/booking

**Current Structure:** Categories set up, awaiting menu items

### 3. **gallery.html** (Photo Gallery)

**Purpose:**
- Visual showcase of food, café ambiance, team
- 33 images organized by category

**Image Categories:**
- **Dishes**: Chicken Yassa, Benachin, Domada Soup, Mafe, etc.
- **Beverages**: Baobab Latte, Coffee Touba, Smoothies, Juices
- **Baked Goods**: Bread, Croissants, Cinnamon Rolls, Cookies
- **Ambiance**: Interior, exterior, team members

**Gallery Features:**
- Grid layout (likely 3-4 columns on desktop)
- Responsive image sizing
- Hover effects (zoom, overlay)

### 4. **contact.html** (Contact & Booking)

**Sections:**
- Contact information
- Operating hours
- Location details
- Booking form (or WhatsApp link)
- Phone: +220 748 0021 (WhatsApp)

---

## 🔗 External Integrations

### WhatsApp API Integration

**Purpose:** Direct café booking via WhatsApp

**Implementation:**
```html
<a href="https://wa.me/2207480021?text=Hi%20Baobab%20Bites%2C%20I%20would%20like%20to%20book%20a%20table." 
   target="_blank" rel="noopener" class="btn btn-primary">
  Book a table
</a>
```

**How it works:**
1. Click button → Opens WhatsApp (web or app)
2. Phone: +220 748 0021
3. Pre-filled message: "Hi Baobab Bites, I would like to book a table."
4. Customer can edit/send

**Locations in site:**
- Navbar (top right)
- Hero section (2 buttons)
- Contact page
- Menu page

### Unsplash Images (CDN)

Some placeholder images sourced from Unsplash:
```html
<img src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=300" alt="Food Bowl">
<img src="https://images.unsplash.com/photo-1604908177453-7462950a6a3b?q=80&w=600" alt="Benachin">
```

**Query Parameters:**
- `q=80` - Quality 80%
- `w=300` - Width 300px (responsive, generates optimal size)

**Why Unsplash?**
- Free stock photos
- Optimal CDN delivery
- No attribution required (but appreciated)

---

## 🚀 Performance Optimizations

### 1. Image Format Strategy

**WebP (Modern Browsers)**
- Smaller file size (-25-35% vs JPEG)
- Lossless & lossy options
- Used for: hero images, menu board, etc.

**JPEG/PNG (Fallback)**
- Broader browser support
- Used for secondary images, team photos

**Unsplash CDN Images**
- `q=80` - Balances quality/size
- Width parameters - Serve optimal sizes

### 2. Font Loading Strategy

```css
@font-face {
  font-family: 'Bitter';
  src: url('../fonts/bitter.woff2') format('woff2');
  font-weight: 400 700;
  font-display: swap;  /* Show fallback while loading */
}
```

**`font-display: swap`**
- Shows Georgia/serif fallback immediately
- Swaps to Bitter when loaded
- No invisible text while fonts load

### 3. CSS Efficiency

- **No external frameworks** (Bootstrap, Tailwind) = lighter CSS
- **CSS Grid** over Flexbox = fewer wrapper divs
- **CSS Variables** over repeated color values
- **Minification ready** (format allows easy minification)

### 4. Transitions & Animations

```css
--transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

**Easing Function:** `cubic-bezier(0.4, 0, 0.2, 1)`
- Smooth, professional feel
- Fast start, gradual deceleration
- Same for all transitions (consistency)

---

## 📱 Responsive Breakpoints

Implied breakpoints (for future media queries):

```css
/* Mobile: 0px - 480px (default) */
/* Tablet: 481px - 768px */
/* Desktop: 769px - 1200px */
/* Large Desktop: 1200px+ */
```

**Key Responsive Elements:**
- Navigation: Toggle mobile menu < 768px
- Grid layouts: Switch from 2/3-column to 1-column
- Font sizing: Uses `clamp()` for fluid scaling
- Container padding: 24px (mobile friendly)

---

## 🔧 Technical Stack Summary

| Layer | Technology | Details |
|-------|-----------|---------|
| **Markup** | HTML5 | Semantic, modern |
| **Styling** | CSS3 | Grid, Flexbox, Variables, Animations |
| **Fonts** | WOFF2 (Web Fonts) | Bitter (serif), Nunito Sans (sans-serif) |
| **Images** | WebP/JPEG/PNG | Responsive, CDN-optimized |
| **Interactivity** | None (Currently) | Static site, potential for JS enhancements |
| **Hosting** | Static files | Can be deployed to any static host |
| **Integration** | WhatsApp API | Pre-filled booking messages |

---

## 🎯 Key Design Decisions

### 1. **No JavaScript (By Design)**
- Faster load times
- No dependencies
- Simpler maintenance
- Perfect for static content café site
- Could add JavaScript later for:
  - Mobile menu toggle
  - Image lazy loading
  - Smooth scroll animations
  - Form validation

### 2. **CSS Grid Over Bootstrap**
- Smaller CSS footprint
- More semantic markup
- Modern browser support (98%+)
- Cleaner code

### 3. **Local Brand Ownership**
- Custom color palette (not Material Design)
- Unique typography pairing
- Regional appeal (Gambian cafe aesthetic)
- Warm, welcoming personality

### 4. **WhatsApp Integration**
- High mobile adoption in Africa/Gambia
- Direct customer engagement
- Pre-filled messages reduce friction
- No backend needed

### 5. **Static Site Approach**
- Fast (no database queries)
- Secure (no backend vulnerabilities)
- Easy to maintain
- Cheap hosting
- Perfect for small business

---

## 🛠️ How to Make Changes

### Adding a New Menu Item
1. Open `menu.html`
2. Find the relevant section (Breakfast, Lunch, etc.)
3. Add new `<div class="menu-item">` with:
   ```html
   <div class="menu-item">
     <img src="images/dish-name.webp" alt="Dish name" width="100">
     <div>
       <strong>Dish Name</strong>
       <span class="muted">Description</span>
     </div>
     <div class="price">GMD 150</div>
   </div>
   ```

### Changing the Color Scheme
1. Open `style.css`
2. Modify `:root` CSS variables:
   ```css
   --cocoa: #YourNewColor;
   --persimmon: #YourNewAccent;
   /* etc */
   ```
3. All components update automatically

### Adding New Page
1. Create `new-page.html`
2. Copy header/footer from existing page
3. Add content using existing `.container`, `.grid-2`, classes
4. Add link to navbar across all pages

### Updating Hours/Contact
1. `index.html` - Hero badge and About section
2. `contact.html` - Contact info section
3. All WhatsApp links remain same (number stored centrally)

---

## 📊 File Size Analysis

**Estimated Sizes:**
- `index.html` - ~8 KB
- `menu.html` - ~6 KB
- `gallery.html` - ~5 KB
- `contact.html` - ~4 KB
- `style.css` - ~12 KB (full, unminified)
- `images/` - ~2-3 MB total (33 images, optimized)

**Total Site Size:** ~2.3-2.5 MB (fast load)

---

## 🌐 Browser Compatibility

**Supported Browsers:**
- Chrome 90+ ✓
- Firefox 88+ ✓
- Safari 14+ ✓
- Edge 90+ ✓
- Mobile Chrome/Safari ✓

**Not Supported:**
- IE11 (CSS Grid not fully supported)
- Very old mobile browsers

---

## 📈 Future Enhancement Ideas

1. **JavaScript Enhancements**
   - Mobile menu toggle
   - Image lazy loading
   - Smooth scroll animations
   - Image lightbox for gallery

2. **Content Management**
   - Move to Markdown for content (Astro, 11ty)
   - Automated image optimization
   - Scheduled specials (daily menu updates)

3. **Backend Integrations**
   - Reservation system (email notifications)
   - Online ordering system
   - Customer database
   - Inventory tracking

4. **Analytics & SEO**
   - Google Analytics
   - Search Console verification
   - Meta tags optimization
   - Structured data (JSON-LD for recipes, location)

5. **Accessibility**
   - ARIA labels review
   - Keyboard navigation testing
   - Color contrast audit
   - Screen reader testing

6. **Internationalization**
   - Wolof translation
   - Mandinka translation
   - Language switcher

---

## 📝 Summary

The **Baobab Bites Café website** is a modern, performant static site built with:
- **Clean HTML5** semantic structure
- **CSS3** with custom properties for theming
- **Mobile-first responsive design**
- **No JavaScript** for speed and simplicity
- **WhatsApp integration** for direct bookings
- **Professional branding** with warm, earthy aesthetic
- **Local business focus** highlighting Gambian home cooking

It's a perfect example of a small-business website: fast, affordable, maintainable, and customer-focused. The architecture allows easy expansion without significant restructuring.

---

**Created:** August 2026  
**Status:** Active & Maintained  
**Last Updated:** Current Session

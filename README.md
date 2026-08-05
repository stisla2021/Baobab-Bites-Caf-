# Baobab Bites Café Website

Welcome to the official website repository for **Baobab Bites Café** — Jalangbam's destination for authentic Gambian home cooking, fresh-baked goods, and specialty beverages.

## About Baobab Bites

Baobab Bites Café is a local café in Jalangbam, The Gambia, dedicated to serving:
- **Authentic Gambian Dishes**: Daily stews, benachin, domada, and chicken yassa
- **Fresh-Baked Goods**: Buns, croissants, cinnamon rolls, and traditional treats
- **Specialty Beverages**: Baobab smoothies, Gambian coffee (Touba), and specialty lattes
- **Farm-to-Table Ingredients**: All dishes prepared in-house using ingredients from local farms

**Hours of Operation**: 7:30 AM - 8:00 PM  
**Location**: Jalangbam, The Gambia  
**Contact**: [WhatsApp](https://wa.me/2207480021?text=Hi%20Baobab%20Bites%2C%20I%20would%20like%20to%20book%20a%20table.)

---

## Website Structure

```
Baobab-Bites-Cafe.St/
├── index.html           # Home page (hero, featured items, about preview)
├── menu.html            # Full menu with offerings and prices
├── gallery.html         # Photo gallery of dishes and café ambiance
├── contact.html         # Contact information and booking form
├── style.css            # Custom styling with branded color scheme
├── images/              # All images used throughout the site
│   ├── hero-main.webp
│   ├── menu-banner.jpeg
│   ├── Dishes: chicken-yassa.webp, benachin.png, domada-soup.png, etc.
│   ├── Beverages: baobab-latte.webp, gambian-coffee-touba.jpg, etc.
│   └── Team photos: owner.jpg, chef.jpeg, barista.jpeg, etc.
└── README.md            # This file
```

---

## Pages Overview

### 1. **Home (index.html)**
The landing page featuring:
- Navigation bar with links to all sections
- Hero section with welcome message and booking call-to-action
- "Book a table" button (links to WhatsApp)
- Featured images of the café and popular dishes

### 2. **Menu (menu.html)**
Comprehensive menu showcasing:
- Gambian main dishes
- Breakfast items and baked goods
- Beverages (hot and cold)
- Pricing information
- Dietary considerations

### 3. **Gallery (gallery.html)**
Visual showcase including:
- Food photography
- Café interior and exterior
- Team members
- Customer moments
- Seasonal specials

### 4. **Contact (contact.html)**
Customer engagement page with:
- Location information
- Operating hours
- Contact methods
- WhatsApp booking link
- Contact form (if applicable)

---

## Design & Branding

### Color Palette
- **Cocoa** (#40291F): Primary dark brown
- **Persimmon** (#D9603F): Accent orange-red
- **Cream** (#FBF3E8): Light background
- **Taupe** (#7A6653): Secondary neutral
- **Navy** (#14335A): Accent blue
- **White** (#FFFFFF): Clean backgrounds

### Typography
- **Headings**: Bitter (serif font)
- **Body**: Nunito Sans (sans-serif font)
- **Fallbacks**: Georgia and Helvetica Neue for compatibility

### Responsive Design
- Mobile-first approach
- Mobile menu button for navigation on small screens
- Fully responsive images and layouts

---

## Key Features

✅ **Mobile Optimized** — Works seamlessly on phones, tablets, and desktops  
✅ **WhatsApp Integration** — Direct booking via WhatsApp with pre-filled messages  
✅ **Image Gallery** — High-quality WebP and JPEG images  
✅ **Custom Branding** — Unique color scheme and typography  
✅ **Fast Loading** — Optimized image formats and efficient CSS  
✅ **Accessibility** — Proper semantic HTML and alt text for images  

---

## How to Edit & Maintain

### Adding Menu Items
Edit `menu.html` and add new items following the existing structure. Update prices and descriptions as needed.

### Updating Gallery
Add new images to the `images/` folder and reference them in `gallery.html` with appropriate alt text.

### Changing Hours or Contact Info
Update `index.html` (hero section) and `contact.html` with new information.

### Updating Styles
Modify `style.css` to change colors, fonts, spacing, or layout. The CSS uses CSS variables (custom properties) for easy theme adjustments.

### Customizing WhatsApp Links
The booking link can be updated by changing the phone number in these files:
- `index.html` (hero and header buttons)
- `contact.html` (contact section)

Format: `https://wa.me/2207480021?text=Your%20custom%20message`

---

## Technical Details

- **HTML5** — Modern, semantic markup
- **CSS3** — Custom properties, flexbox, and grid layouts
- **JavaScript** — Lightweight mobile menu functionality (`script.js`)
- **Images** — WebP, JPEG, and PNG formats for optimal loading
- **Responsive Design** — Mobile-first approach, tested down to 320px width
- **GitHub Pages** — Fully compatible, all relative image paths

---

## Latest Updates

### ✨ August 2026 - Mobile & Image Improvements

**What's New:**
- 📱 **Mobile Menu** — Functional hamburger menu that appears on phones
- 🖼️ **Fixed Image Loading** — All images now display on GitHub Pages and mobile devices
- 📊 **Better Mobile Layout** — Improved spacing and sizing for small screens
- 🎨 **Smart Backgrounds** — Hero sections now display with fallback colors on mobile
- ⚡ **Performance** — Optimized background images for mobile (scrolling instead of fixed)

**Files Added/Modified:**
- ✅ NEW: `script.js` — Mobile menu and interaction handler
- ✅ UPDATED: `style.css` — Mobile responsive improvements and fixes
- ✅ UPDATED: All HTML files — Added script tag for mobile menu

**Mobile Features:**
- Click hamburger menu (☰) to toggle navigation
- Menu closes automatically when you click a link
- All navigation items (Home, Menu, Gallery, Contact) visible on phones
- Proper image scaling on all screen sizes
- Contact form optimized for mobile input

---

## Deployment & Hosting

This website is hosted on **GitHub Pages** and is fully static. To deploy:

1. Push changes to the `main` branch
2. GitHub Pages automatically builds and deploys
3. Site is live at: `https://stisla2021.github.io/Baobab-Bites-Cafe`

All changes to images, text, styles, or menu items update automatically after pushing.
- **Responsive Images** — WebP format with JPEG fallbacks
- **Fonts** — Web fonts (Bitter, Nunito Sans) with system fallbacks
- **Accessibility** — Proper heading hierarchy, alt text, and color contrast

---

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

---

## Performance Tips

1. **Images**: Keep images under 500KB, prefer WebP format
2. **CSS**: Current stylesheet is minimal and loads quickly
3. **Mobile**: Test on actual mobile devices regularly
4. **Contact Links**: Ensure WhatsApp numbers and email links work

---

## Future Enhancements

Consider adding:
- Online ordering system
- Reservation system
- Customer reviews/testimonials
- Blog section (daily specials, recipes)
- Multi-language support (Wolof, Mandinka)
- Social media feeds integration
- Email newsletter signup

---

## Support & Questions

For website updates or technical issues, contact the site administrator.

---

**Last Updated**: August 2026  
**Version**: 1.0  
**Status**: Live ✓

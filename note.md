# Project Note for Baobab Bites Café

## Introduction
This document explains the Baobab Bites Café website from end to end. It describes how the static site is organized, what each file contains, which visual updates were made, and how the most recent design changes were applied. The goal is to provide a complete reference for anyone reviewing or continuing the project.

## Folder structure and purpose
The project uses a simple static website layout with clearly separated content, presentation, and assets.

- `Index.html`
  - The homepage.
  - Includes the hero area, About section, and Today’s Specials.
  - Serves as the main landing page for visitors.

- `Contact.html`
  - The contact and booking page.
  - Contains a booking form with WhatsApp integration.
  - Includes the Visit Us panel with location, phone, and hours details.

- `menu.html`
  - The menu page.
  - Presents signature drinks, hot drinks, and cold beverages.
  - Uses card layouts and local image assets where available.
  - Includes a QR code section that links visitors to the website.

- `css/style.css`
  - The single stylesheet for the entire site.
  - Controls colors, typography, layout, spacing, section backgrounds, cards, forms, and responsive behavior.

- `images/`
  - Stores drink photos and other local image assets.
  - Makes the site self-contained for local preview and deployment.

- `.vscode/`
  - Stores VS Code workspace settings.
  - Helps keep editor configuration separate from website files.

- `note.md`
  - This documentation file.
  - Explains the site structure, design decisions, and recent updates.

- `qr_code.png`
  - The generated QR code image for the website.
  - Scans directly to the GitHub Pages website URL.

- `qr_code_guide.md`
  - A short guide explaining how the QR code was created and how the terminal commands worked.

- `temp_patch_note.txt`
  - Temporary working note from earlier edits.
  - Contains a shorter summary of the changes made during updates.

## How the website was created
This is a static HTML/CSS project with no backend. Each page is a plain `.html` file, and all visual presentation is handled by `css/style.css`. This approach is ideal for a small café website because it is lightweight, simple to maintain, and easy to host.

### Content structure
The HTML pages were built using semantic sections, including:

- the header and navigation
- the hero/banner area
- About Us copy and team details
- feature and menu sections for drinks
- contact and booking forms
- a footer with social links and business info

Section-level classes like `.hero`, `.about`, `.featured`, `.contact-section`, and `.visit-us` make it easy to style each area independently.

### Visual design approach
The site uses a blue-focused palette and layered gradients to create a fresh café brand feel. The main design work was done in `css/style.css`.

Root CSS variables were declared in `:root` to control the brand palette:

- `--primary`
- `--primary-dark`
- `--primary-light`
- `--accent`
- `--accent-dark`
- `--accent-light`
- `--light`
- `--text`
- `--text-light`
- `--muted`
- `--border`

Using variables makes it easy to update colors globally without changing every selector individually.

## Recent visual updates
The most recent updates focused on stronger blue styling, better contrast, and more visible section separation.

### Global background update
The overall page background was changed to a bright, visible blue gradient. This created a cleaner, more cohesive page foundation and improved the contrast for all sections.

### Contact page updates
The contact form and Visit Us panel were reworked to make every detail visible and easy to read.

- The Book a Table panel now uses the same strong blue panel design as the Visit Us section.
- Form fields are grouped into `.form-group` boxes, each with its own visible container.
- Labels are bright white and bold.
- Inputs and textarea fields use a strong white background for readability.
- The submit button now matches the blue accent color system.

### Visit Us panel improvements
The Visit Us panel was updated with a strong dark blue gradient panel and brighter text.

- Location, Phone, and Hours each have their own colored detail box.
- Labels are bold and clearly visible.
- Each box uses a distinct blue shade and a left accent border.

### Menu background update
The `featured` menu section on the menu page was updated to a stronger blue gradient background.

- The menu block now stands out more clearly.
- Headings are brighter and easier to read.
- The menu section matches the overall blue theme better.

### Footer redesign
The footer received a more prominent styled treatment:

- stronger blue gradient background
- larger top accent border
- rounded top corners
- bolder footer text
- slightly larger social icons

This makes the footer stand out visually as its own distinct section.

### QR code feature
A QR code was added to the website so visitors can scan it and open the café website instantly on their phones.

- The QR code links to the GitHub Pages site: https://stisla2021.github.io/Baobab-Bites-Cafe/
- A QR image file was created as `qr_code.png`.
- QR sections were added to the homepage, contact page, and menu page.
- A supporting guide file, `qr_code_guide.md`, was created to explain how the QR code was generated.

### Homepage branding restore
The homepage title/logo in the header was restored to a brighter original-style look.
The nav brand badge now uses a clear white title color and a polished background.

## Component-specific design notes
The site uses consistent patterns across cards, forms, and panels.

### About section
The About section has a light blue-white gradient panel with a soft border and shadow. It is meant to read as a polished story card that remains distinct from the homepage background.

### Today’s Specials
The featured specials block uses a section-level gradient and card styling to keep the specials visually separate and prominent.

### Cards
Drink cards are designed with:

- rounded corners
- blurred translucent backgrounds
- soft shadows
- card-specific color variations for certain drink types

This makes the cards feel attractive and easy to scan.

### Forms
The contact form uses grouped boxes to make each field feel like its own item. This improves readability and creates a stronger visual connection to the Visit Us detail boxes.

## Implementation details
All recent changes were made in the existing HTML and CSS files.

No new JavaScript was added for the visual updates. The contact form still uses the existing WhatsApp booking script, and all design refinements were done in `css/style.css`.

### Editing workflow
The update process followed these steps:

1. Review the current HTML and CSS files.
2. Identify the areas needing stronger visibility and section contrast.
3. Update the global body background to a vibrant blue gradient.
4. Modify the Book a Table form section to match the Visit Us panel style.
5. Wrap each form field in `.form-group` boxes for clearer grouping.
6. Update the menu section background to a stronger blue gradient.
7. Refresh the footer styling and footer typography.
8. Restore the homepage nav title/logo colors.
9. Document all changes in `note.md`.

### GitHub push commands
The following commands were used in the terminal to push the website changes to GitHub:

```powershell
Set-Location 'c:\Users\stisl\Desktop\Baobab Bites Cafe'
git status --short
git add index.html contact.html menu.html css/style.css qr_code.png
git commit -m "Add QR section to contact and menu pages"
git push origin master
```

These steps stage the changes, create a commit, and push the committed files to the GitHub repository.

A second documentation push was also made for the QR guide file:

```powershell
git add qr_code_guide.md
git commit -m "Add QR code guide documentation"
git push origin master
```

### Why this workflow was chosen
The workflow prioritizes visual clarity and consistent theming. By updating global palette variables and then refining individual section blocks, the site achieves a coherent blue theme with less risk of inconsistent styling.

## Why a static website works here
Baobab Bites Café is well-suited for a static site because it is basically an informational and booking landing page.

- pages are easy to edit
- the site loads quickly
- there is no need for a backend server
- all content can be previewed locally

This is a practical approach for a small café that needs a clean, attractive online presence.

## What is left to do
The project is visually strong, but a few improvements may still be helpful:

- add more local drink images to the `images/` folder
- connect the menu cards to local image files where possible
- add a favicon and metadata for better browser display
- improve mobile layout and spacing for smaller screens
- add alt text for all images for accessibility
- add optional feedback or success messaging after booking

## Practical notes for future edits
When continuing work on this project:

- edit `css/style.css` for design changes
- edit `Index.html` for homepage content
- edit `menu.html` for menu page content
- edit `Contact.html` for bookings and contact page updates
- store new images in `images/`
- keep `note.md` as the documentation file

This organization keeps the project easy to maintain.

## Why the documentation matters
`note.md` provides a clear record of what was done and why. That makes it easier for anyone to pick up the project later and understand the design decisions and current status.

## Final summary
Baobab Bites Café is a static HTML/CSS website that has been updated into a stronger blue-themed experience. Recent improvements include:

- a more visible blue page background
- stronger menu section styling
- a bolder footer design
- highly visible contact form groups
- a polished Visit Us panel with separate detail boxes

The site is now more readable, more visually cohesive, and better documented for future changes.
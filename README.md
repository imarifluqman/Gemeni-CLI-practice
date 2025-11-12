# Gemini CLI Landing Page Practice

This project is a modern, responsive landing page created interactively using the Gemini CLI. It demonstrates how to build a web interface from scratch, including a responsive navbar, a hero section, and custom font integration.

## Features

- **Responsive Design:** The layout adapts to different screen sizes, from large desktops to small mobile phones.
- **Mobile-First Navigation:** A slide-in sidebar menu provides a seamless experience on mobile devices.
- **Custom Local Font:** Uses a locally stored "Canva Sans" font via the `@font-face` CSS rule.
- **Gradient Background:** A full-screen, visually appealing gradient background.
- **Semantic HTML:** The structure uses semantic tags like `<header>`, `<main>`, `<nav>`, and `<aside>` for better accessibility and SEO.
- **Interactive Elements:** The mobile menu is fully functional with open/close buttons and an overlay, powered by JavaScript.

## File Structure

```
.
├── Canva-Sans-Regular/
│   └── CanvaSans-BoldItalic.otf
├── index.html
├── logo.svg
├── README.md
├── script.js
└── style.css
```

## How It Was Built

This project was built step-by-step using a series of commands with the Gemini CLI. Here is a summary of the process:

### 1. Initial Setup

- The `index.html`, `style.css`, and `script.js` files were created.
- The `style.css` file was linked in the `index.html` head, and the `script.js` file was linked at the end of the body.

### 2. Background and Font

- A full-screen gradient was applied to the `<body>` to serve as the main background.
- The local font `CanvaSans-BoldItalic.otf` was loaded using the `@font-face` rule in `style.css` and applied to the entire page.

### 3. Navbar Construction

- A semantic `<header>` was created to act as the navbar.
- The navbar was structured with three main sections: left (logo), center (menu items), and right (buttons).
- For responsiveness, two versions of the menu were created:
  - **Desktop:** A horizontal menu (`.navbar-center-desktop`) and buttons that are visible on screens wider than 768px.
  - **Mobile:** A hamburger menu icon and a slide-in sidebar (`<aside class="mobile-menu-wrapper">`) for screens 768px or narrower.
- JavaScript was written to handle the logic for opening and closing the mobile sidebar menu and a background overlay.

### 4. Hero Section

- A semantic `<main>` tag was used for the hero section.
- A large, two-line heading, a descriptive paragraph, and two call-to-action buttons were added.
- The hero section was styled to be centered vertically and horizontally, with responsive font sizes for different screen widths.

### 5. Final Polish

- A final review was conducted to improve responsiveness on very small screens (`max-width: 480px`).
- `box-sizing: border-box;` was applied globally to ensure a consistent layout.

## How to View

1.  Ensure all the files and the `Canva-Sans-Regular` directory are in the same folder.
2.  Open the `index.html` file in a web browser.
3.  Resize the browser window to see the responsive design in action.

---

# Post‑Anthropocene Portfolio

## Epic

In a future where art and technology fuse into one, this portfolio tells the story of a creator navigating the **post‑anthropocene**—a speculative era in which humanity has evolved beyond its current form.  The interface feels like an ancient terminal bathed in neon light.  As you scroll, you traverse a narrative: from a bold hero panel that introduces the artist, through a self‑portrait of words, into a gallery of generative projects and a catalogue of skills, finishing with a conversation in a contact form.  The experience is inspired by dark‑mode design trends and is carefully crafted to be accessible to everyone, avoiding eye‑strain inducing colours and ensuring clear contrast【826091645669512†L52-L112】.  Micro‑interactions, like hover lifts and animated progress bars, breathe life into the page without overwhelming the user【93710445536284†L155-L176】.  Typography is sacred—taking cues from monospaced terminals and space‑age headlines—and gradients are ceremonial, hinting at cosmic energy swirling beneath the surface.

## Overview

This repository contains a **React** + **TypeScript** web application that implements a long scrolling portfolio.  The design blends retro terminal aesthetics with nightclub flyers from a rave dimension.  Throughout the site you’ll find neon gradients, geometric patterns and interactive components.  The layout is modular; each section occupies one screen height and tells part of your story.

### New in this revision (2025 design refresh)

Drawing on cutting‑edge research into 2025 web design trends, this version introduces several enhancements:

* **Micro‑animations and scroll‑triggered effects:** Buttons ripple, cards lift on hover, and sections fade into view as you scroll【933092526362029†L60-L79】.  These subtle animations guide users through your narrative without overwhelming them.
* **Custom cursor:** A holographic circular cursor follows your pointer and enlarges when hovering over interactive elements.  Custom cursors have become playful brand elements on modern sites【933092526362029†L69-L73】.
* **Floating shapes (“UFOs”):** Semi‑transparent blobs drift behind the content.  Unexpected floating objects add a sense of depth and whimsy【933092526362029†L123-L127】.
* **Bento‑style modular layout:** Inspired by the bento grid trend, each section sits inside its own “block” yet flows seamlessly into the next【933092526362029†L148-L152】.
* **Negative space and minimalism:** Generous whitespace and simple information architecture make the site easy to navigate【933092526362029†L162-L165】【977873675556658†L47-L58】.  The streamlined structure prioritises content and reduces cognitive load.
* **Expressive typography and saturated gradients:** Headings use futuristic fonts and dynamic animations.  Bold contrasts, saturated gradients and transparent overlays evoke a sci‑fi aesthetic【933092526362029†L171-L184】.
* **Sustainable, accessible design:** Lightweight components, reusable modules and careful consideration of colour contrast improve energy efficiency, longevity and inclusivity【977873675556658†L69-L80】.

### Key Features

- **Dark‑mode foundation:**  A dark colour palette reduces glare and highlights content.  Accessible dark mode is more than white text on a black background: the palette uses soft blacks and dark blues to maintain legibility and avoids pure black or white, which can cause halation【826091645669512†L93-L102】.  Primary and secondary accent colours are lavender and turquoise—bright enough to pop, but desaturated to pass WCAG contrast checks【826091645669512†L52-L112】.
- **Hero section:**  A large typographic banner greets visitors.  Research shows that hero images or banners immediately convey your brand and help build trust【940256300928577†L118-L151】.  Here, the hero uses a radial gradient and animated heading to set the mood.
- **About section:**  A glowing card introduces the creator.  It contextualises the work and demonstrates your personality, echoing advice that great portfolios tell the story behind your work【851894938194853†L59-L84】.
- **Projects grid:**  A responsive grid showcases work.  Each card uses hover‑based micro‑interactions that lift and scale slightly, providing visual feedback to the user【93710445536284†L155-L176】.  High‑quality visuals are used thoughtfully to avoid clutter【851894938194853†L85-L87】.
- **Skills section:**  Animated progress bars communicate proficiency levels.  The bars are triggered as they scroll into view, motivating users to keep scrolling.
- **Contact form:**  A minimal form invites collaboration.  Semantic HTML and labelled inputs ensure the form is accessible.  Focus outlines are clearly visible, meeting WCAG guidelines【826091645669512†L109-L119】.
- **Responsive navigation:**  The fixed navigation bar collapses into a hamburger menu on small screens.  Links use smooth scrolling to guide visitors between sections.
- **Micro‑interactions:**  Hover effects, parallax fades and animated indicators enhance engagement without sacrificing performance【93710445536284†L189-L216】.

 - **Custom cursor and hover states:**  A bespoke holographic cursor follows the mouse and enlarges when hovering over interactive elements.  Custom cursors and cursor animations are emerging as delightful brand signatures【933092526362029†L69-L73】.
 - **Floating shapes (UFOs):**  Translucent blobs drift slowly in the background, breaking the grid and adding playful depth【933092526362029†L123-L127】.  They are purely decorative and respect user focus by staying behind the content.
- **Accessibility:**  Colours are chosen to meet or exceed the WCAG 2.1 Level AA contrast ratios【826091645669512†L109-L119】.  Focus indicators are visible, interactive elements are keyboard accessible and the layout is responsive.  Where possible, avoid using colour alone to convey meaning【826091645669512†L70-L78】.
  Simplified navigation and clear headings help users find content quickly【977873675556658†L47-L58】, while the underlying code remains lightweight and sustainable【977873675556658†L69-L80】.

## Inspiration & Research

This project draws on several design best practices and inspirations:

- **Portfolio storytelling:**  An effective portfolio does more than list projects; it showcases personality, focuses on quality over quantity and tells the story behind your work【851894938194853†L59-L94】.  Sections of this site are deliberately structured to reveal context and narrative.
- **Dark‑mode trends:**  Dark themed interfaces are popular because they reduce emitted light and highlight visuals【719828334972449†L98-L116】.  However, pure black backgrounds can cause eye strain; softer dark shades and careful colour selection create a comfortable reading experience【826091645669512†L93-L102】.  Dark mode also saves energy on OLED screens and emphasises imagery【719828334972449†L114-L172】.
- **Gradient aesthetics:**  Gradients have become a staple of modern web design, blending colours to produce vibrant, immersive effects【35754926128597†L30-L39】.  The site uses radial gradients behind sections and linear gradients on buttons and progress bars to evoke “ceremonial” visuals.
- **Hero banners:**  Large hero images or headers are among the most beloved UI patterns because they anchor a visitor’s first impression【940256300928577†L139-L144】.  They provide context for content and set the tone for the site【940256300928577†L148-L151】.
- **Micro‑interactions:**  Small animations—like hover lifts, progress indicators and parallax scrolls—provide feedback and make websites feel intuitive【93710445536284†L155-L176】.  They guide visitors, improve engagement and reinforce brand personality【93710445536284†L189-L216】.
- **Accessible dark mode:**  According to accessibility guidelines, designers should avoid saturated colours, pure black and pure white; instead they should choose softer shades and maintain a minimum contrast ratio of 4.5:1 for normal text【826091645669512†L82-L113】.  Interface components must also have sufficient contrast (3:1) against adjacent colours【826091645669512†L109-L119】.  This project follows those recommendations.

- **Micro animations & custom cursors:**  Modern sites use micro‑animations to guide attention and provide feedback—hover effects, loading indicators and scroll‑triggered transitions【933092526362029†L60-L80】.  Custom cursors add personality and transform the pointer into a branding element【933092526362029†L69-L73】.  We embrace both.

- **Dark mode adoption & benefits:**  Studies show that between 22 % and 70 % of users prefer dark mode【291606547431468†L256-L280】, and more than half of websites now support it【946295732221717†L152-L161】.  Dark backgrounds reduce eye strain, improve readability in low light and save battery life【291606547431468†L256-L280】.

- **Simplified UI & sustainable design:**  Clean interfaces with clear navigation and simple information architecture minimise cognitive load and enhance usability【977873675556658†L47-L58】.  Sustainable design emphasises lightweight code, optimised page speed and reusable components, benefiting users with slower connections and prolonging the lifespan of digital products【977873675556658†L69-L80】.

- **Parallax and motion design:**  Motion design supports storytelling by animating elements as users scroll.  Parallax scrolling creates depth and immerses visitors in the narrative【977873675556658†L116-L126】.  However, subtlety is key—overuse can impede accessibility, so we employ strategic, gentle parallax effects【977873675556658†L132-L136】.

- **Expressive typography & colour trends:**  Designers are using expressive, animated typefaces as centrepieces【933092526362029†L171-L176】.  Colour trends include bold contrasts, saturated gradients and transparent overlays【933092526362029†L180-L184】.  Our palette and typography reflect these ideas while maintaining readability and contrast.

## Getting Started

### Prerequisites

- **Node.js** (version 16 or later)
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd post-anthropocene-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:3000` by default.  Vite’s hot module replacement reloads changes as you edit.

4. **Build for production**

   ```bash
   npm run build
   ```

   The compiled files will be placed in the `dist` directory.  You can preview the production build with `npm run preview`.

### Project Structure

```
post-anthropocene-portfolio/
├── index.html            # Entry HTML file; loads fonts and mounts React
├── package.json          # Project metadata and scripts
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
├── src/
│   ├── main.tsx          # React entry point
│   ├── App.tsx           # Root component orchestrating sections
│   ├── styles/
│   │   └── global.css    # Global CSS variables and resets
│   ├── assets/           # Static images used in projects
│   └── components/       # Reusable UI components
│       ├── Navbar.tsx
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── ProjectsSection.tsx
│       ├── ProjectCard.tsx
│       ├── SkillsSection.tsx
│       └── ContactSection.tsx
└── README.md             # This file
```

### Customising the Portfolio

You can adapt the site to your own needs by modifying the content and styling:

- **Project data:**  In `ProjectsSection.tsx` you’ll find an array of project objects.  Replace the sample entries with your own project titles, descriptions, images and links.
- **Colours and fonts:**  Edit CSS variables defined in `src/styles/global.css` to adjust the colour palette or change fonts.  Ensure your choices maintain sufficient contrast【826091645669512†L109-L119】.
- **Sections:**  Feel free to add or remove sections by editing `App.tsx`.  Each section is encapsulated in its own component for modularity.
- **Images:**  Place your own images into `src/assets` and import them into your components.  Remember to provide descriptive `alt` text for screen reader users.
- **Animations:**  The site uses [Framer Motion](https://www.framer.com/motion/) for simple animations.  Explore its documentation to craft more elaborate micro‑interactions or transitions.

### Accessibility Notes

This project strives to be accessible by default:

- All interactive elements are keyboard operable and display focus outlines.
- The colour palette avoids pure black/white and saturated colours, maintaining at least 4.5:1 contrast for text and 3:1 for UI elements【826091645669512†L82-L119】.
- Form controls include associated labels and use semantic HTML.
- Avoid using colour alone to convey information; pair colour with text or icons as needed【826091645669512†L70-L78】.
- If you add new components, test them with keyboard navigation and screen readers.

## Contributing

Contributions, issues and suggestions are welcome!  If you’d like to extend the template—perhaps by adding a light theme, integrating a CMS or adding 3D elements—feel free to fork the repository and open a pull request.

## License

This project is licensed under the **MIT License**.  See the [LICENSE](LICENSE) file for details.

## Acknowledgements

The design draws inspiration from many talented designers and writers.  Articles from FramerBite on crafting memorable portfolios【851894938194853†L59-L94】, Justinmind’s guidance on hero images【940256300928577†L118-L151】, Webflow’s exploration of micro‑interactions【93710445536284†L155-L176】 and DubBot’s accessibility best practices for dark mode【826091645669512†L52-L112】 informed the aesthetic and functional decisions in this template.  The abstract background images used in the sample projects were generated using an AI model to evoke the futuristic rave aesthetic.
# DeratPro - Professional Pest Control Landing Page

A modern, fully responsive, and interactive landing page developed to showcase a pest control business (Deratization, Disinsection, Disinfection). The project combines a clean UI with advanced 3D visual elements for a premium user experience.

## Live Demo
The project is automatically deployed via GitHub Actions and can be accessed here:
**https://cosminpretcar.github.io/DeratPro/**

## Tech Stack
* **Core:** React 19, TypeScript 6, Vite 8
* **Styling:** Tailwind CSS 4 via the Vite plugin
* **3D Graphics:** Three.js via `@react-three/fiber` and `@react-three/drei`
* **Icons & Assets:** Custom SVG vector graphics, optimized for performance
* **Infrastructure & CI/CD:** GitHub Pages with GitHub Actions

## Key Features
1. **Interactive 3D Radar (Hero Section):** A custom-built 3D component illustrating the "scan and neutralize" process using a time-based sine wave algorithm for fluid animation.
2. **Custom Smooth Scrolling:** A sticky header with a backdrop-blur effect utilizing a custom JavaScript offset calculation to ensure precise navigation across all devices, bypassing native iOS/Safari anchor conflicts.
3. **Responsive & Mobile-First Design:** Fluid layout based on the Tailwind grid system, including a mobile-friendly hamburger navigation menu.
4. **SEO Optimized:** Complete metadata, Open Graph tags for social sharing, and semantic HTML5 architecture.

## Architecture & Technical Decisions
* **Vite vs. CRA:** Chosen for its lightning-fast HMR and optimized builds, which are essential when dealing with large bundles like Three.js.
* **Component Modularity:** Strict separation of concerns (e.g., separating `Hero3D` logic from the `Hero` UI) keeps the codebase clean, pure, and scalable.
* **CI/CD Automation:** `.github/workflows/deploy.yml` runs on pushes to `main`, uses Node.js 20, installs dependencies with `npm install`, builds with `npm run build`, and publishes `dist/` to GitHub Pages.

## Local Installation
To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/CosminPretcar/DeratPro.git

2. Navigate to the project directory:
    ```bash
    cd DeratPro

3. Install dependencies:
    ```bash
    npm install

4. Start the development server:
    ```bash
    npm run dev
    
5. Open http://localhost:5173 in your browser.


## AI Prompt Engineering Framework

This project used AI tools to accelerate development and ensure consistency. Below are the exact prompts used for scaffolding the UI and generating the custom vector assets.

### 1. UI/UX Scaffolding (LLM Prompt)
To generate the initial React/Tailwind component structure, the following prompt was utilized:
> "Create a modern, highly professional, and responsive landing page for a fictional pest control company called 'DeratPro'. The design must inspire trust and be optimized for lead generation. Use a clean color palette (perhaps whites, light grays, and a trustworthy accent color like deep blue or safety green). Use Tailwind CSS. The page must have a vertical scroll layout with exactly these 5 sections: Hero Section (Split layout with Three.js Placeholder), Services Section (Grid with 3 cards), Why Us Section (4 key benefits), How it Works Section (3 simple steps), and Contact Section. Please generate all the visible UI text in Romanian. Ensure the layout is fully responsive for mobile and desktop."

### 2. Custom SVG Generation (Google Stitch)
To ensure a highly consistent visual identity without relying on external UI libraries, all vector icons were generated using Google Stitch. 

**Base Style Prompt:**
> "I want to generate a series of minimalist SVG icons for a website. They must all strictly follow this style guide: 'line-art' design (outlines only), 2px stroke width, rounded corners, transparent background. Use exclusively dark blue (#0f2b48) for the main strokes and add small green accents (#10b981). The SVG code must be clean, using a viewBox="0 0 24 24"."

**Iterative Subject Prompts:**
*   **Brand Favicon:** 
>"Generate a minimalist SVG icon specifically designed to be used as a website favicon. The design must represent a simple safety shield. Use a thick outline stroke of 3px or 4px (to remain clear at very small sizes) in dark blue (`#0f2b48`) and add a green visual accent (`#10b981`), such as a checkmark or a partial fill. No text, transparent background, clean code strictly using a `viewBox="0 0 24 24"`."
*   **Rodent Control (Deratizare):** 
>"Generate the icon in the same style representing a stylized mouse or rat, from a profile view."
*   **Insect Control (Dezinsecție):** >
>"Generate the icon representing a bug/roach seen from above, minimalist and technical, without disgusting details."
*   **Disinfection (Dezinfecție):** 
>"Generate the icon representing a molecule, a virus, or a bacteria with small spikes/rays."
*   **Fast Intervention (Intervenție rapidă):** 
>"Generate the icon representing a dynamic lightning bolt."
*   **Approved Substances (Substanțe avizate):** 
>"Generate the icon representing a leaf or a small seedling (plant)."
*   **Authorized Personnel (Personal autorizat):** 
>"Generate the icon representing an ID badge or the minimalist silhouette of a technician."
*   **Work Guarantee (Garanția lucrării):** 
>"Generate the icon representing a shield with a checkmark in the center."
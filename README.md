## Skills & Tech Used

- **React (Hooks: `useState`)** — component structure, stateful UI
- **Tailwind CSS** — utility-first styling, responsive design, dark variants
- **Vite（Vite Build Tool）** — fast dev server & build (if your project was bootstrapped with Vite)
- **lucide-react** — SVG icon components

---

## Features Implemented

- **Sectioned landing page**: _Home, About, Projects, Skills, Contact_  
  In-page hash navigation for quick jumps
- **Sticky top navigation**: always visible on scroll; opaque background
- **Responsive menu**: desktop links + mobile panel; toggle via `useState`
- **Icon links**: GitHub & LinkedIn with safe external link attributes (`target="_blank"`, `rel="noreferrer"`)
- **Smooth hover states & focus styles**: consistent link and button feedback

---

## What I Practiced

- **SPA（Single-Page Application）**: logical section IDs + anchor linking
- **Responsive layout**: Tailwind breakpoints (`md:`) for desktop vs. mobile
- **State-driven UI**: mobile nav open/close with `useState`
- **Accessibility**: ARIAAccessible Rich Internet Applications） attributes and keyboard-friendly controls

---

## Sections Added

- `Home` — hero entry section
- `About` — short bio & value proposition
- `Projects` — highlighted work items
- `Skills` — tech stack and tools
- `Contact` — ways to reach me (socials, email)

---

## To Be Done

- **Dark/Light Mode**: Tailwind `dark` class strategy; theme toggle button; respects system preference
- **Theming**: Tailwind `dark:` variants, system fallback, and persistent user preference（`localStorage`）

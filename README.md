# Aegion Dashboard (Vite + React + TS + Tailwind)

This is a small React + Vite dashboard prototype built with TypeScript and Tailwind CSS. It showcases a simple layout with a Sidebar, Header (with a global search and theme toggle), and several page components (Dashboard, Buy List, Inventory List, User, Settings).

The project is actively being developed. The current focus is on a shared header search (lifted to the root `App`), dark mode (class-based Tailwind dark theme) and building out the page components.

## Features

- React 18 + TypeScript (Vite)
- Tailwind CSS with class-based dark mode
- Common `Layout` (Sidebar + Header)
- Header search input wired to filter table pages (Buy List and Inventory List)
- Theme toggle in Header that persists choice to `localStorage`
- Small UI primitives in `src/components/ui` (Input, Button, ThemeToggle)

## Quick start

Requirements: Node 18+ (or a compatible Node.js runtime) and npm/yarn/pnpm.

Install dependencies:

```powershell
npm install
```

Run the development server:

```powershell
npm run dev
```

Build for production:

```powershell
npm run build
```

Preview production build locally:

```powershell
npm run preview
```

Open the app at http://localhost:5173 (default Vite port) after starting the dev server.

## Project structure (important files)

- `index.html` — Vite entry HTML
- `src/main.tsx` — App bootstrap
- `src/App.tsx` — Top-level state and view routing (search, dark mode, current view)
- `src/components/Layout.tsx` — Wraps `Sidebar` + `Header` and renders page content
- `src/components/Header.tsx` — Global search input and theme toggle
- `src/components/Sidebar.tsx` — Navigation and logout button
- `src/components/BuyList.tsx` — Buy List page (accepts `search` prop and filters rows)
- `src/components/InventoryList.tsx` — Inventory List page (accepts `search` prop and filters rows)
- `src/components/Dashboard.tsx`, `User.tsx`, `Settings.tsx` — additional pages
- `src/components/ui` — small UI primitives (e.g., `input.tsx`, `button.tsx`, `theme-toggle.tsx`)
- `tailwind.config.cjs` — Tailwind config (class-based dark mode)

## Search behavior

Search input lives in the Header and the search state is lifted to `App`. Pages that render tables (currently `BuyList` and `InventoryList`) accept an optional `search` prop and filter their rows using a substring match across common row fields (id, tag, type, make, cal, report).

Type in the header search box to filter the visible rows in these pages.

## Dark mode

Dark mode is implemented by toggling the `dark` class on the document root (html element). The chosen preference is stored in `localStorage` under the key `dark` (value `'1'` for dark, `'0'` for light). UI primitives and major containers include `dark:` Tailwind variants so the UI adapts when the theme is toggled.

## Notes for contributors / dev tips

- UI primitives should explicitly set background and text color for both light and dark modes (e.g. input and button). This avoids invisible text in dark backgrounds.
- Search is currently client-side and performed synchronously. For large datasets consider debouncing the input and/or moving search to the backend with server-side filtering.
- The layout uses a simple `view` state in `App` to switch pages — consider wiring React Router if you want URL-linked navigation.

## Next steps (known todo)

- Improve and centralize UI primitives' dark/light styling (Buttons, Inputs).
- Add debounce for the header search input to reduce frequent renders (client-side datasets).
- Add pagination or remote data loading for the lists.
- Tests and TypeScript strictness updates.

## License

This repository contains your in-progress work. Add a license file if you plan to share it publicly.

---

If you'd like, I can:
- Add a short demo GIF or screenshots to the README,
- Improve the README with design decisions or API notes for each component,
- Or apply the UI primitive updates (Buttons) now so dark mode is fully consistent.

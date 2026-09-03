# Pawllo — landing page

Static marketing site for **Pawllo**, a fictional all-in-one pet care app (vet booking,
health records, grooming, food delivery, walks, sitters).

Live: https://aldoadi.github.io/Website-test/

## Stack

Vite + React, one stylesheet, no UI framework. The whole page is three files:
`src/App.jsx`, `src/sections.jsx`, `src/index.css`.

## Develop

```bash
npm install
npm run dev     # http://localhost:5173/Website-test/
```

The dev URL includes `/Website-test/` because `base` is set for GitHub Pages.

## Deploy

GitHub Pages serves the **`docs/` folder on `main`** — there is no CI workflow.
So `docs/` is build output *and* it is committed on purpose.

```bash
npm run build   # writes docs/
git add docs && git commit -m "chore: rebuild site"
git push
```

Pages picks up the push within a minute or two.

> Pawllo is not a real product. Names, quotes and statistics on the page are placeholder content.

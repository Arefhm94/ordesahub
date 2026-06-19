# Project Policies

## General
- Do NOT change any settings, visualizations, or styles currently used in the website without explicit instruction.
- Do NOT add comments to code unless instructed otherwise.
- Do NOT create documentation files (\*.md) or README files unless explicitly asked.
- Keep responses concise — avoid preamble, postamble, or explanations of what you did.

## SvelteKit & Svelte 5
- Code is **Svelte 5 with runes**. Use `$props()`, `$state()`, `$effect()`, `$derived()`, `$bindable()` — not the Svelte 4 `export let`, `$:`, or `on:click` syntax.
- Component events use callback props (e.g. `onclick` instead of `on:click`).
- Use `{@render children()}` for slot content — not `<slot />`.
- Use `lang="ts"` on all `<script>` tags.
- Use `$lib/*` path alias for imports from the `src/lib/` directory. Never use relative imports like `../../lib/`.
- Routes use SvelteKit's file-based convention: `+page.svelte`, `+layout.svelte`, `+layout.js`. Layouts and pages are co-located in route folders under `src/routes/`.
- SEO metadata goes in a `<svelte:head>` block at the top of each `+page.svelte` (title and meta description).
- `use:` actions are the preferred pattern for imperative DOM behavior (see `dragScroll` in `ScreenshotGallery.svelte`).

## Styling
- **Tailwind CSS v4 (CSS-first)** — no `tailwind.config.js`. Theme is defined in `src/routes/layout.css` via `@theme inline` and CSS custom properties. All color tokens are in `layout.css` using oklch. This project is dark-only.
- Use Tailwind utility classes first. Custom `<style>` blocks are acceptable for complex visual effects (the phone mockup frame in `ScreenshotGallery.svelte` is a good example). Add a `.no-scrollbar` utility class when hiding scrollbars.
- Entry animations use `tw-animate-css` classes: `animate-in fade-in slide-in-from-bottom-2 duration-300`, optionally with `delay-*`.
- Hero backgrounds often use `bg-[radial-gradient(...)]` for glow effects, paired with `blur-3xl` on decorative elements.
- Use the `cn()` utility from `$lib/utils.ts` for conditional class merging.
- Use `tailwind-variants` (`tv()`) for component variant logic (see button component for reference).
- Use shadcn-svelte design tokens from `:root`: `bg-background`, `text-foreground`, `text-muted-foreground`, `bg-card`, `border-border`, etc.
- For internal links, use `{base}` from `$app/paths` (e.g. `href="{base}/kiko/"`).

## Components
- shadcn-svelte UI components live in `$lib/components/ui/<component>/`. Each has its own folder with an `index.ts` barrel export and a `.svelte` file.
- Site-specific components (Header, Footer, Hero, Features, etc.) live in `$lib/components/site/`.
- Follow the shadcn-svelte pattern for new UI components: use `<script lang="ts" module>` for static types/variants, `<script lang="ts">` for reactive props, and bind `ref` with `$bindable()`.
- Use the `WithElementRef` type helper from `$lib/utils.ts` for components that accept a `ref` prop.

## TypeScript
- Strict mode is enabled. Do not use `any`; use proper types/interfaces. Apply existing patterns in the codebase for consistency.

## Assets & Images
- Static assets (images, icons) live in `$lib/assets/`. Kiko app screenshots are under `$lib/assets/kiko_ss/`.
- Import images directly (e.g. `import heroImg from '$lib/assets/kiko_ss/home_dark.png'`). SvelteKit resolves these as the optimized URL at build time.

## Development
- `npm run dev` starts the Vite dev server.
- `npm run check` runs `svelte-check` for type and correctness verification.

## Deployment
- Static site via `@sveltejs/adapter-static`. Build output goes to `build/`.
- GitHub Pages deployment via `.github/workflows/deploy.yml` and `static.yml`.
- Custom domain: `ordesahub.com` (configured in `static/CNAME`).
- The `_config.yml` file at root is for GitHub Pages Jekyll processing — do not modify.

## Adding Features
- When adding a new page, create it in `src/routes/` following the existing folder structure (e.g. `src/routes/kiko/`).
- Use `svelte-check` (`npm run check`) to verify types and correctness after making changes.
- When adding new dependencies, ensure they align with the existing stack (SvelteKit, Tailwind v4, shadcn-svelte, Lucide icons).
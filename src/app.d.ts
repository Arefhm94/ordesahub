// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

// Static asset imports (Vite resolves these to their public URL strings)
declare module '*.png' {
	const src: string;
	export default src;
}
declare module '*.jpg' {
	const src: string;
	export default src;
}
declare module '*.jpeg' {
	const src: string;
	export default src;
}
declare module '*.webp' {
	const src: string;
	export default src;
}
declare module '*.svg' {
	const src: string;
	export default src;
}

export {};

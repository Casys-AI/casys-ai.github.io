import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],
	base: '/', // ou laissez vide si vous utilisez un domaine de base (pas de sous-dossier)
});

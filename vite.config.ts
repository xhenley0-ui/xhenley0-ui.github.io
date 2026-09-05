import { sites } from '@openai/sites-vite-plugin';
import tailwindcss from '@tailwindcss/postcss';
import vinext from 'vinext';
import { defineConfig } from 'vite';
export default defineConfig({
  css: { postcss: { plugins: [tailwindcss()] } },
  define: {
    'process.env.NEXT_PUBLIC_BASE_PATH': JSON.stringify(
      process.env.SITE_BASE_PATH || '',
    ),
  },
  plugins: [vinext(), sites()],
});

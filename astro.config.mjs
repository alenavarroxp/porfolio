import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import deno from '@deno/astro-adapter';
import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: 'https://alenavarro.dev/',
  output: 'server',
  adapter: deno(),
})

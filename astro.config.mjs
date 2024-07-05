import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import auth from "auth-astro";
import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), auth(), db()]
});
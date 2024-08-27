import { defineConfig } from "cypress";

export default defineConfig({
  viewportHeight: 1000,
  viewportWidth: 1000,
  video: true,
  e2e: {
    baseUrl: 'http://localhost:4200',
  },
});

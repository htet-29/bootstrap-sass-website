import { defineConfig } from "vite";

export default defineConfig({
    build: {
        outDir: '../dist',
    },
    server: {
        open: true, // Automatically open the app in browser
    },
});
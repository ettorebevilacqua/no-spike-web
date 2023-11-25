import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import reactRefresh from "@vitejs/plugin-react-refresh";
import svgr from 'vite-plugin-svgr'
import reactCssModule from "vite-plugin-react-css-modules";
const generateScopedName = "[name]__[local]___[hash:base64:5]";


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(), svgr(), 
        reactCssModule({
            generateScopedName,
            filetypes: {
              ".less": {
                syntax: "postcss-less",
              },
            },
          }),
          reactRefresh()
    ],
    css: {
        modules: {
          generateScopedName,
        },
      },
    define: {
        'process.env': process.env,
    },
    server: {
        host: true,
    },
    base: './',
});

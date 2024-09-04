/* import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["@mdi/font/css/materialdesignicons.css"],
  build: {
    transpile: ["vuetify"],
  },
});
 */

import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
 build: {
   transpile: ["vuetify"],
 },

 modules: [
   (_options, nuxt) => {
     nuxt.hooks.hook("vite:extendConfig", (config) => {
       // @ts-expect-error
       config.plugins.push(vuetify({ autoImport: true }));
     });
   },
   //...
 ],

 vite: {
   vue: {
     template: {
       transformAssetUrls,
     },
   },
 },

 compatibilityDate: "2024-09-03",
});
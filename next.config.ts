// next.config.js
import lingoCompiler from "lingo.dev/compiler";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default lingoCompiler.next({
  sourceLocale: "en", // Your source language
  targetLocales: ["es", "ja","hi","ar","uz","te"], // ONLY 'es' and 'ja'
  models: {
    "*:*": "google:gemini-2.0-flash",
   },
})(nextConfig);

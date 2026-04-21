import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Use Open Sans as your primary sans-serif font
        sans: ['var(--font-open-sans)', 'ui-sans-serif', 'system-ui'],
        // Use Orkney for headings or specific brand elements
        display: ['orkney', 'var(--font-orkney)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
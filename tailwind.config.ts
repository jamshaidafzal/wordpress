import { Nunito } from "next/font/google";
import { title } from "process";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{html,js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'geometric': ['URW Geometric', 'sans-serif'], // Custom font family
      },
      fontWeight: {
        thin: '100',
        lightweight: '300',
        normal: '400',
        mediumweight: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        blackweight: '900',
      },
      spacing: {
        '79': '316.5px', // Add your custom value (e.g., 360px)
      },
    },
  },
  plugins: [],
} satisfies Config;

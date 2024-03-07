import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bar-gradient":
          "linear-gradient(to right, #098cab 10%, #0570dd 30%, #d65e89 60%);",
        "cloud-gradient":
          "linear-gradient(to bottom, #098cab 10%, #0570dd 30%, #d65e89 60%);",
      },
    },
  },
  plugins: [],
};
export default config;

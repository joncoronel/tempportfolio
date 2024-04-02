import { nextui } from "@nextui-org/theme";
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./node_modules/@nextui-org/theme/dist/components/(button|input|spinner).js",
  ],
  theme: {
    extend: {
      dropShadow: {
        "logo-glow": "0 0 8px hsl(var(--nextui-secondary-500))",
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(100% 100% at 50% 0%, var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        card: " 0 24px 48px #0000000d",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
        heading: "0 4px 1em var(--tw-shadow-color)",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fill, minmax(16rem, 1fr))",
      },
      fontFamily: {
        nunito: "var(--font-nunito), sans-serif",
        atkinson: "var(--font-atkinson), sans-serif",
      },
      colors: {
        // primary: "#bdd7e9",
        // "primary-content": "#2a5b7d",
        // "primary-dark": "#97c0dc",
        // "primary-light": "#e3eef6",
        // secondary: "#e9c0bd",
        // "secondary-content": "#7d2f2a",
        // "secondary-dark": "#dc9b97",
        // "secondary-light": "#f6e4e3",
        // background: "#111b22",
        // foreground: "#192934",
        // border: "#294456",
        // copy: "#fafbfd",
        // "copy-light": "#cbdbe6",
        // "copy-lighter": "#87abc5",
        // success: "#bde9bd",
        // warning: "#e9e9bd",
        // error: "#e9bdbd",
        // "success-content": "#2a7d2a",
        // "warning-content": "#7d7d2a",
        // "error-content": "#7d2a2a",
      },
      keyframes: {
        "pulse-button-pulse": {
          from: {
            boxShadow: "0 0 0 0 hsl(var(--nextui-secondary-500))",
          },
          to: {
            boxShadow: "0 0 .75rem .75rem transparent",
          },
        },
      },
      animation: {
        "pulse-button-pulse": "pulse-button-pulse .75s ease-out",
      },
    },
  },
  darkmode: "class",
  plugins: [
    nextui({
      layout: {},
      themes: {
        light: {
          colors: {
            background: "#FAFAFA",
            focus: "#1C4A5A",
            primary: {
              100: "#E7EFF5",
              200: "#D0DFEC",
              300: "#A4B5C6",
              400: "#6F7D8D",
              500: "#2F3742",
              600: "#222A38",
              700: "#171F2F",
              800: "#0E1526",
              900: "#090E1F",

              DEFAULT: "#2F3742",
              foreground: "#E7EFF5",
            },
            secondary: {
              100: "#F4FCFD",
              200: "#E9F8FC",
              300: "#DCF0F8",
              400: "#CFE5F1",
              500: "#BDD7E9",
              600: "#8AABC8",
              700: "#5F81A7",
              800: "#3C5B87",
              900: "#243F6F",
              DEFAULT: "#BDD7E9",
            },

            content1: {
              100: "#FDF8F2",
              200: "#FCF0E5",
              300: "#F7E3D5",
              400: "#F0D5C7",
              500: "#E7C0B2",
              600: "#C68F82",
              700: "#A66359",
              800: "#853D38",
              900: "#6E2223",
              DEFAULT: "#E7C0B2",
            },

            success: {
              100: "#EEFDE0",
              200: "#DAFBC2",
              300: "#BEF4A1",
              400: "#A1EA86",
              500: "#78DD5F",
              600: "#54BE45",
              700: "#359F2F",
              800: "#1E8020",
              900: "#126A1A",
              DEFAULT: "#78DD5F",
            },
            danger: {
              100: "#FFE8E2",
              200: "#FFCDC5",
              300: "#FFACA9",
              400: "#FF9399",
              500: "#FF7085",
              600: "#DB5172",
              700: "#B73862",
              800: "#932353",
              900: "#7A1549",
              DEFAULT: "#FF7085",
            },
            warning: {
              100: "#FFF9CC",
              200: "#FFF399",
              300: "#FFEA67",
              400: "#FFE241",
              500: "#FFD402",
              600: "#DBB201",
              700: "#B79201",
              800: "#937300",
              900: "#7A5D00",
              DEFAULT: "#FFD402",
            },
          },
        },
      },
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      );
    }),
    function ({ addUtilities }) {
      const newUtilities = {
        ".stabilize-animation": {
          transform: "translate3d(0, 0, 0) scale(1, 1)",
          willChange: "transform",
          backfaceVisibility: "hidden",
          // safari fix
          WebkitBackfaceVisibility: "hidden",
        },
        ".scale-card": {
          transform: "scale(1.02) translateZ(0)",
        },
        ".transition-hidenav": {
          transitionProperty: "transform",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          transitionDuration: "0.15s",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};

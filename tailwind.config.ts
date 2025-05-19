import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        blur: ['Blur', 'sans-serif'],
      },
      keyframes: {
        fall: {
          '0%': {
            transform: 'translateY(-200%) rotateX(0deg) scale(0.8)',
            opacity: '0',
          },
          '100%': {
            transform: 'rotateY(30deg) translateY(-50%)',
            opacity: '1',
          },
        },
      },
      animation: {
        fall: 'fall 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;

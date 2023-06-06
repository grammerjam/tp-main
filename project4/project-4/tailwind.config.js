/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
            colors: {
              "input-active": "hsl(249, 99%, 64%)",
              "input-error": "hsl(0, 100%, 66%)",
              "light-gray": "hsl(270, 3%, 87%)",
              "dark-gray": "hsl(279, 6%, 55%)",
              "dark-violet": "hsl(278, 68%, 11%)",
            },
            fontFamily: {
              "ff-space": '"Space Grotesk", "sans-serif"',
            },
            backgroundImage: {
              "mobile-header": "url('./images/bg-main-mobile.png')",
              "desktop-header": "url('./images/bg-main-desktop.png')",
              "front-card": "url('./images/bg-card-front.png')",
              "back-card": "url('./images/bg-card-back.png')",
            },
            screens: {
              dt: "800px",
            },
          },
  },
  plugins: [],
}


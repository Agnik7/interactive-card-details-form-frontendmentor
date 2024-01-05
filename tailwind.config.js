/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'sm': "640px",
      'xmd':"750px",
      'md': "768px",
      'lg': "1024px",
      'xl': "1180px",
      'xs':"460px",
      'xxs': "430px",
      'xxxs': "360px"
    },
    extend: {
      colors:{
        "light-violet": "hsl(270, 3%, 87%)",
        "dark-violet": "hsl(279, 6%, 55%)",
        "very-dark-violet": "hsl(278, 68%, 11%)",
        "error": "hsl(0, 100%, 66%)"
      },
      fontFamily:{
        "space": ["Space Grotesk", "sans-serif"],
      },
      backgroundImage:{
        "bg-main-desk": "url('/src/assets/images/bg-main-desktop.png')",
        "bg-main-mobile": "url('/src/assets/images/bg-main-mobile.png')",
        "card-front": "url('/src/assets/images/bg-card-front.png')",
        "card-back": "url('/src/assets/images/bg-card-back.png')"
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        '16': '4rem',
        "desk": "33.55% 100%",
        "mobile": "100% 15rem",
        "tablet": "100% 33.55%"
      }
    },
  },
  plugins: [],
}


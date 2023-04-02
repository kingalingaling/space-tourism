/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/*.{html,js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      'white': "hsl(0, 0%, 100%)",
      'grey': "hsl(0, 0%, 60%)",
      'black': "hsl(230, 35%, 7%)",
      'light-blue': "hsl(231, 77%, 90%)"
    },
    extend: {
      fontSize: {
        'head-1': "150px",
        'head-2': "100px",
        'head-3': "56px",
        'head-4': "32px",
        'head-5': "28px",
      },
      fontFamily: {
        'bellefair-regular': "Bellefair Regular",
        'barlow-condensed': "Barlow Condensed Regular",
      }
    },
    letterSpacing: {
      "slimer": '0.14em',
      "slim": '0.16em',
      widest: '0.29em',
    }
  },
  plugins: [],
}

// Typography
// --head-1: font-bellefair-regular, text-head-1, text-white
// --head-2: font-bellefair-regular, text-head-2, text-white
// --head-3: font-bellefair-regular, text-head-3, text-white
// --head-4: font-bellefair-regular, text-head-4, text-white
// --head-5: font-barlow-condensed, text-head-5, tracking-widest, text-light-blue
// --sub-head-1: font-bellefair-regular, text-head-5, text-white
// --sub-head-2: font-barlow-condensed, text-sm, tracking-slimmer, text-white
// --nav-text: font-barlow-condensed, text-base, tracking-slim, text-white
// --body-text: font-barlow-condensed, text-base, tracking-slim, text-white

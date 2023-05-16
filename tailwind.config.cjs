/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/**/*.{html,ts,tsx,js,jsx}",
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "414px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      '2xl': "1440px"
    },
    fontFamily: {
      'bellefair': ['"Bellefair"'],
      'barlow-condensed': ["Barlow Condensed"],
    },
    extend: {
      fontSize: {
        'head-1': "150px",
        'head-2': "100px",
        'head-3': "56px",
        'head-4': "32px",
        'head-5': "28px",
      },
      colors: {
        transparent: 'transparent',
        'white': "hsl(0, 0%, 100%)",
        'grey': "hsl(0, 0%, 60%)",
        'black': "hsl(230, 35%, 7%)",
        'light-blue': "hsl(231, 77%, 90%)"
      },
      
      backgroundImage: {
        'crew-lg': "url('/assets/images/crew-bg-lg.jpg')",
        'crew-md': "url('/assets/images/crew-bg-md.jpg')",
        'crew-sm': "url('/assets/images/crew-bg-sm.jpg')",
        'dest-lg': "url('/assets/images/destination-bg-lg.jpg')",
        'dest-md': "url('/assets/images/destination-bg-md.jpg')",
        'dest-sm': "url('/assets/images/destination-bg-lg.jpg')",
        'home-lg': "url('/assets/images/home-bg-lg.jpg')",
        'home-md': "url('/assets/images/home-bg-md.jpg')",
        'home-sm': "url('/assets/images/home-bg-sm.jpg')",
        'tech-lg': "url('/assets/images/technology-bg-lg.jpg')",
        'tech-md': "url('/assets/images/technology-bg-md.jpg')",
        'tech-sm': "url('/assets/images/technology-bg-sm.jpg')",
      }
    },
    letterSpacing: {
      "slimmer": '0.14em',
      "slim": '0.16em',
      widest: '0.29em',
    },
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

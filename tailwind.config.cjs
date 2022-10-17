/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'overpass': ['Overpass', 'sans-serif'],
        'ubuntu': ['Ubuntu', 'sans-serif']
      },
      colors:{
        'lightRed': 'hsl(356, 100%, 66%)',
        'veryLightRed': 'hsl(355, 100%, 74%)',
        'veryDarkBlue': 'hsl(208, 49%, 24%)',
        'grayishBlue': 'hsl(240, 2%, 79%)',
        'veryDarkGrayishBlue': 'hsl(207, 13%, 34%)',
        'veryDarkBlackBlue': 'hsl(240, 10%, 16%)',
        'bgVeryLightRed': 'hsl(13, 100%, 72%)',
        'bgLightRed': 'hsl(353, 100%, 62%)',
        'bgVeryDarkGrayBlue': 'hsl(237, 17%, 21%)',
        'bgVeryDarkSaturatedBlue': 'hsl(237, 23%, 32%)'
      },
      backgroundImage:{
        'intro-pattern': "url('./assets/images/bg-pattern-intro-desktop.svg')",
        'circles': "url('./assets/images/bg-pattern-circles.svg')",
      },
      backgroundPosition:{
        'pos-intro-mobile': '35% 40%',
        'pos-intro-desktop': '30% 50%'
      },
      backgroundSize:{
        'size-intro-mobile': '300%',
        'size-intro-desktop': '200%',
        'circle-size': '50%'
      }
    },
  },
  plugins: [],
}
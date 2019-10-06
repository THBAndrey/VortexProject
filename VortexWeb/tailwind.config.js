/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  important: true,
  theme: {
    // screens: {
    //   'sm': '576px',
    //   'md': '768px',
    //   'lg': '992px',
    //   'xl': '1200px',
    // },
    container: {
      center: true,
      padding: '2em',
    },
    extend: {
      colors: {
        primary: {
          '100': 'hsl(140, 69%, 95%)',
          '200': 'hsl(145, 69%, 87%)',
          '300': 'hsl(150, 69%, 75%)',
          '400': 'hsl(155, 69%, 60%)',
          '500': 'hsl(160, 69%, 45%)',
          '600': 'hsl(165, 69%, 35%)',
          '700': 'hsl(170, 69%, 27%)',
          '800': 'hsl(175, 69%, 22%)',
          '900': 'hsl(180, 69%, 15%)',
        },
        info: {
          '100': 'hsl(188, 78%, 95%)',
          '200': 'hsl(188, 78%, 87%)',
          '300': 'hsl(188, 78%, 75%)',
          '400': 'hsl(188, 78%, 60%)',
          '500': 'hsl(188, 78%, 41%)',
          '600': 'hsl(188, 78%, 35%)',
          '700': 'hsl(188, 78%, 27%)',
          '800': 'hsl(188, 78%, 22%)',
          '900': 'hsl(188, 78%, 15%)',
        },
        'creative-green': 'linear-gradient(0deg,#389466,#42b883)',
        'grown-early': 'linear-gradient(to top, #0ba360 0%, #3cba92 100%)',
        'aqua-splash': 'linear-gradient(15deg, #13547a 0%, #80d0c7 100%)',
        'over-sun': 'linear-gradient(60deg, #abecd6 0%, #fbed96 100%)',
        'eternal-constance': 'linear-gradient(to top, #09203f 0%, #537895 100%)',
        'vicious-stance': 'linear-gradient(60deg, #29323c 0%, #485563 100%)',
        'solid-stone': 'linear-gradient(to right, #243949 0%, #517fa4 100%)',
      }
    }
  },
  variants: ["responsive", "group-hover", "hover", "focus", "active"],
  // plugins: []
}

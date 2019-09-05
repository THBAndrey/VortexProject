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
      }
    }
  },
  variants: {},
  plugins: []
}

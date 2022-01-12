import plugin from 'tailwindcss/plugin'
import { extendedThemeColors, extractColorVars } from './utils/generators';

const paletteCssVariablesPlugin = plugin.withOptions(function (options) {
  return function({ addBase, theme }) {
    addBase({
      ':root': extractColorVars(theme('colors')),
    });
  }
}, function (options) {
  const colorsPalette = extendedThemeColors(options?.colors)

  return ({
    theme: {
      extend: {
        colors: {
          inherit: 'inherit',
          current: 'currentColor',
          transparent: 'transparent',
          black: '#000',
          white: '#fff',
          ...colorsPalette
        }
      }
    }
  });
})

export default paletteCssVariablesPlugin;

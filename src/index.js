import plugin from 'tailwindcss/plugin'
import { extendedThemeColors, extractColorVars } from './utils/generators';

const paletteCssVariablesPlugin = plugin.withOptions(
    function ({ colors, ejectDefaultThemeColors = true } = {}) {
        const colorsPalette = extendedThemeColors(colors);

        return function ({ addBase, theme }) {
            addBase({
                ':root': extractColorVars(ejectDefaultThemeColors ? theme('colors') : colorsPalette),
            });
        };
    },
    function ({ colors } = {}) {
        const colorsPalette = extendedThemeColors(colors);

        return {
            theme: {
                extend: {
                    colors: {
                        ...colorsPalette,
                    },
                },
            },
        };
    },
)

export default paletteCssVariablesPlugin;

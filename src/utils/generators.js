import { generatePalette } from './palette';
import { generateColorTokens } from './tokens';

const generateColor = (name, color) => {
  const palette = generatePalette(name, color)
  return generateColorTokens(palette.name, palette.colors)
}

export const extendedThemeColors = (colorsArray) => {
  const colorList = Object.keys(colorsArray).map(key => ({name : key, value:colorsArray[key]}))

  const colorPaletteList = {}

  colorList.forEach(color => {
    const colors = generateColor(color.name, color.value)
    colorPaletteList[colors.colorName] = colors.colorsObject
  })

  return colorPaletteList
}

export const extractColorVars = (colorObj, colorGroup = '') => {
  return Object.keys(colorObj).reduce((vars, colorKey) => {
    const value = colorObj[colorKey];

    const tokenString = colorKey === 'DEFAULT' ? { [`--color${colorGroup}`]: value } : { [`--color${colorGroup}-${colorKey}`]: value }

    const newVars =
      typeof value === 'string' ? tokenString : extractColorVars(value, `-${colorKey}`);

    return { ...vars, ...newVars };
  }, {});
}
export const generateColorTokens = (name, palette) => {
  const colors = {}

  Object.keys(palette).map((key) => {
    const hex = palette[key]
    const cssToken = key === 'DEFAULT' ? `--color-${name}`: `--color-${name}-${key}`

    colors[key] = `var(${cssToken}, ${hex})`
  });

  return {
      colorsObject: colors,
      colorName: name
    }
}
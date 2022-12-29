export const generateColorTokens = (name, palette) => {
  const colors = {}

  Object.keys(palette).map((key) => {
    const hex = palette[key]
    const cssToken = key === 'DEFAULT' ? `--color-${name}`: `--color-${name}-${key}`

    // colors[key] = `var(${cssToken}, ${hex})`; 
    // generated output: --color-primary: var(--color-primary, #xxxxxx); 
    // shouldn't be like that because you can't reusable these variables (e.g: backgroundColor: 'var(--color-primary)')
    
    colors[key] = `${hex}`; 
    // generated output: --color-primary: #xxxxxx; 
    // everything is ok
  });

  return {
      colorsObject: colors,
      colorName: name
    }
}

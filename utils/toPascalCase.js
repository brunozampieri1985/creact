const toPascalCase = (str) => {
    let firstStr = str.replace(/(\w)(\w*)/g, function (g0, g1, g2) {
    return g1.toUpperCase() + g2.toLowerCase()
  })
  return firstStr.replace('-','')
}

export default toPascalCase

import fse from 'fs-extra'

const extensions = {
  js: ['.jsx', '.test.jsx', '.module.css'],
  ts: ['.tsx', '.test.tsx', '.module.css'],
}

const createFiles = (isTs, component, hasCSS, hasTests) => {
  let choosenExtensions = isTs ? extensions.ts : extensions.js
  let error = []
  let result = true
 
  fse.outputFile(
    `${component}/${component}${choosenExtensions[0]}`,
    '', /// TODO: Add code snippets
    (err) => {
      error.push(err)
      result = false
    }
  )
  if (hasTests) {
    fse.outputFile(
      `${component}/${component}${choosenExtensions[1]}`,
      '', /// TODO: Add code snippets
      (err) => {
        error.push(err)
        result = false
      }
    )
  }
  if (hasCSS) {
    fse.outputFile(
      `${component}/${component}${choosenExtensions[2]}`,
      '',  /// TODO: Add code snippets
      (err) => {
        error.push(err)
        result = false
      }
    )
  }
  return { result, error }
}

export default createFiles

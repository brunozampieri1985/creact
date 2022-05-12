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
    `${component}/index${choosenExtensions[0]}`,
    `export { default } from './${component}'`,
    (err) => {
      error.push(err)
      result = false
    }
  )

  fse.outputFile(
    `${component}/${component}${choosenExtensions[0]}`, //react component file
    `const ${component}${choosenExtensions[0] === '.tsx' ? ':React.FC' : ''} = (props) => <></>
    export default ${component}`, /// TODO: Add code snippets
    (err) => {
      error.push(err)
      result = false
    }
  )
  if (hasTests) {
    fse.outputFile(
      `${component}/${component}${choosenExtensions[1]}`, //test file
      `import { screen, render } from '@testinglibrary/react'\nimport ${component} from './${component}'\ndescribe('${component}', () => test.todo('${component} Component'))`, /// TODO: Add code snippets
      (err) => {
        error.push(err)
        result = false
      }
    )
  }
  if (hasCSS) {
    fse.outputFile(
      `${component}/${component}${choosenExtensions[2]}`, //css file
      '', /// TODO: Add code snippets
      (err) => {
        error.push(err)
        result = false
      }
    )
  }
  return { result, error }
}

export default createFiles

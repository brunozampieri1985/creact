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
    `src/components/${component}/index${choosenExtensions[0].replace('x','')}`,
    `export { default } from './${component}'`,
    (err) => {
      error.push(err)
      result = false
    }
  )

  fse.outputFile(
    `src/components/${component}/${component}${choosenExtensions[0]}`, //react component file    
    `${hasCSS ? `import styles from './${component}.module.css'` : ''}\nconst ${component}${choosenExtensions[0] === '.tsx' ? ':React.FC' : ''} = (props) => <></>\nexport default ${component}`, /// TODO: Add code snippets
    (err) => {
      error.push(err)
      result = false
    }
  )
  if (hasTests) {
    fse.outputFile(
      `src/components/${component}/${component}${choosenExtensions[1]}`, //test file
      `import { screen, render } from '@testing-library/react'\nimport ${component} from './${component}'\ndescribe('${component}', () => test.todo('${component} Component'))`, /// TODO: Add code snippets
      (err) => {
        error.push(err)
        result = false
      }
    )
  }
  if (hasCSS) {
    fse.outputFile(
      `src/components/${component}/${component}${choosenExtensions[2]}`, //css file
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
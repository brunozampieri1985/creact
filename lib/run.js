import validate from './validate.js'
import showMessage from './showMessage.js'
import toPascalCase from '../utils/toPascalCase.js'
import createFiles from './createFiles.js'

const run = (params) => {
  const args = params.slice(2, params.lentgh) //remove unused info
  const { error } = validate(args)
  if (error) {
    showMessage.error(error)
    return
  }
  var isTS = args[0] === '-ts'
  var hasCSS = !args.includes('-nocss')
  var hasTests = !args.includes('-notests')
  var component = toPascalCase(args[1])
  
  const { result, error: err } = createFiles(isTS, component, hasCSS, hasTests)
  if (result) {
      showMessage.success('Component files successfully created')
  } else {
      err.map(e => showMessage.error(e))
  }
}

export default run

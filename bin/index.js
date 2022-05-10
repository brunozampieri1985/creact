#! /usr/bin/env node

import fs from "fs"

const [node, path, ...args] = process.argv;
if (args.length < 1) {
  console.log(
    "\nUsage: creact <-js|-ts> <ComponentName> <options: -nocss/-notests>\n"
  )
}

const isTs = args[0] === "-ts"
const isJs = args[0] === "-js"
const extensions = {
  js: ['.jsx', '.test.jsx', '.module.css'],
  ts: ['.tsx', '.test.tsx', '.module.css']
}

const hasComponent = () => {
  try {
    let component = args[1]
    if (component.split("")[0] === "-") {
      return false
    }
    if (component.split("").length < 3) {
      return false
    }
    return component
  } catch (error) {
    return false
  }
}

const isNoCss = args[2] === "-nocss" || args[3] === "-nocss"
const isNoTests = args[2] === "-notests" || args[3] === "-notests"

const validateArgs = () => {
  if (!isJs && !isTs) {
    return { status: false, error: "First argument has to be -js | -ts" }
  }
  if (!hasComponent()) {
    return { status: false, error: "You need to provide a Component Name" }
  }
  return { status: true, error: ''}
}

const createFile = async (component, extension) => {
  fs.appendFile()
}

const run = () => {
  const validate = validateArgs()
  if (!validate.status) {
    console.error(validate.error)
    return
  }
  if (isTs) {
    extensions.ts.map(async (extension) => {
      if (extension === '.jsx') { await createFile(hasComponent(), extension) }
      else {
        if (extension === '.test.jsx' && isNoTests) return
        else { await createFile(hasComponent(), component)}
      }

    })
  }
    
  
}

run()
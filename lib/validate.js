const validate = (args) => {
  if (args[0] !== '-js' && args[0] !== '-ts') {
    if (args[0] === '-help' || args[0] === '-h') {
      return {
        error:
          '\nUsage: creact <-js|-ts> <ComponentName> <options: -nocss/-notests>\n',
      }
    }
    return {
      error:
        '\nError: Invalid parameter.\nUsage: creact <-js|-ts> <ComponentName> <options: -nocss/-notests>\n',
    }
  }
  if (args[1].split('')[0] === '-') {
    return {
      isValid: false,
      error:
        '\nError: Invalid component name.\nUsage: creact <-js|-ts> <ComponentName> <options: -nocss/-notests>\n',
    }
  }
  if (args[1].length < 3) {
    return {
      error:
        '\nError: Component name should have at least 3 characters.\nUsage: creact <-js|-ts> <ComponentName> <options: -nocss/-notests>\n',
    }
  }

  return { error: false }
}

export default validate

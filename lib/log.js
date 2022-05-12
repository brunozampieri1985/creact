const log = {
    error: (message) => console.error('\x1b[31m', message, '\x1b[0m'),
    info: (message) => console.log(message),
    success: (message) => console.log('\x1b[32m', message, '\x1b[0m')
}

export default log
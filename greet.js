function greet(name) {
  if(name === '' || name === null || name === undefined) {
    return 'Hello, my friend.'
  }
  return `Hello, ${name}.`
}

function isUpper(str) {
  return !/[a-z]/.test(str) && /[A-Z]/.test(str);
}
module.exports = greet;
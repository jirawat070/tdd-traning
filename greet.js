function greet(name) {
  if(name === '' || name === null || name === undefined) {
    return 'Hello, my friend.'
  }  
  if (isUpper(name)) {
    return `HELLO, ${name}!`
  }
  return `Hello, ${name}.`
}

function isUpper(str) {
  return !/[a-z]/.test(str) && /[A-Z]/.test(str);
}
module.exports = greet;
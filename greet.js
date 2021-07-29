function greet(name) {
  if(name === '' || name === null || name === undefined) {
    return 'Hello, my friend.'
  }  
  if (isUpper(name)) {
    return `HELLO, ${name}!`
  }
  if (Array.isArray(name)) {
    return `Hello, ${name[0]} and ${name[1]}`
  }
  return `Hello, ${name}.`
}

function isUpper(str) {
  return !/[a-z]/.test(str) && /[A-Z]/.test(str);
}
module.exports = greet;
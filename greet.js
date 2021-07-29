function greet(name) {
  if (name === '' || name === null || name === undefined || name.length == 0) {
    return 'Hello, my friend.'
  }  
  if (isUpper(name)) {
    return `HELLO, ${name}!`
  }
  if (Array.isArray(name)) {
    let fullText = 'Hello';
    for (var i = 0; i < name.length; i++) {
      if (i === name.length - 1) {
      fullText = fullText + ' and ' + name[i]
      } else {
      fullText = fullText + ', ' + name[i]
      }
    }
    return fullText;
  }
  return `Hello, ${name}.`
}

function isUpper(str) {
  return !/[a-z]/.test(str) && /[A-Z]/.test(str);
}
module.exports = greet;
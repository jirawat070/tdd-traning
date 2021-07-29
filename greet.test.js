const greet = require('./greet');

test('given "Bob" want "Hello, Bob."', () => {
  const given = 'Bob';
  const want = 'Hello, Bob.'; // Arrange
  
  const got = greet(given); // Act
  
  expect(got).toBe(want); // Assert
})

test('given "Pao" want "Hello, Pao."', () => {
  const given = 'Pao'
  const want = 'Hello, Pao.' // Arrange

  const got = greet(given) // Act

  expect(got).toBe(want) // Assert
})

test('given empty string want "Hello, my friend."', () => {
  const given = '';
  const want = 'Hello, my friend.'

  const got = greet(given)

  expect(got).toBe(want)
})

test('given null want "Hello, my friend."', () => {
  const given = null
  const want = 'Hello, my friend.'

  const got = greet(given)

  expect(got).toBe(want)
})

test('given undefined want "Hello, my friend."', () => {
  const given = undefined
  const want = 'Hello, my friend.'

  const got = greet(given)

  expect(got).toBe(want)
})
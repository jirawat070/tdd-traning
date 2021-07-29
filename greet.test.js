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
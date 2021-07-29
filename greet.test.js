const greet = require('./greet');

test('given "Bob" want "Hello, Bob."', () => {
  const given = 'Bob';
  const want = 'Hello, Bob.'; // Arrange
  
  const got = greet(given); // Act
  
  expect(got).toBe(want); // Assert
})
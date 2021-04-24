import lifeScale from '../app';

test('should culculate level life of character', () => {
  const result = lifeScale({ name: 'Маг', health: 90 });

  expect(result).toBe('healthy');
});

test('should culculate level life of character', () => {
  const result = lifeScale({ name: 'Маг', health: 50 });

  expect(result).toBe('wounded');
});

test('should culculate level life of character', () => {
  const result = lifeScale({ name: 'Маг', health: 30 });

  expect(result).toBe('wounded');
});

test('should culculate level life of character', () => {
  const result = lifeScale({ name: 'Маг', health: 15 });

  expect(result).toBe('wounded');
});

test('should culculate level life of character', () => {
  const result = lifeScale({ name: 'Маг', health: 10 });

  expect(result).toBe('critical');
});

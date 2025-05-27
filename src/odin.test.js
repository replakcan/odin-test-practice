const testSubjects = require('./test-subjects')

test('adds 1 + 2 to equal 3', () => {
  expect(testSubjects.sum(1, 2)).toBe(3)
})

test('object assignment', () => {
  const data = { one: 1 }
  data['two'] = 2
  expect(data).toEqual({ one: 1, two: 2 })
})

test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0)
    }
  }
})

test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

test('zero', () => {
  const z = 0
  expect(z).not.toBeNull()
  expect(z).toBeDefined()
  expect(z).not.toBeUndefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
})

test('adding floating point numbers', () => {
  const value = 0.1 + 0.2
  // expect(value).toBe(0.3)
  expect(value).toBeCloseTo(0.3)
})

test('there is no I in team', () => {
  expect('team').not.toMatch(/I/)
})

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/)
})

test('the shopping list has milk on it', () => {
  expect(testSubjects.shoppingList).toContain('milk')
  expect(new Set(testSubjects.shoppingList)).toContain('milk')
})

test('capitalize function capitalizes the word given', () => {
  expect(testSubjects.capitalize('alperovski')).toBe('Alperovski')
})

test('reverses the given input string', () => {
  expect(testSubjects.reverseString('alper')).toBe('repla')
})

test('calculator does basic math operations correctly', () => {
  expect(testSubjects.calculator.add(1, 2)).toBe(3)
  expect(testSubjects.calculator.subtract(1, 2)).toBe(-1)
  expect(testSubjects.calculator.divide(1, 2)).toBeCloseTo(0.5)
  expect(testSubjects.calculator.multiply(1, 2)).toBe(2)
})

test('ceaserCipher ciphers the word given according to shift factor', () => {
  expect(testSubjects.ceaserCipher('hello world', 3)).toBe('khoor zruog')
  expect(testSubjects.ceaserCipher('selam canim ben amcanim', 3)).toBe('vhodp fdqlp ehq dpfdqlp')
  expect(testSubjects.ceaserCipher('bir gun herkes on bes dakikaligina meshur olacak', 3)).toBe(
    'elu jxq khunhv rq ehv gdnlndoljlqd phvkxu rodfdn'
  )
  expect(testSubjects.ceaserCipher('ABCdefghijklmnopqrstuvwxyz', 3)).toBe('DEFghijklmnopqrstuvwxyzabc')
})

test('analyzeArray', () => {
  const object = testSubjects.analyzeArray([1, 8, 3, 4, 2, 6])

  expect(object).toEqual({ average: 4, min: 1, max: 8, length: 6 })
})

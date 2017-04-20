/*
Put on top of the file before describe statements
Usage:
expect(fn).toBeFunction()
*/
beforeAll(function () {
  jasmine.addMatchers({
    toBeFunction: function () {
      return {
        compare: function (actual) {
          return {
            pass: typeof actual === 'function'
          };
        }
      };
    }
  });
});

describe('mixStrings', function () {
  it('should be the name of a function', function () {
    expect(mixStrings).toBeFunction();
    // Alternative to the toBeFunction matcher
    // expect(typeof mixStrings).toBe('function');
  });

  it('should take 2 arguments',
    function () {
      expect(mixStrings).toThrowError(ArgumentError, 'Expected two arguments');
      expect(function () {
        mixStrings('str1');
      }).toThrowError(ArgumentError, 'Expected two arguments');
    });

  it('when given 2 strings of same length, should mix them and return the ' +
    'mixed string',
    function () {
      expect(mixStrings('foo', 'bar')).toBe('fboaor');
      expect(mixStrings('f', 'b')).toBe('fb');
      expect(mixStrings('d!g4S', 'F4ms5')).toBe('dF!4gm4sS5');
    });

  // TODO: Is nesting worth it in this case?
  it('should handle cases where one or both arguments, are "", null or undefined',
    function () {
      // First string empty "" or null or undefined and second string non-empty.
      // It should return the second string.
      expect(mixStrings('', 'b')).toBe('b');
      expect(mixStrings(null, 'f')).toBe('f');
      expect(mixStrings(undefined, 'bar')).toBe('bar');
      // First string is non-empty and second string is empty "" or null or
      // undefined. It should return the first string.
      expect(mixStrings('bar', '')).toBe('bar');
      expect(mixStrings('f', null)).toBe('f');
      expect(mixStrings('b', undefined)).toBe('b');
      // When both strings are empty "" or null or undefined it should return
      // an empty string "".
      expect(mixStrings('', undefined)).toBe('');
      expect(mixStrings(null, '')).toBe('');
    });
});

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
  it('should be a function', function () {
    expect(mixStrings).toBeFunction();
    // expect(typeof mixStrings).toBe('function');
  });

  it('should take two string arguments', function () {
    expect(mixStrings).toThrowError(ArgumentError);
    expect(function () {
      mixStrings('str1');
    }).toThrowError(ArgumentError);
    expect(function () {
      mixStrings(1, 'str2');
    }).toThrowError(ArgumentError);
    expect(function () {
      mixStrings('str1', 2);
    }).toThrowError(ArgumentError);
  });
});

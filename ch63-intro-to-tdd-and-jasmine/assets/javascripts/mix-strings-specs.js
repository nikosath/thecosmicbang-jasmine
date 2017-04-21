var expectations = [
  {str1: 'foo', str2: 'bar', result: 'fboaor'},
  {str1: 'foo', str2: '', result: 'foo'},
  {str1: 'foo', str2: null, result: 'foo'},
  {str1: 'foo', str2: undefined, result: 'foo'},
  {str1: 'f', str2: 'b', result: 'fb'},
  {str1: 'f', str2: '', result: 'f'},
  {str1: 'f', str2: null, result: 'f'},
  {str1: 'f', str2: undefined, result: 'f'},
  {str1: '', str2: 'bar', result: 'bar'},
  {str1: '', str2: '', result: ''},
  {str1: '', str2: null, result: ''},
  {str1: '', str2: undefined, result: ''},
  {str1: null, str2: 'bar', result: 'bar'},
  {str1: null, str2: '', result: ''},
  {str1: null, str2: null, result: ''},
  {str1: null, str2: undefined, result: ''},
  {str1: undefined, str2: 'bar', result: 'bar'},
  {str1: undefined, str2: '', result: ''},
  {str1: undefined, str2: null, result: ''},
  {str1: undefined, str2: undefined, result: ''}
];

function quote(str) {
  return (typeof str === 'string') ? ("'" + str + "'") : str;
}
function createSpec(expectation) {
  var e = expectation;
  describe("when first string is " + quote(e.str1), function () {
    describe("and second string is " + quote(e.str2), function () {
      it('returns ' + quote(e.result), function () {
        expect(mixStrings(e.str1, e.str2)).toBe(e.result);
      });
    });
  });
}

describe("Testing 'mixStrings'", function () {
  expectations.forEach(function (expectation) {
    createSpec(expectation);
  });
});

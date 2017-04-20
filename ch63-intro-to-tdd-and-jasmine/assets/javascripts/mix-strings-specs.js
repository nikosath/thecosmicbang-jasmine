// var str1Mapping = {
//   'abc': {
//     'klm': 'akblcm',
//     '': 'abc',
//     null: 'abc',
//     undefined: 'abc'
//   },
//   '': {
//     'klm': 'klm',
//     '': '',
//     null: '',
//     undefined: ''
//   },
//   undefined: {
//     'klm': 'klm',
//     '': '',
//     null: '',
//     undefined: ''
//   },
//   null: {
//     'klm': 'klm',
//     '': '',
//     null: '',
//     undefined: ''
//   }
// };

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

// function prepareExpectations(str1Mapping) {
//   var expectations = [];
//   for (var str1 in str1Mapping) {
//     var str2Mapping = str1Mapping[str1];
//     for (var str2 in str2Mapping) {
//       var result = str2Mapping[str2];
//       expectations.push({
//         'str1': str1,
//         'str2': str2,
//         'result': result
//       });
//     }
//   }
//   return expectations;
// }

function print(str) {
  return (str === '') ? "''" : str;
}
function createSpec(expectation) {
  var e = expectation;
  describe("when first string is " + print(e.str1), function () {
    describe("and second string is " + print(e.str2), function () {
      it('returns ' + print(e.result), function () {
        expect(mixStrings(e.str1, e.str2)).toBe(e.result);
      });
    });
  });
}

describe("Testing 'mixStrings'", function () {
  // var expectations = prepareExpectations(str1Mapping);
  expectations.forEach(function (expectation) {
    createSpec(expectation);
  });
});

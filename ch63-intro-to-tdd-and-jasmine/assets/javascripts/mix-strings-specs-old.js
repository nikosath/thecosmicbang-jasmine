var str1Mapping = {
  'abc': {
    'klm': 'akblcm',
    '': 'abc',
    null: 'abc',
    undefined: 'abc'
  },
  '': {
    'klm': 'klm',
    '': '',
    null: '',
    undefined: ''
  }
};

function prepareExpectations(str1Mapping) {
  var expectations = [];
  for (var str1 in str1Mapping) {
    var str2Mapping = str1Mapping[str1];
    for (var str2 in str2Mapping) {
      var result = str2Mapping[str2];
      expectations.push({
        'str1': str1,
        'str2': str2,
        'result': result
      });
    }
  }
  return expectations;
}


function createSpec(exp) {
  describe("when first string is " + exp.str1, function () {
    describe("and second string is " + exp.str2, function () {
      it('returns ' + exp.result, function () {
        expect(mixStrings(exp.str1, exp.str2)).toBe(exp.result);
      });
    });
  });
}

describe("Testing 'mixStrings'", function () {
  var expectations = prepareExpectations(str1Mapping);
  expectations.forEach(function (exp) {
    createSpec(exp);
  });
});


//
// var str1MapStr2 = [
//   {'str1': 'abc', 'str2': [{'klm': }]}
// ];

//   function f2() {
// describe("when first string is" + str1, f2(str2))
//     describe("and second string is 'klm'", function () {
//       it("returns 'akblcm'", function () {
//         expect(mixStrings('abc', 'klm').toBe('akblcm'));
//       });
//     });
//   }
//
describe("Testing 'mixStrings'", function () {

  function f2() {
    describe("when first string is" + str1, function () {
      function f3() {
        expect(mixStrings(str1, str2)).toBe(result);
      }
      for (var str2 in str2MapResult) {
        var result = str2MapResult[str2];
        describe("and second string is " + str2, it('returns' + result, f3));
        // if (str2MapResult.hasOwnProperty(str2)) {

        // }
      }

      // describe("and second string is" + str2, function () {
      // it('returns' +, function (done) {
      //
      // });
      // });
    });

  }

  for (var str1 in str1MapStr2) {
    // if (str1MapStr2.hasOwnProperty(str1)) {
    var str2MapResult = str1MapStr2[str1];
    f2();
    // }
  }
  // describe("when first string is ''", function () {

});
// });

function isNonEmptyString(s) {
  if (typeof s !== 'string' || s === '') {
    return false;
  } else {
    return true;
  }
}

function mixStrings(s1, s2) {
  var result = '';
  var isS1NonEmptyString = isNonEmptyString(s1);
  var isS2NonEmptyString = isNonEmptyString(s2);
  if (isS1NonEmptyString && isS2NonEmptyString) {
    // Assuming they have the same length
    for (var i = 0; i < s1.length; i++) {
      result += s1[i] + s2[i];
    }
  } else if (isS1NonEmptyString) {
    result = s1;
  } else if (isS2NonEmptyString) {
    result = s2;
  } // else, in case both conditions are false, `result` stays ''

  return result;
}

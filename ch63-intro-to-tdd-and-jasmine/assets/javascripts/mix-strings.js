function isValidString(s) {
  if (typeof s !== 'string' || s === '') {
    return false;
  } else {
    return true;
  }
}

function mixStrings(s1, s2) {
  var result = '';
  var isS1Valid = isValidString(s1);
  var isS2Valid = isValidString(s2);
  if (isS1Valid && isS2Valid) {
    // Assuming they have the same length
    for (var i = 0; i < s1.length; i++) {
      result += s1[i] + s2[i];
    }
  } else if (isS1Valid) {
    result = s1;
  } else if (isS2Valid) {
    result = s2;
  } // else, in case both conditions are false, `result` stays ''

  return result;
}

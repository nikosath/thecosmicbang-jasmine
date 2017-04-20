function ArgumentError(message) {
  this.name = 'ArgumentError';
  this.message = (message !== undefined) ? message : 'Argument Error';
  this.stack = (new Error()).stack;
}
ArgumentError.prototype = Object.create(Error.prototype);
ArgumentError.prototype.constructor = ArgumentError;

function isNonEmptyString(s) {
  if (typeof s !== 'string' || s === '') {
    return false;
  } else {
    return true;
  }
}

function mixStrings(s1, s2) {
  if (arguments.length < 2) {
    throw new ArgumentError('Expected two arguments');
  }

  var result = '';
  if (isNonEmptyString(s1) && isNonEmptyString(s2)) {
    // Assuming they have the same length
    for (var i = 0; i < s1.length; i++) {
      result += s1[i] + s2[i];
    }
  } else if (isNonEmptyString(s1)) {
    result = s1;
  } else if (isNonEmptyString(s2)) {
    result = s2;
  }

  return result;
}

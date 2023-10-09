function checkStringLength(str, maxLength) {
  return str?.length <= maxLength;
}

checkStringLength('', 0);
checkStringLength('abc', 5);
checkStringLength('12345', 5);
checkStringLength('abcdef', 3);
checkStringLength(null, 6);
checkStringLength(NaN, 100);
checkStringLength(undefined, 2);

function isPalindrome(str) {
  const normalizedStr = str.replace(/\s/g, '').toLowerCase();
  let reversedStr = '';

  for (let i = normalizedStr.length - 1; i >= 0; i--) {
    reversedStr += normalizedStr.charAt(i);
  }

  return normalizedStr === reversedStr;
}

isPalindrome('топот');
isPalindrome('ДовОд');
isPalindrome('Кекс');
isPalindrome('Лёша на полке клопа нашёл ');

function extractNumbers(input) {
  const inputStr = input.toString();
  let numbersStr = '';

  for (let i = 0; i < inputStr.length; i++) {
    if (!isNaN(parseInt(inputStr[i], 10))) {
      numbersStr += inputStr[i];
    }
  }

  if (numbersStr.length > 0) {
    return parseInt(numbersStr, 10);
  } else {
    return NaN;
  }
}

extractNumbers('2023 год');
extractNumbers('ECMAScript 2022');
extractNumbers('1 кефир, 0.5 батона');
extractNumbers('агент 007');
extractNumbers('а я томат');
extractNumbers(2023);
extractNumbers(-1);
extractNumbers(1.5);

function isStringFitsLength(str, maxLength) {
  return str?.length <= maxLength;
}

isStringFitsLength('', 0);
isStringFitsLength('abc', 5);
isStringFitsLength('12345', 5);
isStringFitsLength('abcdef', 3);
isStringFitsLength(null, 6);
isStringFitsLength(NaN, 100);
isStringFitsLength(undefined, 2);

function isPalindrome(input) {
  const normalizedInput = String(input).replace(/\s/g, '').toLowerCase();
  const reversedInput = normalizedInput.split('').reverse().join('');
  return normalizedInput === reversedInput;
}

isPalindrome('топот');
isPalindrome('ДовОд');
isPalindrome('Кекс');
isPalindrome('Лёша на полке клопа нашёл ');
isPalindrome(12321);


function parseDigits(input) {
  const inputAsString = String(input);
  const digitsOnly = inputAsString.replace(/\D/g, '');
  return digitsOnly.length > 0 ? Number(digitsOnly) : NaN;
}

parseDigits('2023 год');
parseDigits('ECMAScript 2022');
parseDigits('1 кефир, 0.5 батона');
parseDigits('агент 007');
parseDigits('а я томат');
parseDigits(2023);
parseDigits(-1);
parseDigits(1.5);

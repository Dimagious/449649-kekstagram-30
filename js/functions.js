function isStringFitsLength(str, maxLength) {
  return str?.length <= maxLength;
}

function isPalindrome(input) {
  const normalizedInput = String(input).replace(/\s/g, '').toLowerCase();
  const reversedInput = normalizedInput.split('').reverse().join('');
  return normalizedInput === reversedInput;
}

function parseDigits(input) {
  const inputAsString = String(input);
  const digitsOnly = inputAsString.replace(/\D/g, '');
  return digitsOnly.length > 0 ? Number(digitsOnly) : NaN;
}

function parseTimeStringToMinutes(timeString) {
  const [hours, minutes] = timeString.split(':').map(Number);
  return hours * 60 + minutes;
}

function isMeetingWithinWorkingHours(startOfWorkday, endOfWorkday, meetingStartTime, meetingDuration) {
  const workdayStartMinutes = parseTimeStringToMinutes(startOfWorkday);
  const workdayEndMinutes = parseTimeStringToMinutes(endOfWorkday);
  const meetingStartMinutes = parseTimeStringToMinutes(meetingStartTime);
  const meetingEndMinutes = meetingStartMinutes + meetingDuration;
  return (meetingStartMinutes >= workdayStartMinutes && meetingEndMinutes <= workdayEndMinutes);
}

void (isStringFitsLength, isPalindrome, parseDigits, isMeetingWithinWorkingHours);

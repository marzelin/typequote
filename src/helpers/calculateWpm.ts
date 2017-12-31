/**
 * calculates typing speed in words per minute
 * @param startTime when the typing started
 * @param typedCharsCount number of chars correctly typed
 * @returns typing speed in words per minute
 */
export function calculateWpm(startTime: number, typedCharsCount: number) {
  const typingTimeInMins = (Date.now() - startTime) / millisecsInMin;
  const wpm = Math.floor(typedCharsCount / typingTimeInMins / charsInWord);

  return wpm;
}

const millisecsInMin = 60000; // 1000 milli * 60 secs
const charsInWord = 5;

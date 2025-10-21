const vulnerableRegexString: string = "^(\\w+\\s?)*$";
const vulnerableRegex: RegExp = new RegExp(vulnerableRegexString);

const safeInput: string = "word one two three";
const badInput: string = "a".repeat(30) + "!";

const startTime = performance.now();
const result = vulnerableRegex.test(badInput);
const endTime = performance.now();

const startTimeSafe = performance.now();
const resultSafe = vulnerableRegex.test(safeInput);
const endTimeSafe = performance.now();

console.log(`Match Result: ${result}`);
console.log(`Execution Time: ${(endTime - startTime).toFixed(2)} ms`);

console.log(`Match Result: ${resultSafe}`);
console.log(`Execution Time: ${(endTimeSafe - startTimeSafe).toFixed(2)} ms`);
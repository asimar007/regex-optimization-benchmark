// Input: A long string of repeated "ab"
const input = "ab".repeat(25); // Example: "abababababababababababababababab"

// Inefficient Solution
const inefficientRegex = /^(ab|a|b)*$/;
console.time("Inefficient Solution");
const inefficientResult = inefficientRegex.test(input);
console.timeEnd("Inefficient Solution");
console.log("Inefficient Solution Result:", inefficientResult);

// Optimized Solution
const optimizedRegex = /^(ab)+$/;
console.time("Optimized Solution");
const optimizedResult = optimizedRegex.test(input);
console.timeEnd("Optimized Solution");
console.log("Optimized Solution Result:", optimizedResult);

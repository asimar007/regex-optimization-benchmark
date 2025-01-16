# Regex Performance Comparison

The performance differences between an **inefficient regex** and an **optimized regex** when matching repeated patterns in strings. It includes a detailed explanation of the regex patterns, their time complexities, and example code to benchmark their performance.

---

## Problem Statement
When using regular expressions, certain patterns can lead to significant performance bottlenecks due to excessive backtracking. This repository highlights the difference between:

1. **Inefficient Regex:** `/^(ab|a|b)*$/`
   - Matches all combinations of `"ab"`, `"a"`, and `"b"`.
   - Leads to exponential time complexity (O(2ⁿ)) due to backtracking.

2. **Optimized Regex:** `/^(ab)+$/`
   - Matches one or more occurrences of the pair `"ab"` directly.
   - Achieves linear time complexity (O(n)).

---
## Screenshot of Execution 
Here is a screenshot showing the execution time comparison between the inefficient and optimized regex:
![Execution Screenshot](https://github.com/asimar007/Cross-Region-Migration-of-AWS-EBS-Volumes/blob/main/Screenshot/Regex.png?raw=true)

---
## Code Example
The following example benchmarks the performance of both regex patterns using a string of repeated `"ab"` patterns.

```javascript
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
```

---

## Time Complexity
### 1. Inefficient Regex
- **Pattern**: `/^(ab|a|b)*$/`
- **Time Complexity**: **O(2ⁿ)** (Exponential)
- **Reason**: Explores all possible combinations of `"ab"`, `"a"`, and `"b"`, leading to excessive backtracking.

### 2. Optimized Regex
- **Pattern**: `/^(ab)+$/`
- **Time Complexity**: **O(n)** (Linear)
- **Reason**: Directly matches consecutive `"ab"` pairs without unnecessary backtracking.

---

## Key Takeaways
- **Avoid overly flexible patterns** that allow multiple matching possibilities (e.g., using `|` or overlapping groups) to prevent exponential backtracking.
- Use **specific and direct patterns** to achieve better performance.
- Benchmark regex patterns with tools like `console.time` to identify potential bottlenecks.

---

## How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/asimar007/regex-optimization-benchmark
   cd regex-performance-comparison
   ```

2. Run the script:
   ```bash
   node regex-benchmark.js
   ```

---

## Results
For a string of length 50 (`"abababab..."`):

| Regex Type      | Time Complexity | Execution Time Example |
|------------------|-----------------|------------------------|
| **Inefficient** | O(2ⁿ)           | ~200ms                 |
| **Optimized**   | O(n)            | ~0.2ms                 |

---

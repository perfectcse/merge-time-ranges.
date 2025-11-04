const { mergeTimeRanges } = require('./my-module');
console.log("✅ Test file is running");
// Example 1
const ranges1 = [
  [1000, 2000],
  [2500, 4000],
  [3900, 4100],
  [8000, 9000],
  [9050, 9500]
];
console.log('Example 1 Output:', mergeTimeRanges(ranges1, 200));

// Example 2
const ranges2 = [
  [0, 10],
  [15, 20],
  [25, 30]
];
console.log('Example 2 Output:', mergeTimeRanges(ranges2, 4));

// Example 3
const ranges3 = [
  [0, 10],
  [12, 15],
  [17, 25],
  [27, 35]
];
console.log('Example 3 Output:', mergeTimeRanges(ranges3, 3));

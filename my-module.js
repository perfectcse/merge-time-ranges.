/**
 * Merges discontinuous time ranges within a given threshold.
 * 
 * @param {Array<[number, number]>} ranges - Array of [start, end) ranges (unsorted, may overlap)
 * @param {number} threshold - Max gap (in ms) allowed between ranges to still be merged
 * @returns {Array<[number, number]>} - Sorted, non-overlapping merged ranges
 */

const mergeTimeRanges = (ranges, threshold) => {
  if (!ranges || ranges.length === 0) return [];

  // Step 1: Sort by start time
  ranges.sort((a, b) => a[0] - b[0]);

  const merged = [];
  let current = ranges[0];

  for (let i = 1; i < ranges.length; i++) {
    const next = ranges[i];

    // Gap between current.end and next.start
    const gap = next[0] - current[1];

    // If ranges overlap or gap <= threshold → merge
    if (gap <= threshold) {
      current[1] = Math.max(current[1], next[1]);
    } else {
      // Otherwise push current and move on
      merged.push(current);
      current = next;
    }
  }

  // Push the last one
  merged.push(current);

  return merged;
}

module.exports = {
  mergeTimeRanges
}

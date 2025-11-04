 Merge Time Ranges (Node.js Module)

A clean, modular Node.js solution that merges overlapping or nearly continuous time ranges within a given threshold (in milliseconds).

Problem Source: SDE Assignment – November 2025
Tech: JavaScript (Node.js)
Concepts Used: Sorting, Iteration, Conditional Logic, Array Manipulation

Problem Description

You are given an array of time ranges [start, end) representing when a system was active.

Each range includes start and excludes end.

Ranges may overlap, touch, or have small gaps.

Gaps smaller than a given threshold (in ms) are treated as continuous and merged.

Your task is to merge these time ranges into non-overlapping, sorted intervals.

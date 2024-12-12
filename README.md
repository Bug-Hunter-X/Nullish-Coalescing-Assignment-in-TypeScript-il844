# Nullish Coalescing Assignment in TypeScript

This repository demonstrates a common error in TypeScript related to handling null or undefined values.  The `printName` function attempts to call `toUpperCase()` on a potentially null value, resulting in a runtime error.  The solution shows how to use optional chaining and nullish coalescing to avoid this error.

## Bug
The `bug.ts` file contains a function that attempts to convert a potentially null string to uppercase. This will cause a runtime error if the input is null.

## Solution
The `bugSolution.ts` file demonstrates a solution using optional chaining and nullish coalescing to safely handle null values. This prevents the runtime error and provides a more robust solution.
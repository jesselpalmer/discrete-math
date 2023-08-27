[![npm](https://img.shields.io/npm/dw/discrete-math.svg)](https://www.npmjs.com/package/discrete-math) [![Node.js CI](https://github.com/jesselpalmer/discrete-math/actions/workflows/node.js.yml/badge.svg)](https://github.com/jesselpalmer/discrete-math/actions/workflows/node.js.yml)

# discrete-math

A JavaScript library focused on providing functions and utilities for discrete mathematics operations.

## Installation

To install discrete-math, use npm:

```bash
npm install discrete-math
```

## Usage

```bash
import { difference } from 'discrete-math/set';
```

### Set

This module provides functions for set operations.

### difference(setA, setB)

Returns the difference between two sets or arrays. The difference is the set of elements that belong to setA but not to setB.

**Parameters**:

- **setA (Set|Array)**: The first set or array.
- **setB (Set|Array)**: The second set or array, from which elements will be subtracted.

**Return**: A new set containing elements that are in 'setA' but not in 'setB'.

**Example**:

```javascript
const setA = [1, 2, 3];
const setB = [1, 3];

console.log(difference(setA, setB)); // Outputs: Set { 2 }
```

## Contribute

Contributions are always welcome! Please ensure that you adhere to the established coding standards and provide tests for any new or changed functionality.

If you find any bugs or have a feature request, please open an issue on [GitHub](https://github.com/jesselpalmer/discrete-math).

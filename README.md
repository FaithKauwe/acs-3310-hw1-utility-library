# Array Utility Library

A small TypeScript utility library of pure, reusable functions for working with arrays and objects.

## Installation

```bash
npm install
```

## Running Tests

```bash
npm test
```

## Building

```bash
npm run build
```

## API Reference

### chunk(arr, size)

Split an array into smaller arrays of a given size. Returns an array of sub-arrays.

```ts
import { chunk } from './src'

chunk([1, 2, 3, 4, 5], 2)
// → [[1, 2], [3, 4], [5]]
```

- The last chunk may contain fewer elements if the array length is not divisible by `size`
- The original array is not modified

### groupBy(arr, keyFn)

Group elements of an array into an object based on the result of a key function. Returns an object where each key maps to an array of matching items.

```ts
import { groupBy } from './src'

const users = [
  { name: 'Ana', role: 'admin' },
  { name: 'Bob', role: 'user' },
  { name: 'Cara', role: 'admin' }
]

groupBy(users, u => u.role)
// → { admin: [{name: 'Ana', role: 'admin'}, {name: 'Cara', role: 'admin'}], user: [{name: 'Bob', role: 'user'}] }
```

- Keys are determined by the return value of `keyFn`
- Each key maps to an array of matching items
- The original array is not modified

### partition(arr, predicate)

Split an array into two arrays based on a condition. Returns a tuple of two arrays: the first with items that passed, the second with items that failed.

```ts
import { partition } from './src'

partition([1, 2, 3, 4, 5], n => n % 2 === 0)
// → [[2, 4], [1, 3, 5]]
```

- First array: elements where predicate returns `true`
- Second array: elements where predicate returns `false`
- Order of elements is preserved
- The original array is not modified

### uniqueBy(arr, keyFn)

Remove duplicate items from an array based on a key function. Returns a new array with only the first occurrence of each unique key.

```ts
import { uniqueBy } from './src'

const users = [
  { id: 1, name: 'Ana' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Ana' }
]

uniqueBy(users, u => u.id)
// → [{id: 1, name: 'Ana'}, {id: 2, name: 'Bob'}]
```

- Only the first occurrence of each key is kept
- Original order is preserved
- The original array is not modified

### flatten(arr)

Convert a nested array into a single flat array. Returns a new array with all nested values expanded into a single level.

```ts
import { flatten } from './src'

flatten([1, [2, [3, [4, [5]]]]])
// → [1, 2, 3, 4, 5]
```

- Nested arrays are recursively expanded
- The original array is not modified

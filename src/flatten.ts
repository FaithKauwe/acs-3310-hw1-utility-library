// Take a nested array and flatten it into a single array with no nesting.
// Recursively expands any arrays found inside. Returns a new flat array
// containing all values in their original order.
//
// Example 1 — one level of nesting:
// flatten([1, [2, 3], [4, 5]])
// → [1, 2, 3, 4, 5]
//
// Example 2 — deeply nested:
// flatten([1, [2, [3, [4, [5]]]]])
// → [1, 2, 3, 4, 5]
//
// Example 3 — mixed nesting depths:
// flatten([[1, 2], 3, [4, [5, 6]], 7])
// → [1, 2, 3, 4, 5, 6, 7]

export function flatten(arr: unknown[]): unknown[] {
    const result: unknown[] = []
    for (const item of arr) {
        // Array.isArray(item) returns true/false. if it returns false, not part of array
        if (Array.isArray(item)) {
            // item is an array, so flatten it recursively and add all its values to result
        // use spread operator ... so individual values get pushed not nested arrays
            result.push(...flatten(item))
        } else {
            // base case: item is not an array, so it's a single value — add it directly
            result.push(item)
        }
    }
    return result
}

// Example 1 — one level of nesting:
// flatten([1, [2, 3], [4, 5]])
// → [1, 2, 3, 4, 5]

import { describe, expect, test } from 'vitest'
import { flatten } from '../src/flatten'

describe ('flatten', () => {
    test('returns single arr of ordered nums when given assorted sub arrays', () => {
        expect(flatten([1, [2, 3], [4, 5]])).toEqual([1, 2, 3, 4, 5])
    })

    test('flattens deeply nested arrays', () => {
        expect(flatten([1, [2, [3, [4, [5]]]]])).toEqual([1, 2, 3, 4, 5])
    })

    test('flattens mixed nesting depths', () => {
        expect(flatten([[1, 2], 3, [4, [5, 6]], 7])).toEqual([1, 2, 3, 4, 5, 6, 7])
    })

    test('returns same array when already flat', () => {
        expect(flatten([1, 2, 3])).toEqual([1, 2, 3])
    })

    test('returns empty array when given empty array', () => {
        expect(flatten([])).toEqual([])
    })

    test('does not modify the original array', () => {
        const original = [1, [2, 3], [4, 5]]
        flatten(original)
        expect(original).toEqual([1, [2, 3], [4, 5]])
    })
})
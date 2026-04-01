// Example 1 — split numbers into even and odd:
// partition([1, 2, 3, 4, 5], n => n % 2 === 0)
// → [[2, 4], [1, 3, 5]]
//
// Example 2 — split strings by length:
// partition(['hi', 'hello', 'hey', 'howdy'], w => w.length > 3)
// → [['hello', 'howdy'], ['hi', 'hey']]
//
// Example 3 — split users by active status:
// partition([{name: 'Ana', active: true}, {name: 'Bob', active: false}, {name: 'Cara', active: true}], u => u.active)
// → [[{name: 'Ana', active: true}, {name: 'Cara', active: true}], [{name: 'Bob', active: false}]]

import { describe, expect, test } from 'vitest'
import { partition } from '../src/partition'

describe ('partition', () => {
    test ('separate by even/odd when given arr of numbers', () => {
        expect(partition([1, 2, 3, 4, 5], n => n % 2 === 0))
        .toEqual([[2, 4], [1, 3, 5]])
    })

    test('split strings by length', () => {
        expect(partition(['hi', 'hello', 'hey', 'howdy'], w => w.length > 3))
        .toEqual([['hello', 'howdy'], ['hi', 'hey']])
    })

    test('all items match predicate', () => {
        expect(partition([2, 4, 6], n => n % 2 === 0))
        .toEqual([[2, 4, 6], []])
    })

    test('no items match predicate', () => {
        expect(partition([1, 3, 5], n => n % 2 === 0))
        .toEqual([[], [1, 3, 5]])
    })

    test('returns two empty arrays when given empty array', () => {
        expect(partition([], () => true)).toEqual([[], []])
    })

    test('does not modify the original array', () => {
        const original = [1, 2, 3, 4]
        partition(original, n => n % 2 === 0)
        expect(original).toEqual([1, 2, 3, 4])
    })
})
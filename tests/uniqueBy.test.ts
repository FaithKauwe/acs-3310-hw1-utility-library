// Example 1 — remove duplicate users by id:
// uniqueBy([{id: 1, name: 'Ana'}, {id: 2, name: 'Bob'}, {id: 1, name: 'Ana'}], u => u.id)
// → [{id: 1, name: 'Ana'}, {id: 2, name: 'Bob'}]
//
// Example 2 — remove duplicate strings by lowercase:
// uniqueBy(['Hello', 'hello', 'World', 'world'], w => w.toLowerCase())
// → ['Hello', 'World']
//
// Example 3 — remove duplicate numbers by themselves (basic dedup):
// uniqueBy([1, 2, 2, 3, 1, 4], n => n)
// → [1, 2, 3, 4]

import { describe, expect, test } from 'vitest'
import { uniqueBy } from '../src/uniqueBy'

describe ('uniqueBy', () => {
    test ('remove duplicate users by id', () => {
        expect(uniqueBy([{id: 1, name: 'Ana'}, {id: 2, name: 'Bob'}, {id: 1, name: 'Ana'}], u => u.id))
        .toEqual([{id: 1, name: 'Ana'}, {id: 2, name: 'Bob'}])
    })

    test('remove duplicate strings by lowercase', () => {
        expect(uniqueBy(['Hello', 'hello', 'World', 'world'], w => w.toLowerCase()))
        .toEqual(['Hello', 'World'])
    })

    test('remove duplicate numbers', () => {
        expect(uniqueBy([1, 2, 2, 3, 1, 4], n => n))
        .toEqual([1, 2, 3, 4])
    })

    test('returns empty array when given empty array', () => {
        expect(uniqueBy([], () => 'key')).toEqual([])
    })

    test('keeps all items when there are no duplicates', () => {
        expect(uniqueBy([1, 2, 3], n => n)).toEqual([1, 2, 3])
    })

    test('does not modify the original array', () => {
        const original = [1, 2, 2, 3]
        uniqueBy(original, n => n)
        expect(original).toEqual([1, 2, 2, 3])
    })
})
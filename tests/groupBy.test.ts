// Example 1 — group by role:
// groupBy([{name: 'Ana', role: 'admin'}, {name: 'Bob', role: 'user'}, {name: 'Cara', role: 'admin'}], u => u.role)
// → { admin: [{name: 'Ana', role: 'admin'}, {name: 'Cara', role: 'admin'}], user: [{name: 'Bob', role: 'user'}] }
//
// Example 2 — group numbers by even/odd:
// groupBy([1, 2, 3, 4, 5], n => n % 2 === 0 ? 'even' : 'odd')
// → { odd: [1, 3, 5], even: [2, 4] }
//
// Example 3 — group strings by first letter:
// groupBy(['apple', 'avocado', 'banana', 'blueberry'], w => w[0])
// → { a: ['apple', 'avocado'], b: ['banana', 'blueberry'] }

import { describe, expect, test } from 'vitest'
import { groupBy } from '../src/groupBy'

describe ('groupBy', () => {
    test('group by role when given array of objects', () => {
        expect(groupBy([{name: 'Ana', role: 'admin'}, {name: 'Bob', role: 'user'}, {name: 'Cara', role: 'admin'}], u => u.role))
        .toEqual({ admin: [{name: 'Ana', role: 'admin'}, {name: 'Cara', role: 'admin'}], user: [{name: 'Bob', role: 'user'}] })
    })

    test('group numbers by even/odd', () => {
        expect(groupBy([1, 2, 3, 4, 5], n => n % 2 === 0 ? 'even' : 'odd'))
        .toEqual({ odd: [1, 3, 5], even: [2, 4] })
    })

    test('group strings by first letter', () => {
        expect(groupBy(['apple', 'avocado', 'banana', 'blueberry'], w => w[0]))
        .toEqual({ a: ['apple', 'avocado'], b: ['banana', 'blueberry'] })
    })

    test('returns empty object when given empty array', () => {
        expect(groupBy([], () => 'key')).toEqual({})
    })

    test('does not modify the original array', () => {
        const original = [{name: 'Ana', role: 'admin'}, {name: 'Bob', role: 'user'}]
        groupBy(original, u => u.role)
        expect(original).toEqual([{name: 'Ana', role: 'admin'}, {name: 'Bob', role: 'user'}])
    })
})
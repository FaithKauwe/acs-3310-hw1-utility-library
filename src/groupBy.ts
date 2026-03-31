// Group elements of an array into an object, where each key is determined by
// running keyFn on each item. Items that produce the same key are grouped together.
// returns a nested object of key/ value pairs where the key is whatever string the keyFn returns (name, first letter, even/odd) and the value is
// a list of all items meeting the criteria for that group
//
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

export function groupBy<T>(arr: T[], keyFn: (item: T) => string): Record<string, T[]> {
    const result : Record<string, T[]> = {}
    // add key to result and the key is the string that's returned from keyFn
    // but each item in the list might return a diff key based on the fn results, need to check if key already exists
    // loop throgh eachitem in arr
    for (const item of arr) {
        const key = keyFn(item)
        // check if the key already exists in result
        if (result[key]) {
            // if the key already exists, add the item to that key's list
            result[key].push(item)
        } else {
            // if the key doesn't exist, create a new key with item as the first element in its list
            result[key] = [item]
        }
    }
    return result
}

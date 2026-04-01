// Remove duplicate items from an array based on a key function.
// For each item, keyFn produces a key — if two items produce the same key,
// only the first one is kept. Original order is preserved.
// returns an arr of the unique items
//
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

// writing unknown as the return of a fn is allowable in TS
export function uniqueBy<T>(arr: T[], keyFn: (item: T) => unknown): T[] {
// create empty list
    const result: T[] = [] 
// create empty Set to track keys bc lookup for a Set is cheaper than a list
    const seen = new Set<unknown>()
    for (const item of arr) {
        if (!seen.has(keyFn(item))) {
// use .push for arrays
            result.push(item)
// use .add for sets
            seen.add(keyFn(item))
        }}
    return result
}

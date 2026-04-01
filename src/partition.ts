// Split an array into exactly two arrays based on a condition (predicate function).
// The first array contains items where the predicate returns true,
// the second array contains items where it returns false. Order is preserved.
//
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

export function partition<T>(arr: T[], predicate: (item: T) => boolean): [T[], T[]] {
    const trueResult: T[] = []
    const falseResult:  T[] = []
    for (const item of arr) {
        if (predicate(item)) {
            trueResult.push(item)
        } else {falseResult.push(item)}
    }
    return [trueResult, falseResult]
}

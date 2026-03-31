// split an array into smaller arrays of the given size, with the last chunk potentially being smaller, if the array is not a perfect 
// multiple of size. example inputs + outputs: 
// even split
// chunk([1, 2, 3, 4], 2)
// → [[1, 2], [3, 4]]
// Uneven split (last chunk is smaller)
// chunk([1, 2, 3, 4, 5], 2)
// // → [[1, 2], [3, 4], [5]]
// Size larger than the array
// chunk([1, 2, 3], 10)
// → [[1, 2, 3]]

// signature= nameOfFunction then args types then return type, <T> is the generic type, saying that the data type making up the arr argument is unknown and could be any data type
// the array of unknwon (<T> type could theoretically be more than one data type making up that arr)
// the placement of <T> here: chunk<T>(arr: T[] is special, using a known data type would be decribed in the args
// this syntax : T[][] is the return, saying the function is returning a list of lists
export function chunk<T>(arr: T[], size: number): T[][] {
    
    const result: T[][] = []
// ts for loop lets me specify how much to increase the counter that is pushing the loop along
    for (let i = 0; i < arr.length; i += size) {
// slice is smart, if i + size goes past the end of the array, it just grabs whatever's left. 
        result.push(arr.slice(i, i + size))
    }

    return result
}

// pure bc: Same input always gives same output — no randomness, no external state, just math on the array and size
// No side effects — it doesn't modify anything outside itself, doesn't log, doesn't write to a database, etc.
// No mutation of inputs — arr.slice() creates new sub-arrays rather than modifying arr, and result is built fresh inside the function

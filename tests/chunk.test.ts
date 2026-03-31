import { describe, expect, test } from 'vitest'
import { chunk } from '../src/chunk'


describe('chunk', () => {
  test('splits array into even groups', () => {
    expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]])
  })

  test('last chunk is smaller when array length is not divisible by size', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]])
  })

  test('returns single chunk when size is larger than array', () => {
    expect(chunk([1, 2, 3], 10)).toEqual([[1, 2, 3]])
  })

  test('returns empty array when given empty array', () => {
    expect(chunk([], 3)).toEqual([])
  })

  test('does not modify the original array', () => {
    const original = [1, 2, 3, 4]
    chunk(original, 2)
    expect(original).toEqual([1, 2, 3, 4])
  })
})

import { it, expect } from 'vitest'
import reverseString from './reverseString'

const reversedString = reverseString('my-test')

it('reverses a string', () => {
    expect(reversedString).toBe('tset-ym')
})

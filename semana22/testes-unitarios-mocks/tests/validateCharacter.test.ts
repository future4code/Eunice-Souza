import validateCharacter from '../src/validateCharacter'

describe('Teste unitários da função validateCharacter', () => {
    test('name: string vazia', () => {
        expect(validateCharacter({ name: '', life: 1500, strength: 150, defense: 200 })).toBe(false)
    })
    test('strength: ZERO', () => {
        expect(validateCharacter({ name: 'sonic', life: 1500, strength: 0, defense: 200 })).toBe(false)
    })
    test('life: ZERO', () => {
        expect(validateCharacter({ name: 'sonic', life: 0, strength: 150, defense: 200 })).toBe(false)
    })
    test('defense: ZERO', () => {
        expect(validateCharacter({ name: 'sonic', life: 1500, strength: 150, defense: 0 })).toBe(false)
    })
    test('defense: negativo', () => {
        expect(validateCharacter({ name: 'sonic', life: 1500, strength: 150, defense: - 1 })).toBe(false)
    })
    test('character: validated', () => {
        expect(validateCharacter({ name: 'sonic', life: 1500, strength: 150, defense: 200 })).toBe(true)
    })
})


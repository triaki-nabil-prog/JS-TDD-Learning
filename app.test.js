import { cap, rev, calc, caesarCipher, analyz } from "./app"

test('capitalization', () => {
    expect(cap("AbCd")).toBe("Abcd");
});

test('reverseString', () => {
    expect(rev("abcd")).toBe("dcba");
})

test('calculator', () => {
    expect(calc.add(2, 2)).toBe(4);
    expect(calc.sub(2, 2)).toBe(0);
    expect(calc.div(4, 2)).toBe(2);
    expect(calc.mul(2, 3)).toBe(6);
});

test('caesarCipher', () => {
    expect(caesarCipher("abcd", 2)).toBe("cdef");
    expect(caesarCipher("z", 1)).toBe("a");
    expect(caesarCipher("z", 0)).toBe("z");
    expect(caesarCipher("a.bc d", 2)).toBe("c.de f");
});

test('analyzeArray', () => {
    expect(analyz([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
});
import { cap, rev, calc , caesarCipher} from "./app"

test('capitalization', () => {
    expect(cap("AbCd")).toBe("Abcd");
});

test('reverseString', () => {
    expect(rev("abcd")).toBe("dcba");
})

test('calculator', () =>{
expect(calc.add(2,2)).toBe(4);
expect(calc.sub(2,2)).toBe(0);
expect(calc.div(4,2)).toBe(2);
expect(calc.mul(2,3)).toBe(6);
});

test('caesarCipher',()=>{
    expect(caesarCipher("abcd", 2)).toBe("cdef");
    expect(caesarCipher("z", 1)).toBe("a");
    expect(caesarCipher("z", 0)).toBe("z");
    expect(caesarCipher("a.bc d", 2)).toBe("c.de f");
});
import { cap, rev, calc } from "./app"

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
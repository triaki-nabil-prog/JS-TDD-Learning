
export function cap(string) {
    let array = string.toLowerCase().split("");
    array[0] = array[0].toUpperCase();
    return array.join('');
}

export function rev(string) {
    return string.split("").reverse().join('');
}

export const calc = {
    add: (a, b) => { return a + b; },
    sub: (a, b) => { return a - b; },
    div: (a, b) => { return a / b; },
    mul: (a, b) => { return a * b; },
}
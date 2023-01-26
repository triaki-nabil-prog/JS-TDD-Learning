
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

export function caesarCipher(string, key) {
    let cypherString = "";
    const reg = /[a-z]/;
    for (let i = 0; i < string.length; i++) {
        if (reg.test(string.charAt(i))) { cypherString += String.fromCharCode((string.charCodeAt(i) - 97 + key) % 26 + 97); }
        else cypherString += string.charAt(i);
    }

    return cypherString;
}

export function analyz(array) {
    let object = {};
    // average 
    object.average = array.reduce((sum , value)=> sum + value,0)/array.length;
    //min 
    object.min = Math.min(...array);
    //max
    object.max = Math.max(...array);
    //length
    object.length = array.length;

    return object;

}
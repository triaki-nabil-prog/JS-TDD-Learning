
export function cap(string) {
    let array = string.toLowerCase().split("");
    array[0] = array[0].toUpperCase();
    return array.join('');
}
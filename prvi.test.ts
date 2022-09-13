var f = [];
function factorial (n) {
    if (n == 0 || n == 1)
        return 1;
    if (f[n] > 0)
        return f[n];
    return f[n] = factorial(n-1) * n;
}

const prvi = (a) => {
    return a.toString().split('').map(x => +x).reduce(
        (acc, x) => acc + factorial(x), 0
    );
}

const shift = (shiftFor, character) => {
    return String.fromCharCode(((character - 97 + shiftFor) % 26) + 97);
}

const drugi = (shiftFor, stringToShift) => {
    return stringToShift.toLowerCase().split('').map(c => !c.match(/[a-z]/) ? c : shift(shiftFor, c.charCodeAt(0))).join('');
}

test('sample test',() =>
{
    expect(prvi(45)).toBe(144);
});

test('sample test 2',() =>
{
    expect(prvi(145)).toBe(145);
});

test('calculate result of first',() =>
{
    console.log('result of prvi', prvi(9602));
});

test('sample test drugi 1', () => {
    expect(drugi(3, 'abc')).toEqual('def');
})

test('sample test drugi 2', () => {
    expect(drugi(3, 'z')).toEqual('c');
})

test('sample test drugi 3', () => {
    expect(drugi(3, 'abc 123 abc')).toEqual('def 123 def');
})

test('sample test drugi 4', () => {
    expect(drugi(3, 'ABC 123 ABC')).toEqual('def 123 def');
})

test('resenje', () => {
    console.log('resenje', drugi(prvi(9602), 'VEGA'));
})
def.push({
    title: 'Arrow Weed',
    axiom: 'x',
    rules: {
        f: 'ff',
        x: 'f[+x][-x]fx'                   
    },
    turtle: {
        'f': 'f',
        '+': '>30',
        '-': '<30',
        '[': "push",
        ']': 'pop'
    }
});
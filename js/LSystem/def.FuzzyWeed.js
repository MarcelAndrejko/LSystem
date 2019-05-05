def.push({
    title: 'Fuzzy Weed',
    axiom: 'x',
    rules: {
        f: 'ff',
        x: 'f-[[x]+x]+f[+fx]-x'                   
    },
    turtle: {
        'f': 'f',
        '+': '>22.5',
        '-': '<22.5',
        '[': "push",
        ']': 'pop'
    }
});
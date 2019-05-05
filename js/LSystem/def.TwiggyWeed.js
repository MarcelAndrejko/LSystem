def.push({
    title: 'Twiggy Weed',
    axiom: 'x',
    rules: {
        f: 'ff',
        x: 'f[-x]f[-x]+x'                   
    },
    turtle: {
        'f': 'f',
        '+': '>25',
        '-': '<25',
        '[': "push",
        ']': 'pop'
    }
});
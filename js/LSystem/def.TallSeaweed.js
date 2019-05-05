def.push({
    title: 'Tall Seaweed',
    axiom: 'f',
    rules: {
        f: 'f[+f]f[-f]f'                  
    },
    turtle: {
        'f': 'f',
        '+': '>25',
        '-': '<25',
        '[': "push",
        ']': 'pop'
    }
});
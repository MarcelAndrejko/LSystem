def.push({
    title: 'Sierpinski Triangle',
    axiom: 'f-g-g',
    rules: {
        f: 'f-g+f+g-f', 
        g: 'gg'
    },
    turtle: {
        'g': 'f',
        'f': 'f',
        '+': '>120',
        '-': '<120',
        '[': "push",
        ']': 'pop'
    }
});
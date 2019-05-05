def.push({
    title: 'Dragon Curve',
    axiom: 'fx',
    rules: {
        x: 'x+yf+',
        y: '-fx-y'
    },
    turtle: {
        'f': 'f',
        '+': '>90',
        '-': '<90',
        '[': "push",
        ']': 'pop'
    }
});

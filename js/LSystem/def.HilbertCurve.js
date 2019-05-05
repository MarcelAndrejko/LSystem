def.push({
    title: 'Hilbert Curve',
    axiom: 'l',
    rules: {
        l: '+rf-lfl-fr+',
        r: '-lf+rfr+fl-'                  
    },
    turtle: {
        'f': 'f',
        '+': '>90',
        '-': '<90',
        '[': "push",
        ']': 'pop'
    }
});
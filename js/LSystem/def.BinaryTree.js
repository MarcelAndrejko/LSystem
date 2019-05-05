def.push({
    title: 'Binary tree',
    axiom: 'x',
    rules: {
        x: 'f[-x][+x]'                   
    },
    turtle: {
        'f': 'f',
        '+': '>30',
        '-': '<30',
        '[': "push",
        ']': 'pop'
    }
});

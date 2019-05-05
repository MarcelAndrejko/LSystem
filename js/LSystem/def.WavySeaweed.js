def.push({
    title: 'Wavy Seaweed',
    axiom: 'f',
    rules: {
        f: 'ff-[-f+f+f]+[+f-f-f]'                  
    },
    turtle: {
        'f': 'f',
        '+': '>22.5',
        '-': '<22.5',
        '[': "push",
        ']': 'pop'
    }
});
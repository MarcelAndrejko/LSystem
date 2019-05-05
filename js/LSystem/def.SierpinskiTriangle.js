def.push({
    title: 'Sierpinski Triangle',
    axiom: 'a',
    rules: {
        a: 'b-a-b', 
        b: 'a+b+a'
    },
    turtle: {
        'a': 'f',
        'b': 'f',
        'f': 'f',
        '+': '>60',
        '-': '<60',
        '[': "push",
        ']': 'pop'
    }
});
  
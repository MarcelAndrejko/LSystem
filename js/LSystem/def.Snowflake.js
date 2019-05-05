def.push({
    title: 'Snowflake',
    axiom: 'f',
    rules: {
        f: 'f+f--f+f'                   
    },
    turtle: {
        'f': 'f',
        '+': '>60',
        '-': '<60',
        '[': "push",
        ']': 'pop'
    }
});
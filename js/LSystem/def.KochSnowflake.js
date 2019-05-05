def.push({
    title: 'Koch Snowflake',
    axiom: 'f++f++f',
    rules: {
        f: 'f-f++f-f'                   
    },
    turtle: {
        'f': 'f',
        '+': '>60',
        '-': '<60',
        '[': "push",
        ']': 'pop'
    }
});
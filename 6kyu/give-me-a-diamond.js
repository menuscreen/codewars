/*
    Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. 
    Since James doesn't know how to make this happen, he needs your help.

    Task
        You need to return a string that looks like a diamond shape when printed on the screen, using 
        asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a 
        newline character (\n).

        Return null/nil/None/... if the input is an even number or negative, as it is not possible to print 
        a diamond of even or negative size.

    Examples
        A size 3 diamond:

            *
            ***
            *
            ...which would appear as a string of " *\n***\n *\n"

        A size 5 diamond:
    
              *
             ***
            *****
             ***
              *
            ...that is:
            "  *\n ***\n*****\n ***\n  *\n"
*/
function diamond(n){
    if (n % 2 === 0 || n < 0){
        return null;
    };

    // center
    let center = '';
    for (let i = 0; i < n; i++){
        center += '*';
    };
    center += '\n';

    let middle = Math.ceil(n/2);
    let stars = 1;
    let spaces = middle - 1;

    // top
    let top = '';
    while (stars < n){
        for (let i = 1; i <= spaces; i++){
            top += ' ';
        };
        spaces -= 1;

        for (let i = 1; i <= stars; i++){
            top += '*';
        }
        stars += 2;

        top += '\n';
    };

    // bottom
    let bottom = '';

    stars = n - 2;
    spaces = 1;
    while (stars > 0){
        for (let i = 1; i <= spaces; i++){
            bottom += ' ';
        };
        spaces += 1;

        for (let i = 1; i <= stars; i++){
            bottom += '*';
        };
        stars -= 2;

        bottom += '\n';
    };

    const diam = top + center + bottom;

    return diam;
}

console.log(diamond(11));
console.log(diamond(1)) // -> "*\n"
console.log(diamond(3)) // -> " *\n***\n *\n"
console.log(diamond(5)) // -> "  *\n ***\n*****\n ***\n  *\n"
console.log(diamond(2)) // -> null
console.log(diamond(-3)) // -> null
console.log(diamond(0)) // -> null
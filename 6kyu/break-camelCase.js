/* 

    Complete the solution so that the function will break up camel casing, using a space between words.

    Example
        "camelCasing"  =>  "camel Casing"
        "identifier"   =>  "identifier"
        ""             =>  ""

*/

function solution(string) {
    let newStr = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== string[i].toUpperCase()){
            newStr += string[i];
        }else {
            newStr += ' ';
            newStr += string[i];
        }
    }
    return newStr;
}


solution('camelCasing') // == 'camel Casing'
solution('camelCasingTest') // == 'camel Casing Test'

/* Other examples


    function solution(string) {
        return(string.replace(/([A-Z])/g, ' $1'));

    }


    function solution(string) {
    string = string.split('').map(function (el) {
        if (el === el.toUpperCase()) {
            el = ' ' + el
        }
        return el
    })
    return string.join('')
    }


*/
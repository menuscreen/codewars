/*
    Testing 1-2-3
    Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

    Write a function which takes a list of strings and returns each line prepended by the correct number.

    The numbering starts at 1. The format is n: string. Notice the colon and space in between.

    Examples:

        number([]) // => []
        number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]
*/
let number = function(array){
    if (array[0] === undefined){
        return array;
    }
    for (let i = 0; i < array.length; i++){
        array[i] = `${i+1}: ${array[i]}`;
    }
    return array;
}

number([]) // == []
number(["a", "b", "c"]) // == ["1: a", "2: b", "3: c"]

/* other examples/solutions


    var number = function(array) {
        return array.map(function (line, index) {
            return (index + 1) + ": " + line;
        });
    }


    let number = (a) => a.map((v, i) => `${i + 1}: ${v}`)


    const number = array => array.map((n, i) => `${i + 1}: ${n}`);


    function number(arr) {
        return arr.map((e, i) => `${++i}: ${e}`);
    }


    var number = function(arr) {
        var newArr = [];
        if (arr.length === 0) {
            return [];
        } else {
            for (var i = 0, len = arr.length; i < len; i += 1) {
                newArr.push((i + 1) + ': ' + arr[i]);
            }
        }
    return newArr;
    }
*/
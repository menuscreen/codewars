/*
In this kata you will create a function that takes a list of non-negative integers and strings 
and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/
function filter_list(arr) {
    let numsOnly = [];
    for(let i = 0; i < arr.length; i++){
        if((typeof arr[i]) === 'number'){
            numsOnly.push(arr[i]);
        }
    }
    return numsOnly;
}

filter_list([1,2,'a','b']); // == [1,2]
filter_list([1,'a','b',0,15]); // == [1,0,15]
filter_list([1,2,'aasf','1','123',123]); // == [1,2,123]

// note: .filter() 
/* example
    function filter_list(arr) {
    return arr.filter(i => typeof i == "number")
    }
*/

// note: Number.isInteger()
/* example
    function filter_list(arr) {
    return arr.filter(i => Number.isInteger(i));
    }
*/

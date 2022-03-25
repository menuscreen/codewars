/*
In this kata you will create a function that takes a list of non-negative integers and strings 
and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/
function filter_list(l) {
    let numsOnly = [];
    for(let i = 0; i < filter_list.length; i++){
        if((typeof filter_list[i]) === 'number'){
            numsOnly.push(filter_list[i]);
        }
    }
    return numsOnly;
}

filter_list([1,2,'a','b']);

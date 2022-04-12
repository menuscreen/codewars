/*
    Instructions
        Write a function that takes a single string (word) as argument. 
        The function must return an ordered list containing the indexes of all capital letters in the string.

    Example
        Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/

const isUpperCase = (s) => /^[A-Z]/.test(s); // regex test returns true/false

let capitals = function (word) {
    let arrIndexOf = [];
    for (let i = 0; i <= word.length; i++){
        if (isUpperCase(word[i])){
            arrIndexOf.push(i);
        }
    }
    return arrIndexOf;
};

capitals('CodEWaRs') // == [0,3,4,6] 


/* other examples  

    var capitals = function (word) {
        var caps = [];
        for(var i = 0; i < word.length; i++) {
            if(word[i].toUpperCase() == word[i]){
                caps.push(i);
            }
        }
        return caps;
    };

*/
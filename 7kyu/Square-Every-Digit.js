/*
    Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

    For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

    Note: The function accepts an integer and returns an integer
*/
function squareDigits(num){
    let strArr = num.toString().split('');
    console.log(strArr);
    for (i = 0; i < strArr.length; i++){
        strArr[i] = strArr[i] * strArr[i];
    }
    num = Number(strArr.join(''));
    // console.log(num);
    return num;
}

squareDigits(3212) // == 9414
squareDigits(2112) // == 4114
squareDigits(0) // == 0

/* Other solutions

    function squareDigits(num){
        return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
    }

    function squareDigits(num){
        var array = num.toString().split('').map( function(int) {
            var i = parseInt(int);
            return i * i;
        });
  
        return parseInt(array.join(""));
    }


    function squareDigits(num){
        var string = num.toString();
        var results = [];
        for (var i = 0; i < string.length; i++){
            results[i] = string[i] * string[i];
        }
        return Number(results.join(''));
    };
    
*/

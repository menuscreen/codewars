/*
    Your task is to sort a given string. Each word in the string will contain a single number. 
    This number is the position the word should have in the result.

    Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

    If the input string is empty, return an empty string. The words in the input String will 
    only contain valid consecutive numbers.

    Examples
        "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
        "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
        ""  -->  ""
*/

function order(words){
    const arrWords = words.split(' ');
    let arr = [];
    let position = 0;
    for(let i = 0; i < arrWords.length; i++){
        // console.log(`i loop: ${arrWords[i]}`);
        for(let j = 0; j < arrWords[i].length; j++){
            // console.log(`j loop: ${arrWords[i][j]}`);
            if(parseInt(arrWords[i][j])){
                position = parseInt(arrWords[i][j]) - 1;
                // console.log(`ParseInt Position: ${position}`);
                break;
            }
        }
        arr[position] = arrWords[i];
        // console.log(`arr: ${arr}`);
    }
    const newStr = arr.join(' ');
    return newStr;
}

order("is2 Thi1s T4est 3a") // == "Thi1s is2 3a T4est"
order("4of Fo1r pe6ople g3ood th5e the2") // == "Fo1r the2 g3ood 4of th5e pe6ople"
order("") // == "" empty input should return empty string
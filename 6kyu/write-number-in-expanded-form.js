/* 

    You will be given a number and you will need to return it as a string in Expanded Form. 
    
    For example:
        expandedForm(12); // Should return '10 + 2'
        expandedForm(42); // Should return '40 + 2'
        expandedForm(70304); // Should return '70000 + 300 + 4'

    NOTE: All numbers will be whole numbers greater than 0.

*/
function expandedForm(num){
    let strNumArr = num.toString().split('');
    for (let i = 0; i < strNumArr.length; i++){
        for (let j = strNumArr.length - i; j > 1; j--){
            if (strNumArr[i] == '0'){
                strNumArr.splice(i, 1);
            }else{
                strNumArr[i] += '0';
            }
        }
    }
    if (strNumArr[strNumArr.length - 1] === '0'){
        strNumArr.pop();
    }
    let strNum = strNumArr.join(' + ');
    return strNum;
}

expandedForm(12) // == '10 + 2'
expandedForm(42) // == '40 + 2'
expandedForm(70304) // == '70000 + 300 + 4'
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


/* Other examples

const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");


function expandedForm(num) {
    return String(num)
                    .split("")
                    .map((num, index, arr) => num + "0".repeat(arr.length - index -1 ))
                    .filter((num) => Number(num) != 0)
                    .join(" + ")
}


function expandedForm(num) {
    num = String(num);
    let result = [];
    for (var i = 0; i < num.length; i++) {
        if (num[i] == 0) continue;
        else result.push(num[i] + "0".repeat(num.length -i -1))
    }
    return result.join(" + ")
}


*/
/*
    This time no story, no theory. The examples below show you how to write function accum:

    Examples:
        accum("abcd") -> "A-Bb-Ccc-Dddd"
        accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
        accum("cwAt") -> "C-Ww-Aaa-Tttt"

    The parameter of accum is a string which includes only letters from a..z and A..Z.
*/
function accum(s) {
	tempArr = [];
    tempArr = s.split('');
    resultArr = [];
    let count = 1;
    for(let i = 0; i < tempArr.length; i++){ // iterate through each letter
        for(let j = 0; j < count; j++){ // iterate through count (how many times to repeat)
            if(j === 0){
                resultArr.push(tempArr[i].toUpperCase());
            }else{
                resultArr.push(tempArr[i].toLowerCase());
            }
        }
        if(i < tempArr.length - 1){
            resultArr.push('-');
        }
        count++; // increment count for the next letter
    }
    newStr = resultArr.join('');
    // console.log(newStr);
    return newStr;
}


accum("ZpglnRxqenU") // == "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
accum("NyffsGeyylB") // == "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"
accum("MjtkuBovqrU") // == "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"
accum("EvidjUnokmM") // == "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm"
accum("HbideVbxncC") // == "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc"

/*  Other Examples

    function accum(s) {
        return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
    }


    function accum(s) {
        return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
    }


    function accum(str) {
        var letters = str.split('');
        var result = [];
        for (var i = 0; i < letters.length; i++) {
            result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
        }
        return result.join('-');
    }


    function accum(s) {
        return [...s].map((element, index) => {
            return element.toUpperCase() + element.toLowerCase().repeat(index);
        }).join('-');
    }

*/

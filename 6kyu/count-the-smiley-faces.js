/*
    Given an array (arr) as an argument complete the function countSmileys that should 
    return the total number of smiling faces.

    Rules for a smiling face:

    Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
    A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
    Every smiling face must have a smiling mouth that should be marked with either ) or D
    No additional characters are allowed except for those mentioned.

    Valid smiley face examples: :) :D ;-D :~)
    Invalid smiley faces: ;( :> :} :]

    Example
        countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
        countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
        countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

    Note
        In case of an empty array return 0. You will not be tested with invalid input (input will 
        always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.
*/

//return the total number of smiling faces in the array
function countSmileys(arr) {
    let count = 0; 
    for (let i = 0; i < arr.length; i++){
        let smileyTest = arr[i].split('')
        if ( smileyTest[0] === ':' || smileyTest[0] == ';' ){
            if ( smileyTest[1] === ')' || smileyTest[1] === 'D' ){
                count++;
            }else if ( smileyTest[1] === '-' || smileyTest[1] === '~' ){
                if ( smileyTest[2] === ')' || smileyTest[2] === 'D' ){
                    count++
                }
            }
        }
    }
    return count;
}

countSmileys([]) // == 0);
countSmileys([':D',':~)',';~D',':)']) // == 4);
countSmileys([':)',':(',':D',':O',':;']) // == 2);
countSmileys([';]', ':[', ';*', ':$', ';-D']) // == 1);

/* Other examples

    function countSmileys(arr) {
        return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
    }


    function countSmileys(arr) {
        var smileys = [":)",";)",":-)",";-)",";~)",":~)",":D",";D",":-D",":~D",";-D",";~D"];
        var count = 0;

        for (var i=0; i<arr.length; i++){
            for (var j=0; j<smileys.length; j++){
                if (arr[i]===smileys[j]){
                    count++;
                }
            }
        }   
        return count;
    }


    const countSmileys = ss => ss.reduce((a, s) => a + /^[:;][-~]?[D)]$/.test(s), 0);


    const faces = new Set()
    for (let eyes of [':',';'])
        for (let nose of ['-','~',''])
            for (let mouth of [')','D'])
                faces.add(eyes+nose+mouth)

    countSmileys =(arr)=> arr.filter(x => faces.has(x)).length

*/
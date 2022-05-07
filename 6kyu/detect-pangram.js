/*
    A pangram is a sentence that contains every single letter of the alphabet at least once.
    For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
    because it uses the letters A-Z at least once (case is irrelevant).

    Given a string, detect whether or not it is a pangram. Return True if it is, False if not.
    Ignore numbers and punctuation.
*/
function isPangram(string){ // might consider refactor of least common letters of alphabet to be checked first
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    // const leastCommonOrderAlphabet = ['z','x','q','j','k','g','b','v','p','y','w','f','n','c','y','k','d','r','h','s','n','i','o','a','t','e']
    for(let i = 0; i < alphabet.length; i++){
        if (string.toLowerCase().indexOf(alphabet[i]) !== -1){
            continue;
        }else{
            return false;
        }
    }
    return true;
}

isPangram("The quick brown fox jumps over the lazy dog.") // == true
isPangram("This is not a pangram.") // == false

/* Other Examples/Solutions

function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
        return string.indexOf(x) !== -1;
    });
}


function isPangram(string){
    return 'abcdefghijklmnopqrstuvwxyz'
        .split('')
        .every((x) => string.toLowerCase().includes(x));
}


function isPangram(string) {
    const alphabetList = [...'abcdefghijklmnopqrstuvwxyz'];
    return alphabetList.every((letter) => string.toLowerCase().includes(letter));
}

*/
/*
    Given a string of words, you need to find the highest scoring word.

    Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

    You need to return the highest scoring word as a string.

    If two words score the same, return the word that appears earliest in the original string.

    All letters will be lowercase and all inputs will be valid.
*/
function high(x){
    const alpha = ['abcdefghijklmnopqrstuvwxyz'];
    let score = 0;
    let indexOfHighScore = 0;
    for (let i = 0; i < x.length; i++){
        //split input by word
        //check word score by letter
        //if word score letter higher than previous replace indexscore with new index
    }
    return //;
}

high('man i need a taxi up to ubud') // == 'taxi'
high('what time are we climbing up the volcano') // == 'volcano'
high('take me to semynak') // == 'semynak'
high('aa b') // == 'aa'
high('b aa') // == 'b'
high('bb d') // == 'bb'
high('d bb') // == 'd'
high('aaa b') // == 'aaa'
/*
    Given a string of words, you need to find the highest scoring word.

    Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

    You need to return the highest scoring word as a string.

    If two words score the same, return the word that appears earliest in the original string.

    All letters will be lowercase and all inputs will be valid.
*/
function high(x){
    const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let wordScore;
    let highScore = 0;
    let indexOfHighScore = 0;
    x = x.split(' ');
    for (let i = 0; i < x.length; i++){
        wordScore = 0;
        //check word score by letter
        for (let j = 0; j < x[i].length; j++){
            wordScore += (alpha.indexOf(x[i][j]) + 1); // since index starts at 0 add 1 (a != 0)
        }
        //if word score higher than previous replace values highscore and index
        if (wordScore > highScore){
            highScore = wordScore;
            indexOfHighScore = i;
        }
    }
    return x[indexOfHighScore];
}

high('man i need a taxi up to ubud') // == 'taxi'
high('what time are we climbing up the volcano') // == 'volcano'
high('take me to semynak') // == 'semynak'
high('aa b') // == 'aa'
high('b aa') // == 'b'
high('bb d') // == 'bb'
high('d bb') // == 'd'
high('aaa b') // == 'aaa'

/* other examples/solutions



    function high(s){
        let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
        return s.split(' ')[as.indexOf(Math.max(...as))];
    }




    function high(words) {

        const alpha = ' abcdefghijklmnopqrstuvwxyz';
        const score = word => word.split('').reduce((a, b) => a + alpha.indexOf(b), 0);

        return words
            .split(' ')
            .map((word, pos) => ({ word: word, pos: pos, score: score(word) }))
            .sort((a, b) => a.score - b.score || b.pos - a.pos)
            .pop()
            .word;
    }




    const { compose, reduce, split } = require('ramda');

    const score = compose(
        reduce((r, v) => r + v.charCodeAt() - 96, 0),
        split('')
    );

    const high = compose(
        reduce((r, v) => score(v) > score(r) ? v : r, ''),
        split(' ')
    );



    function high(x){
        const alpha = 'abcdefghijklmnopqrstuvwxyz'
        const words = x.split(' ')
        const scores = words.map(x => [...x].map(y => alpha.indexOf(y) + 1)).map(x => x.reduce((a,b) => a + b,0))
  
        return words[scores.indexOf(Math.max(...scores))]
    }
    
*/
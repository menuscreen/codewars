/*
    You might know some pretty large perfect squares. But what about the NEXT one?

    Complete the findNextSquare method that finds the next integral perfect square 
    after the one passed as a parameter. Recall that an integral perfect square is 
    an integer n such that sqrt(n) is also an integer.

    If the parameter is itself not a perfect square then -1 should be returned. 
    You may assume the parameter is non-negative.

    Examples:(Input --> Output)

    121 --> 144
    625 --> 676
    114 --> -1 since 114 is not a perfect square
*/
function findNextSquare(sq){
    // Return the next square if sq is a pefect square, -1 otherwise
    let sqrt = Math.sqrt(sq);
    if(sqrt % 1 === 0){
        sqrt += 1;
        const nextSquare = Math.pow(sqrt, 2);
        return nextSquare;
    }else{
        return -1;
    }
}

findNextSquare(121) // == 144
findNextSquare(625) // == 676
findNextSquare(319225) // == 320356
findNextSquare(15241383936) // == 15241630849
findNextSquare(155) // == -1
findNextSquare(342786627) // == -1

/*  Other methods and examples
    
    // using Number.isInteger()

    function findNextSquare(sq) {
        var root = Math.sqrt(sq);
        if (Number.isInteger(root)) {
            return Math.pow(root + 1, 2);
        } else {
            return -1;
        }
    }

*/
/* 
    Simple, given a string of words, return the length of the shortest word(s).

    String will never be empty and you do not need to account for different data types.
*/
function findShort(s){
    let arr = s.split(' ');
    let shortest = 100;
    for (let i = 0; i < arr.length; i++){
        if (arr[i].length < shortest){
            shortest = arr[i].length; 
        }
    }
    return shortest;
}

findShort("bitcoin take over the world maybe who knows perhaps") // == 3
findShort("turns out random test cases are easier than writing out basic ones") // == 3
findShort("Let's travel abroad shall we") // == 2

/* other examples/solutions

    function findShort(s){
        return Math.min.apply(null, s.split(' ').map(w => w.length));
    }


    function findShort(s){
        return Math.min(...s.split(" ").map (s => s.length));
    }

    function findShort(s){
        var arr = s.split(' ');
        var min = arr[0].length;
        for (var i = 1; i < arr.length; i++) {
            if (arr[i].length < min) {
                min = arr[i].length;
            }
        }
        return min
    }
*/
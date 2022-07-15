/*
    Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

    It should remove all values from list a, which are present in list b keeping their order.

        arrayDiff([1,2],[1]) == [2]

    If a value is present in b, all of its occurrences must be removed from the other:

        arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/
function arrayDiff(a = [], b = []) {
    const aLength = a.length;
    const bLength = b.length;

    if ( aLength == 0 || bLength == 0 ) {
        return a
    }

    let diffArray = a;
    let aPtr = 0;
    let bPtr = 0;
    while (bPtr < bLength) {
        while (aPtr < aLength) {
            if (diffArray[aPtr] === b[bPtr]) {
                diffArray.splice(aPtr, 1);
            } else {
                aPtr++;
            };
        };
        bPtr++;
        aPtr = 0;
    };
    return diffArray;
};

arrayDiff([1,2], [1]) //== [2]
arrayDiff([1,2,2], [1]) //== [2,2]
arrayDiff([1,2,2], [2]) //== [1]
arrayDiff([1,2,2], []) //== [1,2,2]
arrayDiff([], [1,2]) //== []
arrayDiff([1,2,3], [1,2]) //== [3]

/* Other example solutions

function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}


function array_diff(a, b) {
  return a.filter(function(x) { return b.indexOf(x) == -1; });
}


function array_diff(a, b) {
  b = new Set(b)
  return a.filter(v => !b.has(v))
}

*/
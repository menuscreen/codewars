/*
    There is an array with some numbers. All numbers are equal except for one. Try to find it!

    findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
    findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

    It’s guaranteed that array contains at least 3 numbers.

    The tests contain some very huge arrays, so think about performance.
*/
function findUniq(arr) {
    const arrLength = arr.length;

    let i = 0;
    let j = 1;
    let k = 2;

    let left = arr[i];
    let middle = arr[j];
    let right = arr[k];

    while (k <= arrLength){
        if (left == middle && middle == right){ // [ 0, 0, 0 ]
            left = arr[i++];
            middle = arr[j++];
            right = arr[k++];
        } else if (left != middle && middle == right){ // [ 1, 0, 0 ]
            return left;
        } else if (middle != left && left == right){ // [ 0, 1, 0 ]
            return middle;
        } else { // [ 0, 0, 1 ]
            return right;
        }
    };
};

findUniq([ 1, 0, 0 ]) // == 1
findUniq([ 0, 1, 0 ]) // == 1
findUniq([ 0, 0, 1 ]) // == 1
findUniq([ 1, 1, 1, 2, 1, 1 ]) // == 2
findUniq([ 1, 1, 2, 1, 1 ]) // == 2
findUniq([ 3, 10, 3, 3, 3 ]) // == 10


/*
    The maximum sum subarray problem consists in finding the maximum sum of a contiguous 
    subsequence in an array or list of integers:

        maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
        // should be 6: [4, -1, 2, 1]

    Easy case is when the list is made up of only positive numbers and the maximum sum is
    the sum of the whole array. If the list is made up of only negative numbers, 
    return 0 instead.

    Empty list is considered to have zero greatest sum. Note that the empty list or array 
    is also a valid sublist/subarray.
*/
function allNegative(arr){
    for (num in arr){
        if (num < 0){
            continue;
        } else {
            return false;
        }
    }
    return true;
}

let maxSequence = function(arr){
    if (allNegative(arr)){
        return 0;
    }
    if (arr === []){
        return [];
    }
    let end = arr.length;
    let maxSum = arr.reduce((partialSum, a) => partialSum + a, 0);
    while (end > 1) {
        for (let i = 0; (i + end-1) <= arr.length; i++){
            let currSum = (arr.slice(i, end)).reduce((partialSum, a) => partialSum + a, 0);
            if (currSum > maxSum){
                maxSum = currSum;
            }
        }
        end--;
    }
    return maxSum;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // == 6
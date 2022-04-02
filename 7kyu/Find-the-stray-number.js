/*
    You are given an odd-length array of integers, in which all of them are the same, except for one single number.

    Complete the method which accepts such an array, and returns that single different number.

    The input array will always be valid! (odd-length >= 3)

    Examples
        [1, 1, 2] ==> 2
        [17, 17, 3, 17, 17, 17, 17] ==> 3
*/

function stray(numbers) {
    const totalNums = numbers.reduce(
        function(obj, item) {
            if (!obj[item]){
                obj[item] = 0;
            }
            obj[item]++;
            return obj;
        }, {}
    );
    let nums = Object.keys(totalNums);
    let count = Object.values(totalNums);
    for (let i = 0; i < nums.length; i++){
        if (count[i] === 1){
            return Number(nums[i]);
        }
    }
}


stray([1, 1, 2]) // == 2
stray([17, 17, 10, 17]) // == 10
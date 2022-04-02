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
stray([17, 17, 3, 17, 17, 17, 17]) // == 3
stray([8, 1, 1, 1, 1, 1, 1]) // == 8)
stray([-21, -21, -21, -21, -6, -21, -21]) // == -6
stray([1, 1, 1, 1, 1, 1, 0]) // == 0
stray([0, 0, 0, 7, 0, 0, 0]) // == 7

/* other examples/solutions
  
    function stray(numbers) {
        var a = numbers.sort();
        
        if(a[0] != a[1]) {
            return a[0]
        } 
        return a[a.length-1]
    }

    function stray(nums){
        let max = Math.max(...nums);
        let min = Math.min(...nums);
        return nums.filter(x => x == max).length == 1 ? max : min
    }

*/

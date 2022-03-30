/* 
    Your task is to write function findSum.

    Upto and including n, this function will return the sum of all multiples of 3 and 5.

    For example:

    findSum(5) should return 8 (3 + 5)

    findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)
*/
function findSum(n) {
    let sum = 0;
    for(let i = 0; i <= n; i++){
        if(i % 3 === 0 || i % 5 === 0){
            sum += i;
        }
    }
    return sum;
}

findSum(5) // == 8
findSum(10) // == 33
findSum(100) // == 2418
findSum(1000) // == 234168
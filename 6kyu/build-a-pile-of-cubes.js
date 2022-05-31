/*

    Your task is to construct a building which will be a pile of n cubes. 
    The cube at the bottom will have a volume of n^3, the cube above will 
    have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

    You are given the total volume m of the building. Being given m can you
    find the number n of cubes you will have to build?

    The parameter of the function findNb (find_nb, find-nb, findNb, ...) will 
    be an integer m and you have to return the integer n 
    such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.

    Examples:
        findNb(1071225) --> 45

        findNb(91716553919377) --> -1

*/

function findNb(m) {
    let total = 0;
    let n = 0;

    while(total < m){
        n += 1;
        total += n**3;
    }

    if(total === m){
        return n;
    }else {
        return (-1);
    }
}

findNb(4183059834009) // == 2022
findNb(24723578342962) // == -1
findNb(135440716410000) // == 4824
findNb(40539911473216) // == 3568

/* Other solutions  

    function findNb(m) {
        var n = 0
        while (m > 0) m -= ++n**3
        return m ? -1 : n
    }


    function findNb(m) {
        let n = 0;
        let sum = 0;
        while (sum < m) {
            n++;
            sum += Math.pow(n, 3);
        }
        return sum === m ? n : -1;
    }


    // this is based on the formula that the sum of the first n cubes equals (n * (n + 1) / 2) ^ 2
    // also, the sum of the first n cubes is always a square
    function findNb(m) {
        m = Math.sqrt(m) * 2;
        if (m != parseInt(m)){
            return -1;
        }
        var result = parseInt(Math.sqrt(m));
        return (result * (result + 1) == m) ? result : -1;
    }
*/
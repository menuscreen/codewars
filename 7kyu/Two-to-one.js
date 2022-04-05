/*
    Take 2 strings s1 and s2 including only letters from 'a' to 'z'. Return a new sorted string, 
    the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

    Examples:
        a = "xyaabbbccccdefww"
        b = "xxxxyyyyabklmopq"
        longest(a, b) -> "abcdefklmopqwxy"

        a = "abcdefghijklmnopqrstuvwxyz"
        longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/
function longest(s1, s2) {
    let concatStrings = s1.concat('', s2);
    let sortedArr = concatStrings.split('').sort();
    let newSortedString = sortedArr.filter(function(value, index, self){
        return self.indexOf(value) === index;
    }).join('');
    return newSortedString;
}

longest("aretheyhere", "yestheyarehere") // == "aehrsty"
longest("loopingisfunbutdangerous", "lessdangerousthancoding") // == "abcdefghilnoprstu"
longest("inmanylanguages", "theresapairoffunctions") // == "acefghilmnoprstuy"


/* Other Examples/Solutions

    const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')


    function longest(s1, s2) {
        return Array.from(new Set(s1 + s2)).sort().join('');
    }


    function longest(s1, s2) {
        let str = new Set([...s1, ...s2]);
        return [...str].sort().join('');
    }

*/
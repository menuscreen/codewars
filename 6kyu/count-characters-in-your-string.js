/*
    The main idea is to count all the occurring characters in a string. 
    If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

    What if the string is empty? Then the result should be empty object literal, {}.

*/
function count (string) {
    const arr = string.split('');
    let charCount = arr.reduce(function(obj, item){
        if(!obj[item]){
            obj[item] = 0;
        }
        obj[item]++;
        return obj;
    }, {});
    return charCount;
}

count("aba") // == { a: 2, b: 1 }
count("") // == {}
count("AA") // == {A: 2}
count("aabb") // == {a: 2, b: 2}
count("abab") // == {a: 2, b: 2}
count("ababbbaaabbab") // == {a: 6, b: 7}
count("cdehsakjchdasohidfcadsfh") // == {c: 3, d: 4, e: 1, h: 4, s: 3, …}
count("cdFAVehsakjASFchdasohHJMILidfcadsfh") // == {c: 3, d: 4, F: 2, A: 2, V: 1, …}


/* Other examples/solutions

    function count (string) {  
        var count = {};
        string.split('').forEach(function(s) {
            count[s] ? count[s]++ : count[s] = 1;
        });
        return count;
    }


    function count (string) {
        return string.split('').reduce(function(counts,char){
            counts[char] = (counts[char]||0) + 1;
            return counts;
        },{});
    }


    function count (string) {
        var result = {};
        
        for(let i = 0; i < string.length; i++) {
            if(result.hasOwnProperty(string[i])){
            result[string[i]] += 1;
            } else {
            result[string[i]] = 1;
            }
        }
        
        return result;
    }

*/
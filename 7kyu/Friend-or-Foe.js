/* 
    Make a program that filters a list of strings and returns a list with only your friends name in it.

    If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! 
    Otherwise, you can be sure he's not...

    Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

    i.e.
        friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

    Note: keep the original order of the names in the output.
*/
function friend(friends){
    return friends.filter( ele => ele.length === 4 ? true : false)
}

friend(["Ryan", "Kieran", "Mark"]) // == ["Ryan", "Mark"])
friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]) // == ["Ryan"])
friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]) // == ["Jimm", "Cari", "aret"])
friend(["Love", "Your", "Face", "1"]) // == ["Love", "Your", "Face"])

/* Other examples/solutions

    function friend(friends){
        return friends.filter(n => n.length === 4)
    }


    const friend = friends => friends.filter(friend => friend.length == 4);


    function friend(friends){
        //Create new array called "myFriends" for add your friends
        var i,
            len = friends.length,
            myFriends = [];
        
        for (i = 0; i < len; i++) {   
            //Check for names with length equal to four and it is not a number
            if(friends[i].length == 4 && isNaN(friends[i])) {
                myFriends.push(friends[i]);
            } 
        }   
        return myFriends;
    }

*/

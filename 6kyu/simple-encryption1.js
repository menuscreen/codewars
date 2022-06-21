/*
    Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates 
    all the odd-indexed characters of S with all the even-indexed characters of S, this process 
    should be repeated N times.

    Examples:
        encrypt("012345", 1)  =>  "135024"
        encrypt("012345", 2)  =>  "135024"  ->  "304152"
        encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

        encrypt("01234", 1)  =>  "13024"
        encrypt("01234", 2)  =>  "13024"  ->  "32104"
        encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"

    Together with the encryption function, you should also implement a decryption function which 
    reverses the process.

    If the string S is an empty value or the integer N is not positive, return the first argument 
    without changes.
*/

function encrypt(text, n) {
    if (text === '' || text === null || n <= 0) {
        return text;
    }
    for (let i = 0; i < n; i++) {
        let textArr = text.split('');
        let oddArr = [];
        let evenArr = [];
        for (let j = 0; j < textArr.length; j++) {
            if (j % 2 === 0) {
                evenArr.push(textArr[j]);
            } else {
                oddArr.push(textArr[j]);
            }
        }
        text = oddArr.join('') + evenArr.join('')
    }
    return text;
}

function decrypt(encryptedText, n) {
    if (encryptedText === '' || encryptedText === null || n <= 0) {
        return encryptedText;
    }
    for (let i = 0; i < n; i++) {
        let mid = encryptedText.length / 2;
        if (encryptedText.length % 2 === 0) {
            mid = Math.ceil(mid);
        }else {
            mid = Math.floor(mid);
        }
        let oddStr = encryptedText.substring(0, mid);
        let evenStr = encryptedText.substring(mid);
        let oddArr = oddStr.split('');
        let evenArr = evenStr.split('');
        let textArr = [];
        for (let j = 0; j < encryptedText.length; j++) {
            if (j % 2 === 0) {
                textArr.push(evenArr.shift());
            } else {
                textArr.push(oddArr.shift());
            }
        }
        encryptedText = textArr.join('');
    }
    return encryptedText;
}


encrypt("This is a test!", 0) // == "This is a test!"
encrypt("This is a test!", 1) // == "hsi  etTi sats!"
encrypt("This is a test!", 2) // == "s eT ashi tist!"
encrypt("This is a test!", 3) // == " Tah itse sits!"
encrypt("This is a test!", 4) // == "This is a test!"
encrypt("This is a test!", -1) // == "This is a test!"
encrypt("This kata is very interesting!", 1) // == "hskt svr neetn!Ti aai eyitrsig"
 
decrypt("This is a test!", 0) // == "This is a test!"
decrypt("hsi  etTi sats!", 1) // == "This is a test!"
decrypt("s eT ashi tist!", 2) // == "This is a test!"
decrypt(" Tah itse sits!", 3) // == "This is a test!"
decrypt("This is a test!", 4) // == "This is a test!"
decrypt("This is a test!", -1) // == "This is a test!"
decrypt("hskt svr neetn!Ti aai eyitrsig", 1) // == "This kata is very interesting!"

encrypt("", 0) // == ""
decrypt("", 0) // == ""
encrypt(null, 0) // == null
decrypt(null, 0) // == null
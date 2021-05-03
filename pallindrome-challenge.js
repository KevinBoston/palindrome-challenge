class Palindrome {
    check(input) {
        
        const inputArray = Array.from(input)
        //console.log(inputArray + " starting array")
        if (input.length == 1){
            console.log(inputArray, input.length)
            return true;
         } else if (inputArray.length > 1) {
            const lastLetter = {index: input.length, letter: inputArray.pop()}
            const firstLetter = {index: 0, letter: inputArray.shift()}
            //console.log(`${firstLetter.letter} == ${lastLetter.letter}?`)
            if (firstLetter.letter == lastLetter.letter) {
                this.check(inputArray.join(''))
            } else {
                return false
            }
        } 
    }
}

module.exports = Palindrome

let pal = new Palindrome();
console.log(pal.check('racecar'))

// Write your code below

function uniqueLetters(word) {
    let checkArr = new Set([])
    console.log(word.length)
    for (i = 0; i < word.length; i++) {
        checkArr.add(word[i])
    }
    console.log(checkArr)
    console.log(checkArr.size)
    return (word.length === checkArr.size)
}

console.log(uniqueLetters("asdq"))
console.log(uniqueLetters("add"))

console.log(uniqueLetters("apple"))
console.log(uniqueLetters("sponge"))

// // Epic Joke

// let ingredients = ["sugar", "water", "cinnamon", "cloves", "ginger", "nutmeg", "pumpkin"];

// function pumpkinSpiceLatte(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (ingredients[i] === "pumpkin") {
//             arr.splice(i, 1)
//         }
//     }
//     return arr
// }
// console.log(pumpkinSpiceLatte(ingredients))
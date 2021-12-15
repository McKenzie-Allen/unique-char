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

// Epic Joke
// Pumpkin Splice

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

function hasUniqueWords(sent) {
    let checkArr = new Set([])
    let sentArr = sent.split(" ")
    console.log(sentArr)
    for (i = 0; i < sentArr.length; i++) {
        checkArr.add(sentArr[i])
    }
    return (sentArr.length === checkArr.size)
}

console.log(hasUniqueWords("there are sponges in my head, and they're green with the flavor of lime Kool-aid"))
console.log(hasUniqueWords("there are sponges in my head, and they are green with the flavor of lime Kool-aid"))
// function doubleIt(num){
//     return num * 2
// } 

// const doubleIt = function myFun (num){
//     return num * 2
// }

const doubleIt = num => num * 2 //es6 a arrow er maddome ekline a kora jai
const add = (x, y) => x * y  // ekadhik paramiter thakle braket diye korte hoi
const add2 = () => 20 * 2 //parameter cara o kora jai
const add3 = (x, y) => {
    const sum = x + y
    const diff = x - y
    const result = sum * diff
    return result  // opore jehtu x y er arekta function kora ace tai return korte hobe
}

const result = doubleIt(10)
const result2 = add(7, 5)
const result3 = add2()  //output er jonno bracket dite hobe
const result4 = add3(7, 5)
console.log(result4)
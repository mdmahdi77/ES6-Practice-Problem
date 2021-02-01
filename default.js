function add(num1, num2 = 20){


    //tricks-2
    // num2 = num2 || 0

    //tricks-1
    // if(num2 == undefined){
    //     num2 = 0
    // }
    return num1 + num2
}
const total = add(12, 1)
console.log(total)
const age = [12, 13, 54, 25, 12]
const age2 = [43, 23, 87]
const age3 = [65, 55, 23, 18]
const allAges = age.concat(age2).concat([10]).concat(age3) // 10 add korar jonno evabe kora jai
// const allAges2 = [age, age2, 10, age3]  //evabe korle age gula alada alada vabe dekhabe
const allAges3 = [...age, ...age2, 10, ...age3]// ...threedots diye es6 er maddome sohoje kora jai

const business = 450
const minister = 350
const sochibTaka = 200
const takaPoisha = [450, 250, 690, 290]
// const maximum = Math.max(business, minister, sochibTaka)
const maximum = Math.max(...takaPoisha)  /// array er modde theke max num ber korte hole ...threedots dite hobe
console.log(maximum)
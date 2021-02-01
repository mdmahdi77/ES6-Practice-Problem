class Parent{
    constructor(){
        this.fatherName = 'Sahid Ali'
    }
}

class Child extends Parent{
    constructor(name){
        super() // parent ke extends korte hole obobsoi super() call korte hobe
        this.name = name
    }
    getFullName(){
        return this.name + ' ' + this.fatherName  //ekhane function na dileu hobe 
    }
}

const baby = new Child('Mahim')
const baby2 = new Child('Mehedi')
console.log(baby.getFullName())
console.log(baby2.getFullName()) //getFullName() evabe bracket diye call korte hobe
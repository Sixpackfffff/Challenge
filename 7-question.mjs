class Human {

    constructor(name,age) {
        this.name = name
        this.age = age
    }
    say() {
        return 'My name is ' + this.name + '. ' + 'I am' + this.age + ' years old.'   
}
}

const Gon = new Human('Gon',10)
const Kirua = new Human('Kirua',11)

console.log(Gon.say())
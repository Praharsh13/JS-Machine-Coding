//Function name starts with capital letter shows it is the constructor

function Student(name , age){
    this.name=name
    this.age=age

    this.greet= function(){
        console.log(`Student ${name} and age is ${age} registered successfully`)
    }

}

const studentOne= new Student("Praharsh",29)
const studentTwo= new Student("Pranjal",30)

studentOne.greet()
studentTwo.greet()
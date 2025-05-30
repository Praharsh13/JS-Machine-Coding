//Call use to explicit binding of this to the function.


//object
const name={
    firstName:"Praharsh",
    lastName:"Pranjal"

}

//function
let fulInformation=function(hometown,company){
    console.log(`My full name is ${this.firstName} ${this.lastName} and hometown is ${hometown} and working in ${company}`);

}



//borrowing function with the object
fulInformation.call(name,"Delhi", "Amazon")



/**
 * bUT if we see other example here that is arrow function
 * arrow function , in which when "this" keyword is use , it will refer to parent scope 
 * 
 * Example:
 */
const foo=()=>{
    console.log(this.name)
 }

 foo.call({name:'John'})

 //The output is undefined as here this refer to global object which is window here
 //but if we change to normal function it will give John

//---------------------------------------------------------------------------------------------------------------------------------
//Apply method 
//This also doingb the same work but the difference is when in apply we are passing the arguments , we need
//to pass the array list 

const fullName={
    firstName:"Praharsh",
    lastName:"Pranjal"

}

const info=function(salary,location){
    console.log(`My full name is ${this.firstName} ${this.lastName} working in ${location} with salary ${salary}`)
}


info.apply(fullName,["45000 pounds","liverpool"])



//Bind function 
//This will also do the same but it will return the copy of function with bind

const fulName={
    firstName:"Praharsh",
    lastName:"Pranjal"

}

const infom=function(salary,location){
    console.log(`My full name is ${this.firstName} ${this.lastName} working in ${location} with salary ${salary}`)
}


const bindFun=info.bind(fulName,"45000 pounds","liverpool")

bindFun()
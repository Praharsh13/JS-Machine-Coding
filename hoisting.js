/**
 * This is the concept of taking all variable of javascript on the top before the execution 
 */

// 1. Hoisting in term of Var

// console.log(a)   

// var a=10

//Ouput is undefined

// 2. Hoiting in terms of Let and const

// console.log(b)

// let b=10

//This will throw error as in let and const the variable is hoisted but they are in 
//Temporal dead zone, before they are initialised


hi()

function hi(){
    console.log("Hello")
}

//Here output is hello 
//in this function is already hoisted 


//4. function expression will be hoisted samme as var  give undefined
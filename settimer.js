// How to execute object with binding it with content using setTimer function



const person={
   // name:"Praharsh",
    greet: function(name){

        console.log(`Hello ${this.name}. You are getting Job soon`)

    }
}


console.log(" First text");
setTimeout(()=>(person.greet.bind("pp")),1000)
console.log("Second text");
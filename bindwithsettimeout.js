//In this we will see one concept why we use bind 


const john={
    name:"John Doe",
    satName:function(){
        console.log(`My name is ${this.name}`)
    }
}


const praharsh={
    name:"Praharsh",
    satName:function(){
        console.log(`My name is ${this.name}`)
    }
}


praharsh.satName()// this simply give Praharsh

praharsh.satName.call(john) //this manipulate the content to John Doe

const fun=praharsh.satName.bind(john) //this will also bind the function so after set timer the content is not lost and only 
//undefined will show

setInterval(fun,3*1000)
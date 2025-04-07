//Throttle is the concept that restrict the API call for period of time , say when we call function for first time 
//Then it restrict the function for period of time so that if user call function again , it will work after certain period of time
//There use case like payment gateway , some time saving 


function throttle(fn,delay){   //making throttle function taking callback function and delay
    let lastCall=0;            //defining last call 
    return function(...args){   //returning function with argument
        const now=Date.now()
        if(now-lastCall<delay){
            return
        }  //if the call is less then delay , do nothing

        lastCall=now;
        return fn(...args)
    }
}


const slowChat=(chat)=>{
    console.log(chat)
}

let slowChatfunction=throttle(slowChat,1000);
slowChatfunction("Hi my name is Praharsh");
slowChatfunction("Hi")
slowChatfunction("Hello")
slowChatfunction("My name")
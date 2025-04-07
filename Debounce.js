/* This concept of debounce is use to restrict the API calls , means api will call after certain period of time 
and all other calls time will restrict,
For example: if we are calling any button many times , only last call will go and all other will be rejected.
Same goes with google search , when we are continuously searching , we will not get any suggestion but once we wait
for millisecond we got some suggestion
*/


function debounce(fn,delay){
    let timerId;

    return function(...args) {      //this will return the function
      clearTimeout(timerId)     //clear the timer that was previously going
      timerId=setTimeout(()=>{
        fn(...args)
      },delay)
    }   

    //again set the timer
}




//This is function query we are searching which is call back to another function
const search=(query)=>{
    console.log(`searching for ${query}`)
}

const searchwithdebounce=debounce(search,1000);
searchwithdebounce("Hi");
searchwithdebounce("Hello")
searchwithdebounce("Heloo my name")
searchwithdebounce("Hello my name is Praharsh") // will take the last request
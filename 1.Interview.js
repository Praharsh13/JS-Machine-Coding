//Design the function that call api , if it false it will try again with some delay
//Basically to retry with certain times


function fetchData(statusCode, count){
    return new Promise((res,rej)=>{
        const api={name:"Praharsh", job:"Full tIME"}
        if(statusCode==200)
        {
            res(api)
        }
        else{
            rej(`Error in fetching with count ${count}`)
        }
    })
}


const apiRetry=(callback, delay, retries)=>{

    if(retries==0){
        return
    }
    
    let count=retries-(retries-1)
    let apiCall = callback(201,count)
    apiCall
   .then((vale)=>console.log(`get value successfull ${vale.name}`))
   .catch((e)=>{
    console.log(e)
      setTimeout(()=>apiRetry(callback,delay,retries-1),delay)
   })

}

apiRetry(fetchData,2000,3)
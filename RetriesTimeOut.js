//Here we will do the practice of retries and timeOut of calling api call

const { request } = require("http")

async function apiCall(url,retries,timeOutMs){
    for(let attempt=0;attempt<=retries;attempt++){
        let controller=new AbortController() //this is the in build class have 
        // //2 objects {
            //controller.abort = to abort the request
            //controller.signal = to get the abort signal
        // }

        let timer=setTimeout(()=>controller.abort(),timeOutMs)

        try{
            let res= await fetch(url,{signal:controller.signal})

            if([429,502,503,504].includes(res.status) && attempt< retries){
                await new Promise((resolve)=>setTimeout(resolve,500*(attempt+1)))
                continue
            }

            if(!res.ok){
                throw new Error(`HTTP ${res.status}`)
            }
            return await res.json()

        }catch(e){

            if(attempt<retries){
                await new Promise((resolve)=>setTimeout(resolve(),500*(attempt+1)))
                continue
            }
            throw e
        }
        finally{
            clearTimeout(timer)
        }
    }
}


apiCall("https://jsonplaceholder.typicode.com/todos/1",2,8000)
.then((data)=>console.log(data))

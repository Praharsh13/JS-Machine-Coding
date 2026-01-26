//1. Fetch an endpoint api from promise and show the response 
//Note that :Api resonse is also in Json format


const apiPromise= new Promise((response,reject)=>{
    const apiResonse= {
        name:"Praharsh",
        age:29    
    }

    let statusCode=200

    if(statusCode==200){
        response(apiResonse)
    }
    else{
        reject("Error in fetching data")
    }
})

apiPromise

.then((response)=>{
    console.log(`1 data response is ${response.name}`)
})
.catch((e)=>console.log(`1. error is ${e.message} `))
.finally(()=>console.log(`My promose work here`))

console.log("-------------------------------2. Promise All ---------------------------------------------------------------")


// 2. Promise.all()
//Runs promise in parallel , return result only when all resolved in array otherwise all fail
//If one fail all fail

const p1= Promise.resolve("First")
const p2= new Promise((res,rej)=> setTimeout(()=>rej("Second"),1000))
const p3= Promise.resolve("Third")


Promise.all([p1,p2,p3])
.then((values)=>console.log(`2. Promise all worked if all are trie $(values)`))
.catch((err)=>console.log(err))


console.log("-------------------------------3. Promise allSettled ---------------------------------------------------------------")
//3 Promise.allSettled 
//Also worked and ren promise in parallel
// Give anwer in an array weather it is fullfiled or reject


const p4= Promise.resolve("Success")
const p5= new Promise((res,rej)=> setTimeout(()=>rej("Faliure"),1000))
const p6= Promise.resolve("Success")


Promise.allSettled([p4,p5,p6])
.then((value)=>console.log(`3. Promise allSettled worked if all are trie ${value}`))
.catch((err)=>console.log(err))

console.log("-------------------------------4. Promise race ---------------------------------------------------------------")
//4 Promise.race()
//Whicherver promise is finishede first(success or faliure)

const p7= new Promise((res,rej)=> setTimeout(()=>rej("Fast"),1000))
const p8= new Promise((res,rej)=> setTimeout(()=>res("Slow"),100))

Promise.race([p7,p8])
.then((value)=>console.log(`4. Promise allrace worked if we get the first promise ${value}`))
.catch((err)=>console.log(err))


console.log("-------------------------------5. Promise  Any ---------------------------------------------------------------")

//5. Promise.any
//Run the first fullfilled promise
//iF Reject  ALL THROW Aggregator error
const p9= new Promise((res,rej)=> setTimeout(()=>rej("Fast"),1000))
const p10= new Promise((res,rej)=> setTimeout(()=>res("Slow"),100))

Promise.any([p9,p10])
.then((value)=>console.log(`5. Promiseany worked if we get the first promise fulfilled ${value}`))
.catch((err)=>console.log(err))
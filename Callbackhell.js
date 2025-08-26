//Call back hell is nesting asyncronous function one another
const err= 9
const user={

    name : "Praharsh",
    shortlistItem:{
        name:"shirt",
        price:10

    },
    previousOredr:["pant","shirt","tie"],

    cost: 600


    
}

//Start with callback function


function getUser(user,callback){
    return callback(user.name)
}

function getPreviousOrder(order,callback){
    return callback(order[0])
}

function getItemDetail(shortlistitem,callback){
    return callback(shortlistitem.name)
}


function getPrice(price,callback){
   callback(price)
}

//Callback
getUser(user,(name)=>{
   console.log(`1. user is ${name}`)

   getPreviousOrder(user.previousOredr,(order)=>{
    console.log(`2. Order is ${order}`)

    getItemDetail(user.shortlistItem,(item)=>{
        console.log(`3. Item to be ordered name ${item}`)

        getPrice(user.cost,(price)=>{
            console.log(`4. Price is ${price}`)
        })
    })


   }
   
   )


})
console.log("------------------------------------------------------------------------------------------------------------------")

// Using Promise for Above 

function getnewUser(user){
    return new Promise((resolve, reject)=>{
        if(err==5){
            reject(err)
        }
        else{
            resolve(user.name)
        }
    })
}

function getnewPreviousOrder(previousOr){
    return new Promise((resolve, reject)=>{
        if(err==5){
            reject(err)
        }
        else{
            resolve(previousOr[0])
        }
    })
}

function getnewShortlistItem(item){
    return new Promise((resolve, reject)=>{
        if(err==5){
            reject(err)
        }
        else{
            resolve(item.name)
        }
    })
}

function getnewShortlistItem(item){
    return new Promise((resolve, reject)=>{
        if(err==5){
            reject(err)
        }
        else{
            resolve(item.name)
        }
    })
}

function getnewPrice(price){
    return new Promise((resolve, reject)=>{
        if(err==5){
            reject(err)
        }
        else{
            resolve(price)
        }
    })
}

getnewUser(user)
.then((name)=>{console.log(`1. Promise user name is ${name}`)
    return getnewPreviousOrder(user.previousOredr)
})
.then((prevOrde)=>{
    console.log(`2 Promise previous order is ${prevOrde}`)
    return getnewShortlistItem(user.shortlistItem)
})
.then((items)=>{
    console.log(`3 Promise item is ${items}`)
    return getnewPrice(user.cost)

})
.then((pric)=>{
    console.log(`4 promise price is ${pric}`)
})

console.log("------------------------------------------------------------------------------------------------------------------")


//Start with async await  

const fullDetail= async ()=>{
    const userName= await getnewUser(user)
    console.log(`1 Async username is ${userName}`)
    const prItem= await getnewPreviousOrder(user.previousOredr)
    console.log(`2 Async username is ${prItem}`)
}

fullDetail()
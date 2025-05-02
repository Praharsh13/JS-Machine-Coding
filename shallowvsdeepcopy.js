/**
 * Shallow copy only copy the upper or first level of the object 
 * The inner level are still refer to original 
 * So if we change the inner level to something new , it will reflect the original too
 */

let profile={
    name:"Praharsh",
    age:27,
    address:{
        city:"liverpool",
        country:"UK"
    }
}


// 1. Use spread operator to shallow copy

const copyProfile={...profile}
// console.log(copyProfile)
// Output
// {
//     name: 'Praharsh',
//     age: 27,
//     address: { city: 'liverpool', country: 'UK' 
// }

copyProfile.name="Pranjal"
copyProfile.address.city="London"

// console.log(`name is ${copyProfile.name} and city is ${copyProfile.address.city}`)
// Output
// name is Pranjal and city is London
//Here we can see that the changes reflected

//console.log(`name is ${profile.name} and city is ${profile.address.city}`)

//Output
//name is Praharsh and city is London
//Hence the original object is also changed

// 2 Using Assignment operator for shallow copy

const product={
    id:1,
    details:{
        name:"Shirt",
        color:"White"
    }
}

const copyProduct= Object.assign({},product)
// console.log(copyProduct)
// Output
// { id: 1, details: { name: 'Shirt', color: 'White' } }

// 3 Using slice
let arr=[1,2,3,4,5,[6,7]]
let newArr=arr.slice(2)   //slice(strat index, end index(exclusive))
// console.log(newArr)
// Output
// [ 3, 4, 5, [ 6, 7 ] ]


/**
 * Deep copy make fully independent clone without dependencies with the original 
 */

let details={
    name:"Praharsh",
    age:27,
    address:{
        city:"liverpool",
        country:"UK"
    }
}

const newDetails= JSON.parse(JSON.stringify(details))

newDetails.name="Pranjal"
newDetails.address.city="London"
// console.log(`name is ${details.name} and city is ${details.address.city}`)
// console.log(`name is ${newDetails.name} and city is ${newDetails.address.city}`)

// Output
// name is Praharsh and city is liverpool
// name is Pranjal and city is London


//Now we can see it is not changing

//Other method is StructuredClone(obj)

const clone= structuredClone(details)
// console.log(clone)

// Output
// {
//     name: 'Praharsh',
//     age: 27,
//     address: { city: 'liverpool', country: 'UK' }
//   }
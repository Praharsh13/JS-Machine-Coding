/**
 * Say if we want to freeze the object so that no one can change the whole object property
 * We can de it by "Object.freeze(obj)" property
 * Remember this is the shallow copy
 */

const profile={
    name:"Praharsh",
    age:21
}

Object.freeze(profile)

profile.age=27
console.log(profile.age)
//Output is 21 as it will not change



//-------------------------------------------------------------------------------//
/**
 * Now say if we want to freeze only one key so we need to use other property
 */

let user={
    name:"Pranjal",
    status: "Unmarried"
}

Object.defineProperty(user,'status',{
    writable:false,
    configurable:false
})


user.status="Married"
console.log(user)

//Output
//{ name: 'Pranjal', status: 'Unmarried' }
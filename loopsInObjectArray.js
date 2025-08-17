const arr= [1,2,3,4,5,[7,8],9]

const obj={
    name: "Praharsh",
    address:{
        city :"Liverpool" ,
        country:"India"
    },
    age:29,
    motto: "make myself proud"
}


//forEach loop
arr.forEach((i,j)=>{
    console.log(`1. for arr of index ${j} value is ${i}`)
})

console.log("------------------------------------------------------------------------------------------------------------------")

for (const [index,value] of arr.entries()){
    console.log(`2. value of each entry is ${value} and index is ${index}`)
}

console.log("------------------------------------------------------------------------------------------------------------------")


//Here Object.entries function convert this object into [[name,praharsh],[address, city:liverpool....]]
Object.entries(obj).forEach(([key,value])=>{
    console.log(`3. the obj key is ${key} and value is ${value}`)
})

console.log("------------------------------------------------------------------------------------------------------------------")

Object.values(obj).forEach((value)=>{
    console.log(`4.  value is ${JSON.stringify(value)}`)//to make visible of nested objects
})

console.log("------------------------------------------------------------------------------------------------------------------")


Object.keys(obj).forEach((key)=>{
    console.log(`5. the obj key is ${key} and value is ${obj[key]}`)
})


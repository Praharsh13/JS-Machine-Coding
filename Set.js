//Set only take the unique value 

//Defination of set
let mySet
mySet=new Set([1,2,3]);

for(const i of mySet){
    console.log(` 1. my set value is ${i}`)
}

//Add to the set
mySet.add(6)
mySet.add(2)

for(const i of mySet){
    console.log(` 2. my set value after adding 6 and 2 ${i}`)
}

//We can see 2 is not added as 2 is already added befoer

// size
console.warn(`3. size is ${mySet.size}`)

// to check if number is exist in set or not? give boolean
console.log(`4. check if 3 exist in set or not ${mySet.has(3)} `)
console.log(`5. check if 8 exist in set or not ${mySet.has(8)} `)
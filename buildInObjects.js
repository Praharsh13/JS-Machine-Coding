//Date function


const currentDate=new Date(Date.now())
const currentDatenow=new Date()

console.log(`1. todays date is ${currentDate} `)
console.log(`2. todays date with only new date is ${currentDatenow} `)
console.log(`3. todays date with to locale string ${currentDate.toLocaleString()} `)
console.log(`4. todays date with to string ${currentDate.toString()} `)



//Random number generation
const randomNumber=Math.floor(Math.random()*100) //Generate random no 1 to 99
console.log(`5. Random no is ${randomNumber}`)
const arr=[1,2,3,4,5,6,7]

//Slice take 2 aguments one index from where we start delete
// second till when to end , which is not included
//return a new array , old array remain same
//Example
const newArr1=arr.slice(2,6);
const newArr2=arr.slice(3)

console.log(`1. Original array in Slice is ${arr}`);
console.log(`2. newArray in slice is ${newArr1}`);
console.log(`3. newArray 3 in slice is ${newArr2}`)

//Splice is do the changes in the same array 
//It accept 3 arguments 
//1. Start index
//2. Delete count - how much item to delete from start index
//3. Item need to add from start index if any



const newArrs=arr.splice(2,3,9,10);
console.log(`4. Original array in splice ${arr}`);
console.log(`5. new array in splice ${newArrs}`);

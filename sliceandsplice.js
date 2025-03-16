const arr=[1,2,3,4,5,6,7]


const newArr=arr.slice(2,6);

 console.log(arr);
// console.log(newArr);




const newArrs=arr.splice(2,3,9,10);
console.log(newArrs);
//console.log(arr);

for(const  i of arr ){
    console.log(i);
}

for(const i of arr){
    console.log(`for index ${i} element is ${arr[i]}`)
}

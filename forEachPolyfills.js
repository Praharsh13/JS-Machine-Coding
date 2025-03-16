const arr=[1,2,3,4,5,6,7]

// arr.forEach(function(value,index){
//     console.log(`value is ${value} at index ${index}`)
// })


Array.prototype.mfForEach=function(userFun){
    originalArr=this
    for(let i=0;i<originalArr.length;i++){
        userFun(originalArr[i],i);
    }
}


arr.mfForEach(function(value,index){
    console.log(`value is ${value} at index  is ${index}`)
}
)
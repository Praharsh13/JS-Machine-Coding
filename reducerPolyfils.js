const arr=[1,2,3,4,5,6]

//const sum= arr.reduce((acc,reducer)=>acc+reducer)

//console.log(sum)


Array.prototype.myReducer=function(userFun,initialValue){
    let accumulator=initialValue;
    for(let i=0;i<this.length;i++){
        accumulator=accumulator?userFun(accumulator,this[i],i,this):this[i]
    }
    return accumulator
}

const sum=arr.myReducer((acc,cur,i,arr)=>{
    return acc+cur
})

console.log(sum)
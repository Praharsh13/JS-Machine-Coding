const arr=[1,2,3,4,5,6];

//const newArr=arr.map((i)=>i*2);

//console.log(newArr);


Array.prototype.myMap=function(userFun){
    const arr1=[]
    for(let i=0;i<this.length;i++){
        const element=userFun(this[i]);
        arr1.push(element)
    }

    return arr1
}

const newArr=arr.myMap(function(value){
    value=value*3
    return value;
})

console.log(newArr);
const arr= [1,2,3,4,5,6,7,8,9,10]




if(!Array.prototype.myFilter){
    Array.prototype.myFilter=function(callback,){
        if (typeof callback !== "function"){
            throw new TypeError(`${callback} is not a function`)
        }

        let arr1=[]

        for(let i=0;i<this.length;i++){
             
            if(callback(this[i])){
                arr1.push(this[i])
            }
            
        }

        return arr1
    }
}












let filteredArray=arr.myFilter((element)=>{
    return element%2==0
})

console.log(`Filtered array is ${filteredArray}`)
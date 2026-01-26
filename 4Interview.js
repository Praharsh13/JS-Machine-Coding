//Find the missing element in array
// arr=[1,2,3, 5] count =10
//Output=[4,6,7,8,9,10]

let findMissing=(arr,count)=>{
    var j=[]
  for(var i=1;i<=count;i++){

     if(!arr.includes(i)){
        j.push(i)
     }

  }
  return j
}

let arr=[1,2,3,5]

let newArr=findMissing(arr,10)

console.log(newArr)
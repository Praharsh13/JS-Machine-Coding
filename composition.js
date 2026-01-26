//This is the concept in JS where we have lot of function together and we make a composition function
//that take lot of function in pipeline and give the result of accomodated function


let multiply=(...nums)=>{
    return nums.reduce((a,b)=>a*b,1)
}

//console.log(multiply(3,3,5))


let square=(num)=>{
    return num*num
}

//console.log(square(5))


let add3=(num)=>{
    return num+3
}


//Making composition function

let compose=      // making compose function
(...funs)=>              // taking all the functions

(...vals)=>                                  // taking all the values
{
    return funs.reduce((a,b,i)=>i==0?b(...a):b(a),vals)     // as we are working with array multiply take [2,3]
}

let result=compose(multiply,square,add3)

console.log(result(2,3))
// Proxy is the concept in JS which can come very handy when required


const user={
    name:"Praharsh Pranjal",
    email:"praharsh.pranjal13@gmail.com",
    password:1234
}

//here target is user and props are key like name, email, password
const userProxy=new Proxy(user,{
    get(target,props){
        if(props=='password'){
            throw new Error("Access Denied")
        }

        return target[props];
    }
})
console.log(userProxy.name)


// We need to write a proxy for array as if user provide negative index of array , it return the elemenet corresponding to the last

const arr=[1,2,3,4,5,6,7,8,9,10];

function negativeIndex(arr){
    return new Proxy((arr),{
        get(target,prop){
            const index=Number(prop)
                if(index<0){
                return target[target.length+index];
            }
        return target[index];
        },

        set(target,prop,value){
            const index=Number(prop);
            if(index<0){
                return target[target.length+index]=value
            }
            return target[index];
        }
        
    })
}
//This concept change in exact  array and new array point to that reference. 
const newArr= negativeIndex(arr);
console.log(newArr[-1])
console.log(newArr[-4]=155);
console.log(newArr);
console.log(arr);
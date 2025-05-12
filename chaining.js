/**
 * To build a function like computeAmount()
 * .lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value(), 
 * you need to implement a fluent interface (also known as method chaining).
 */




const computeAmount=()=>{
    let totalAmount=0

    const chain={
        lacs:(amount)=>{
            totalAmount=totalAmount+(amount*100000)
            return chain
        },

        crore:(amount)=>{
            totalAmount=totalAmount+(amount*100000000)
            return chain
        },

        thousand:(amount)=>{
            totalAmount=totalAmount+(amount*1000)
            return chain

        },
        value:()=>{
            console.log(`Total amount is ${totalAmount}`)
        }
        

    }

    return chain
}

computeAmount()
 .lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value()

 //In this we will make function and return object and each object , we will return the object
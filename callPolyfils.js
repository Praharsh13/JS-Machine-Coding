const car={
    color:"Red",
    company:"ferari"

}

function purchaseCar(currency,price){
    console.log(`I bought a car of ${this.color} of company ${this.company} of ${currency} ${price}`);
}

Function.prototype.myCalls=function(context={},...args){
    if(typeof this !=="function"){
        throw new Error(this +"It is not a callback")
    }

    context.fn=this
    context.fn(...args)
}

//purchaseCar.call(car,"pound",1200000)

purchaseCar.myCalls(car,"dollar",1300000)
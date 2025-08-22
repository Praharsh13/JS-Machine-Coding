//As we know the inheritence in constructor function can be done using prototyping inheritence.

//Example of that:

//1. Created a constructor function
function Vehicle(make){
    this.make=make
}

//2. Add method to constructor through prototyping
Vehicle.prototype.start= function(){
    console.log(`Startig with ${this.make} vehicle`)
}

//3. Make another constructor function Car  and and extend vehicle by calling and Vehicle.call

function Car(make, model){
    Vehicle.call(this,make)
    this.model=model
}

//4. Establised inheritence relationship

Car.prototype=Object.create(Vehicle.prototype)

const myCar=new Car("toyota","camry")
myCar.start()
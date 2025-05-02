

/**
 * Closure
 * This is the concept in JS that take the and use variable of the outer function even if it is executed
 * This is one of the important concept in js as it will enhance the security as user dont even know that
 * they ahce variable comming from outer function
 * Mainly chaild function use the lexical scoping of parent function even after there execution
 * 
 * 
 * Use for factories function
 * Use for data privacy
 * Example Throttle, Debounce
 */


function increaseCount(){
    let count =0
    return function(add){
        console.log(count=count+add);
    }
}

const increament=increaseCount()
increament(2)  // 2
increament(3)  // 5
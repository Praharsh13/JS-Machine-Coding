// Hash Tag generator for given string


let generateHashtags= (str)=>{

    if(str.length===0 || str.length>=280){
        return false
    }

    let strArr=str.split(" ")
    let hashTag="#"
    strArr.forEach((word)=>{

        let capital=word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase()
        hashTag=hashTag+capital
       

        

        


    })
    return hashTag

    
}


console.log(generateHashtags("learn javascript with praharsh"))
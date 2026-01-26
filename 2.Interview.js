//FInd the longest word in given sentenses

let longestWord=(sentense)=>{
    if(sentense.trim().length===0){
        return false
    }

    let senArr= sentense.split(" ") // Gives you the array collecting each word
    let count=0;
    let word=""
    senArr.forEach((i)=>{
        if(count<i.length){
            count=i.length
            word=i
        }
    })

    return word
}

console.log(longestWord('Watch Pranjal TechnicAL JavaScript couse on github'))


//Other way

let longestWor=(sentense)=>{
    if(sentense.trim().length===0){
        return false
    }

    let senArr= sentense.split(" ") // Gives you the array collecting each word
    let longWord=senArr.sort((a,b)=>a.length-b.length) // sort in form of assending ,//b-a in form of desending
    return longWord.at(-1)
    

   
}
const fs=require('fs');
const fsv2=require('fs/promises')

//First we we will start to do asynchronous operation with the help of callback function

//Callback 

console.log("Starting the program");

fs.readFile('./hello.txt','utf-8',function(err,content){
    if(err){
        console.log("Error in reading the file")
    }else{
        console.log("Read file successfully ",content)
    }
    fs.writeFile('backup.txt',content,function(err){
        if(err){
            console.log("Error in writing backup", err)
        }else{
            fs.unlink('./hello.txt',function(e){
                if(e){
                    console.log("Error in deleting file",e)
                }
                else{
                    console.log("File deleted ")
                }
            })
        }
    })
})

console.log("Ending the program");

//this is call back program of deleting the file ut the problem here is that we calling calling callback under callback ,
//more use of this will cause the call back hell as in each callback , there is new callback call 


//Now we will try to do this with promises

//Promises



fsv2.readFile('./hello.txt','utf-8')
.then((content)=>fsv2.writeFile('backup.txt',content))
.then(()=>fsv2.unlink('./hello.txt'))
.catch((e)=>console.log('Error',e))




//Promisification  means converting the leagacy callback code to promises and then taking result and accessing then catch

function readFileWithPromises(filename,code){
    return new Promise((resolve,reject)=>
      fs.readFile(filename,code,(err,content)=>{
        if(err){
            reject(err)
        }
        else{
            resolve(content)
        }
      }
      )
    )
}

function writeFileWithPromises(newfile,content){
    return new Promise((resolve,reject)=>{
        fs.writeFile(newfile,content,(e)=>{
            if(e){
                reject(e)
            }
            else{
                resolve()
            }
        })
    })
}


function deleteFileWithPromises(filename){
    return new Promise((resolve,reject)=>{
        fs.unlink(filename,(e)=>{
            if(e){
                reject(e)
            }
            else{
                resolve()
            }
        })
    })
}

readFileWithPromises('./hello.txt','utf-8')
.then((content)=>writeFileWithPromises('./backup.txt',content))
.then(()=>deleteFileWithPromises('./hello.txt'))
.catch((e)=>console.log('Erroe',e))
.finally(()=>console.log("I will work anyhow"))


//We can do it by async await as this is only a synsathic sughar as first await will work after that only other thing work


async function toDotask(){

    const content = await readFileWithPromises('./hello.txt','utf-8')
    await writeFileWithPromises('./backup.txt',content)
    await deleteFileWithPromises('./hello.txt')

}
let myName= document.getElementsByClassName("my-name")[0]
let btn=document.getElementsByClassName("my-btn")[0]

function fontSixe(size){
    function changeSixe(){
        myName.style.fontSize=`${size}px`;
    }

    return changeSixe
}




let size12=fontSixe(12)
let size16=fontSixe(16)
let size20=fontSixe(60)

btn.addEventListener("click",size12)
var chopper = document.getElementById("chopper")
var button =document.getElementsByClassName("buttoned")
console.log(button)
chopper.innerHTML = "Motion Designer"
let hasRun = false





function changetoDes(){
        chopper.innerHTML = "Graphic Designer"
        console.log("changed to designer")
}

function changetoUx(){
        chopper.innerHTML = "Web Designer"
        console.log("changed to web")
}


function callerOthers(){
        if(chopper.innerHTML = "Motion Designer"){
                
                setTimeout(changetoDes,3000)

        }
}

function callTheSecond(){
        
        if(chopper.innerHTML = "Graphic Designer" ){
                        setTimeout(changetoUx,3000)
                        console.log("naassd")
                        
        
                }
        
}




callerOthers()














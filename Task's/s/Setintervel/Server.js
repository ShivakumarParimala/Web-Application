const displayValue =document.getElementById('displayValue').innerHTML
let c
 let count=0
 function startwatch(){
    startbtn.disable=true
    c=setInterval(()=>{
        count=count+1
        displayValue,innerHTML=count
    },1000)
 }
 function stopwatch(){
    clearInterval(c)
    startbtn.disbled=false
 }
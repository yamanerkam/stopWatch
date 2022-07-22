console.log("yes")

const start = document.getElementById("start")
const stop  = document.getElementById("stop")
const reset = document.getElementById("reset")

var hour = document.getElementById("hour")
var min = document.getElementById("min")
var sec = document.getElementById("sec")
sec.textContent="00"
var numS = 0
var numM = 0
var numH = 0 


function zeroCheck(number,place){
  if(number >= 10){
    place.textContent=number
  }
  else if( number>=0 || number<10){
    place.textContent=`0${number}`
  }
}


stop.disabled = true;
reset.disabled=true
var setter = null
function myTimer() {
  numS+=1
  if(numS==60){
    sec.textContent=0
    numH+=1
    zeroCheck(numH,min)
    numS=0
  }else{
    zeroCheck(numS,sec) 
  }

  if(numH==60){
    min.textContent="00"
    numM+=1
    zeroCheck(numM,hour)
    numH=0
  }
  

}

function disableButtons(a,b,c){
  start.disabled = a;
  stop.disabled = b;
  reset.disabled = c;
}

start.addEventListener("click",()=>{
  disableButtons(true,false,false)
  
  setter=setInterval(myTimer, 1000);
})

stop.addEventListener("click",()=>{
  disableButtons(false,true)
  clearInterval(setter);
})

reset.addEventListener("click",()=>{
  disableButtons(false,true,true)
  sec.textContent="00"
  min.textContent="00"
  hour.textContent="00"
  numS=0
  numH=0
  numM=0
  clearInterval(setter);
  
})

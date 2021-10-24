
let tens= 0;
let sec = 0;
let interval;
let appendTens=document.getElementById('tens');
let appendsec=document.getElementById('sec');
let buttonStart=document.getElementById('start');
let buttonStop=document.getElementById('stop');
let buttonReset=document.getElementById('reset');
function startTimer(){
    tens++;
    
    if(tens<9){
        appendTens.innerHTML='0'+tens;

    }
    if(tens>9){
        appendTens.innerHTML=tens;

    }
    if(tens>60){
        sec++;
        appendsec.innerHTML="0"+sec;
        tens=0;
        appendTens.innerHTML="0"+0;

       
        
    }
    if(sec>9){
        appendsec.innerHTML=sec;

    }
    

}
buttonStart.onclick=function (){
    interval=setInterval(startTimer);
}

buttonStop.onclick=function(){
   clearInterval(interval);
}
buttonReset.onclick=function(){
    clearInterval(interval);
    tens="00";
    sec="00";
    appendTens.innerHTML=tens;
    appendsec.innerHTML=sec;

 }

function reset(){
    
}


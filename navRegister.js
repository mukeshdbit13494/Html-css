var ai=document.getElementById("fieldset1");
var pi=document.getElementById("fieldset2");
pi.style.display="none";
function fieldset1(){
    if(ai.style.display==="block")
    {
        ai.style.display="none";
        pi.style.display="block";
    }
    else{
        ai.style.display="block";
        pi.style.display="none";
    }
}
function fieldset2(){
    if(pi.style.display==="none")
    {
        pi.style.display="block";
        ai.style.display="none";
    }
    else{
        pi.style.display="none";
        ai.style.display="block";
    }
}
function next(){
   ai.style.display="none";
   pi.style.display="block";
}

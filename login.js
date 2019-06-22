var btn=document.getElementById('btn-login');
    btn.style.display="none"
function myFunction(){
    var div=document.getElementById('content');
    
    if(div.style.display==="block"){
        div.style.display="none"
        btn.style.display="block"
    }
    else{
        div.style.display="block";
        btn.style.display="none"
    }
}

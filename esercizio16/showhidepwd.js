function showHide(){
    let pwd=document.getElementById("pwd")
    if(pwd.type=="password"){
        pwd.setAttribute("type", "text")
    }
    else{
        pwd.setAttribute("type", "password")
    }
}
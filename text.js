function changeText(){
    let text=document.getElementById("text");
    if(text.innerText!="Hello, Javascript!"){
    text.innerText="Hello, Javascript!";
    }
    else{
        text.innerText="I'M BACK!";
    }
}
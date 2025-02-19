function invertText(){
    let word=document.getElementById("para")
    console.log(word.innerText.length)
    let memory="";
    let length=word.innerText.length-1;
    for(let i=0; i<word.innerText.length; i++){
        memory=memory+word.innerText.charAt(length)
        length--;
    }
    word.innerText=memory;
}
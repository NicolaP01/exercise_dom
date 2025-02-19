window.onload=createUl;
function createUl(){
    let body=document.getElementById("body")
    let ul=document.createElement("ul")
    ul.id="ul";
    body.appendChild(ul);
}

function createLi(){
    let ul=document.getElementById("ul")
    let li=document.createElement("li")
    let text=document.getElementById("text")
    //let content=text.value.trim()
    li.innerText=text.value;
    ul.appendChild(li);
}
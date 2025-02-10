function addElement(){
    let page=document.createElement("p");
    let text=document.createTextNode("Questo e' un paragrafo")
    page.appendChild(text);
    let content=document.getElementById("content")
    content.appendChild(page)
}
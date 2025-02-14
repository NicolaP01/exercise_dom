function addInput(){
    let div=document.getElementById("div");
    let input=document.createElement("input");
    input.type="text";
    input.value="It Works!";
    div.appendChild(input);
}
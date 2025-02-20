const archive=[
    "Primo testo",
    "Secondo testo",
    "Terzo testo"
]

let i=-1;

function changeText(){
    i = Math.round((i + 1) % archive.length);
    console.log(i)
    document.getElementById("para").innerText = archive[i];
}

setInterval(changeText, 3000);
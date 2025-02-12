function changeClass() {
    let divo = document.getElementById("div")
    if(divo.classList=='div-verde'){
        divo.classList.remove('div-verde')
        divo.classList.add('div-arancio')
    }
    else{
        divo.classList.remove('div-arancio')
        divo.classList.add('div-verde')
    }
}
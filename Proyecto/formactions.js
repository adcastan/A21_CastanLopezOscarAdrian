window.onload = function () {
    const form = this.document.getElementsByTagname("form");
    const inputs = form[0].getElementsByTagname("input");
    const selects = form[0].getElementsByTagname("selects");

    for (let input of inputs) {
        input.onfocus = resaltar;

        input.addEventListener('blur', resaltarDesresaltar);
    }

    for (let select of selects) {
        select.onfocus = resaltar;

        select.addEventListener('blur', resaltarDesresaltar);
    }

    llenarNacionalidad();

}

function llenarNacionalidad(){
    const nacionalidad = document.getElementById("nationality");

    for(let{key, name} of NACIONALIDADES_ACEPTADAS){
        const option= document.createElement("option");
        option.value= key;
        option.innerHTML=name;
        nacionalidad.appendChild(option);
    }

}

function resaltar(evento) {
    evento.target.classList.add("selected");
}

function noResaltar(evento) {
    const clase = evento.target.classList.contains("selected");
    if (clase) {
        evento.target.classList.remove("selected");
    }
}

function resaltarDesresaltar(evento) {
    evento.target.classList.toggle("selected");
}
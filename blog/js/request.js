//FETCH API
const contenido1 = document.querySelector("#contenido1");
const traer1 = () => {
    fetch("https://randomuser.me/api")
        .then(res => res.json())
        .then(data => {
            contenido1.innerHTML = `
                    <img src="${data.results["0"].picture.large}" width="200px" class="img-fluid rounded-circle">
                    <p class="display-4"> Nombre: ${data.results["0"].name.last}</p>
                    <p class="display-4"> Celular: ${data.results["0"].cell}</p>
                    `
        })
}

// FETCH JSON
const contenido2 = document.querySelector("#contenido2");
function traer2() {
    fetch('../json/tabla.json')
        .then(res => res.json())
        .then(datos => {
            tabla(datos)
        })
}
function tabla(datos) {
    for (let valor of datos) {
        contenido2.innerHTML += `
                
                <tr>
                    <th scope="row"> ${valor.id} </th>
                    <td> ${valor.nombre} </td>
                    <td> ${valor.email} </td>
                    <td> ${valor.estado ? "Active" : "Desactivate"} </td>
                </tr>

                `
    }
}
// AJAX JSON
document.querySelector("#boton").addEventListener("click", traerDatos)

function traerDatos() {

    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "../json/tabla.json", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            //console.log("Estado");
            let datos = JSON.parse(this.responseText);
            console.log(datos);
            let res = document.querySelector("#respuesta")
            res.innerHTML = ""

            for (let valor of datos) {
                res.innerHTML += `
                <tr>
                    <th scope="row">${valor.id}</th>
                    <td>${valor.nombre}</td>
                    <td>${valor.email}</td>
                    <td>${valor.estado ? "Habilitado" : "Deshabilitado "}</td>
                </tr>
                `
            }

        }
    }
}
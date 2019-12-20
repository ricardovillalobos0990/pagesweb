// ANIMACION PARA LOS TITULOS
document.addEventListener("DOMContentLoaded", () => {
    const imgLightbox = document.querySelectorAll(".materialboxed");
    M.Materialbox.init(imgLightbox, {
        inDuration: 500,
        outDuration: 500
    });
});
const nav = document.getElementById("toggleNav");
nav.addEventListener("click", cambiarIcono);
var contador = 0;
function cambiarIcono() {
    if (contador == 0) {
        nav.innerHTML = "&#9747";
        contador = 1;
    } else {
        nav.innerHTML = "&#9777";
        contador = 0;
    }
}
// IMAGENES TITULACIONES CON CICLO 
var imagenes = [
    {
        "id": "edteam.jpg",
        "descripcion": "CSS Desde Cero - EDTEAM"
    },
    {
        "id": "platzibasic.jpg",
        "descripcion": "Programacion Basica - PLATZI"
    },
    {
        "id": "platzigit.jpg",
        "descripcion": "Git y GitHub - PLATZI"
    },
    {
        "id": "platziing.jpg",
        "descripcion": "Ingenieria de software - PLATZI"
    },
    {
        "id": "mecdice.jpg",
        "descripcion": "Mantenimiento de Equipos - SENA CTA"
    },
    {
        "id": "excel.jpg",
        "descripcion": "Excel - Sena CTA"
    },
    {
        "id": "word.jpg",
        "descripcion": "Word - Sena CTA"
    },
    {
        "id": "proyectos.jpg",
        "descripcion": "Proyectos en mi profesion - Sena CTA"
    },
    {
        "id": "adminjunior.jpg",
        "descripcion": "Administracion de sistemas - UDEMY"
    },
    {
        "id": "adminserver.jpg",
        "descripcion": "Administracion Windows Server - UDEMY"
    },
    {
        "id": "hyperv.jpg",
        "descripcion": "Administrando Hyper V - UDEMY"
    },
    {
        "id": "powershell.jpg",
        "descripcion": "Windows Power Shell - UDEMY"
    },
    {
        "id": "ccna_discovery_I.jpg",
        "descripcion": "Networking for Home - CCNA"
    },
    {
        "id": "ccna_discovery_II.jpg",
        "descripcion": "Networking for Business - CCNA"
    },
    {
        "id": "ccna_in_I.jpg",
        "descripcion": "Routing and Switching I - CCNA"
    },
    {
        "id": "ccna_rys_II.jpg",
        "descripcion": "Routing and Switching II - CCNA"
    },
    {
        "id": "ccna_nb_III.jpg",
        "descripcion": "Routing and Switching III - CCNA"
    },
    {
        "id": "ccna_ryp_IIII.jpg",
        "descripcion": "Routing and Switching IV - CCNA"
    },
    {
        "id": "googleactivate1.jpg",
        "descripcion": "Desarrollo WEB I - GOOGLE ACTIVATE"
    },
    {
        "id": "googleactivate2.jpg",
        "descripcion": "Desarrollo WEB II - GOOGLE ACTIVATE"
    }
]
var galeria = document.getElementById("galeria");
var bandera = 0;
for (datos of imagenes) {
    galeria.innerHTML += `
    <div class="col s12 m4 l3">
        <div class="material-placeholder">
            <img src="images/qualifications/${imagenes[bandera].id}" class="responsive-img materialboxed" alt=""
                data-caption="${imagenes[bandera].descripcion}">
        </div>
    </div>
`
    bandera++;
}
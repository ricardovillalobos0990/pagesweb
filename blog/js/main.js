// ANIMACION PARA LOS TITULOS
document.addEventListener("DOMContentLoaded", () => {
    const imgLightbox = document.querySelectorAll(".materialboxed");
    M.Materialbox.init(imgLightbox, {
        inDuration: 500,
        outDuration: 500
    });
});
//ANIMACION PARA LA BARRA DE MENU
$(function () {
    var header = document.getElementById('header');
    var headroom = new Headroom(header);
    headroom.init();
});

const toggleNav = document.getElementById("toggleNav");
toggleNav.addEventListener("click", cambiarIcono);

var contador = 0;

function cambiarIcono() {
    if (contador == 0) {
        toggleNav.innerHTML = "&#9747";
        contador = 1;
    } else {
        toggleNav.innerHTML = "&#9777";
        contador = 0;
    }
}
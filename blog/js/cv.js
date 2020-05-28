// LOADER DE INICIO
window.addEventListener("load", () => {
  carga();
  function carga() {
    document.querySelector(".hide").classList.remove("hide");
    document.getElementById("loader").className = "hide";
  }
});
// CREACION DE SOUGHNUT CHART JS
const CHART = document.getElementById("myChart").getContext("2d");
Chart.defaults.scale.ticks.beginAtZero = true;
let barChart = new Chart(CHART, {
  type: "pie",
  data: {
    labels: ["Concentracion", "Obediencia", "Precision"],
    datasets: [
      {
        label: "Points",
        backgroundColor: ["#02cd7c", "#013d73", "#0273c3"],
        hoverBorderColor: "#aaeeff",
        hoverBorderWidth: 3,
        data: [33, 34, 33],
      },
    ],
  },
  options: {
    animation: {
      animateScale: true,
    },
    cutoutPercentage: 3,
  },
});
// NAVEGACION MOBILE
const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menu.addEventListener("click", menuMostrar);

function menuMostrar() {
  nav.classList.toggle("mobile-nav");
  menu.classList.toggle("is-active");
}

// IMAGENES TITULACIONES
var imagenes = [
  {
    id: 1,
    name: "edteam.jpg",
    descripcion: "CSS Desde Cero - EDTEAM",
  },
  {
    id: 2,
    name: "platzibasic.jpg",
    descripcion: "Programacion Basica - PLATZI",
  },
  {
    id: 3,
    name: "platzigit.jpg",
    descripcion: "Git y GitHub - PLATZI",
  },
  {
    id: 4,
    name: "platziing.jpg",
    descripcion: "Ingenieria de software - PLATZI",
  },
  {
    id: 5,
    name: "mecdice.jpg",
    descripcion: "Mantenimiento de Equipos - SENA CTA",
  },
  {
    id: 6,
    name: "excel.jpg",
    descripcion: "Excel - Sena CTA",
  },
  {
    id: 7,
    name: "word.jpg",
    descripcion: "Word - Sena CTA",
  },
  {
    id: 8,
    name: "proyectos.jpg",
    descripcion: "Proyectos en mi profesion - Sena CTA",
  },
  {
    id: 9,
    name: "adminjunior.jpg",
    descripcion: "Administracion de sistemas - UDEMY",
  },
  {
    id: 10,
    name: "adminserver.jpg",
    descripcion: "Administracion Windows Server - UDEMY",
  },
  {
    id: 11,
    name: "hyperv.jpg",
    descripcion: "Administrando Hyper V - UDEMY",
  },
  {
    id: 12,
    name: "powershell.jpg",
    descripcion: "Windows Power Shell - UDEMY",
  },
  {
    id: 13,
    name: "it_essentials.jpg",
    descripcion: "IT Essentials - CCNA",
  },
  {
    id: 14,
    name: "ccna_discovery_I.jpg",
    descripcion: "Networking for Home - CCNA",
  },
  {
    id: 15,
    name: "ccna_discovery_II.jpg",
    descripcion: "Networking for Business - CCNA",
  },
  {
    id: 16,
    name: "ccna_in_I.jpg",
    descripcion: "Routing and Switching I - CCNA",
  },
  {
    id: 17,
    name: "ccna_rys_II.jpg",
    descripcion: "Routing and Switching II - CCNA",
  },
  {
    id: 18,
    name: "ccna_nb_III.jpg",
    descripcion: "Routing and Switching III - CCNA",
  },
  {
    id: 19,
    name: "ccna_ryp_IIII.jpg",
    descripcion: "Routing and Switching IV - CCNA",
  },
  {
    id: 20,
    name: "googleactivate1.jpg",
    descripcion: "Desarrollo WEB I - GOOGLE ACTIVATE",
  },
  {
    id: 21,
    name: "googleactivate2.jpg",
    descripcion: "Desarrollo WEB II - GOOGLE ACTIVATE",
  },
  {
    id: 22,
    name: "beginner.jpg",
    descripcion: "Ingles - SENA",
  },
  {
    id: 23,
    name: "responsive-design.jpg",
    descripcion: "Responsive - PLATZI",
  },
  {
    id: 24,
    name: "redux.jpg",
    descripcion: "Redux - PLATZI",
  },
  {
    id: 25,
    name: "react-router.jpg",
    descripcion: "react-router - PLATZI",
  },
  {
    id: 26,
    name: "postcss.jpg",
    descripcion: " Post CSS - PLATZI",
  },
  {
    id: 27,
    name: "jquery-to-javascript.jpg",
    descripcion: "jQuery to JavaScript- PLATZI",
  },
  {
    id: 28,
    name: "fundamentos-javascript.jpg",
    descripcion: "Fundamentos javaScript- PLATZI",
  },
  {
    id: 29,
    name: "desarrollo-web.jpg",
    descripcion: "Desarrollo WEB - PLATZI",
  },
  {
    id: 30,
    name: "cssgridlayout.jpg",
    descripcion: "Css Grid Layout- PLATZI",
  },
  {
    id: 31,
    name: "reactjs.jpg",
    descripcion: "React.js - PLATZI",
  },
  {
    id: 32,
    name: "animaciones-web.jpg",
    descripcion: "Animaciones Para la WEB - PLATZI",
  },
];
// MOSTRAR IMAGENES
const galeria = document.getElementById("qualifications");
var bandera = 0;
for (datos of imagenes) {
  galeria.innerHTML += `
   <div class="modal-container ">
      <img src="./images/qualifications/${imagenes[bandera].name}" alt="">
   </div>
   `;
  bandera++;
}
//ACTIVAR MODAL
document.querySelectorAll(".modal-container img").forEach((imagen) => {
  imagen.addEventListener("click", function (e) {
    e.stopPropagation();
    this.parentNode.classList.toggle("active");
  });
});
//OCULTAR MODAL DESDE CUALQUIER
document.querySelectorAll(".modal-container").forEach((imagen) => {
  imagen.addEventListener("click", function (e) {
    this.classList.remove("active");
  });
});

window.sr = ScrollReveal();

sr.reveal(".navbar", {
    duration: 3000,
    origin: "botton"
});

sr.reveal(".header-content-left, .info-left, .info-two-left", {
    duration: 1000,
    origin: "bottom",
    distance: "400px"
});

sr.reveal(".header-content-right, .info-right, .info-two-right, .info-four-right, .info-four-left ", {
    duration: 800,
    origin: "top",
    distance: "400px"
});

sr.reveal(".container-progress-sm", {
    duration: 800,
    origin: "right",
    delay: 1000
});

sr.reveal(".card", {
    duration: 1500,
    origin: "center",
    reset: true,
    rotate: {
        x: 180,
        z: 180
    }
});

sr.reveal("#progress-sm, #progress-md", {
    duration: 1000,
    origin: "left",
    distance: "100px",
    viewFactor: 0.1
});

sr.reveal("footer, .card-info-five", {
    duration: 2000,
    origin: "bottom",
});

//SMOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
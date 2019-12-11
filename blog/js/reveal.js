window.sr = ScrollReveal();

sr.reveal(".navbar", {
    duration: 1000,
    origin: "botton"
});

sr.reveal(".header-content-left, .info-left, .info-two-left", {
    duration: 1000,
    origin: "left",
    distance: "300px"
});

sr.reveal(".header-content-right, .info-right, .info-two-right ", {
    duration: 1000,
    origin: "right",
    distance: "300px"
});

sr.reveal(".container-progress-sm", {
    duration: 1000,
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

sr.reveal("#progress-sm, #progess-md", {
    duration: 1000,
    origin: "left",
    distance: "300px",
    viewFactor: 0.1
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
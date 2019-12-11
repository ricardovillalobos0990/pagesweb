window.sr = ScrollReveal();

sr.reveal(".navbar", {
    duration: 3000,
    origin: "botton"
});

sr.reveal(".header-content-left, .info-left, .info-two-left", {
    duration: 2000,
    origin: "left",
    distance: "300px"
});

sr.reveal(".header-content-right, .info-right, .info-two-right ", {
    duration: 3000,
    origin: "right",
    distance: "300px"
});

sr.reveal(".container-progress-sm", {
    duration: 3000,
    origin: "right",
    delay: 2000
});

sr.reveal(".card", {
    duration: 3000,
    origin: "center",
    reset: true,
    rotate: {
        x: 180,
        z: 180
    }
});

sr.reveal("#progress-sm, #progess-md", {
    duration: 3000,
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
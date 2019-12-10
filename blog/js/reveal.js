window.sr = ScrollReveal();

sr.reveal(".navbar", {
    duration: 1000,
    origin:"botton" 
});

sr.reveal(".header-content-left", {
    duration: 2000,
    origin:"top",
    distance: "300px"
});

sr.reveal(".header-content-right", {
    duration: 3000,
    origin:"right",
    distance: "300px"
});

sr.reveal(".header-btn", {
    duration: 3000,
    origin:"right",
    delay: 1000
});

sr.reveal("#testimonial", {
    duration: 3000,
    origin:"left",
    distance: "300px",
    viewFactor: 0.099
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
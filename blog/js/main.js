document.addEventListener("DOMContentLoaded", () => {
    const imgLightbox = document.querySelectorAll(".materialboxed");
    M.Materialbox.init(imgLightbox, {
    inDuration: 500,
    outDuration: 500
    });
});
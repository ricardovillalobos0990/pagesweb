var mybutton = document.getElementById("upbtn");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click", topFunction);
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.sr = ScrollReveal();
sr.reveal(".navbar", {
  duration: 1000,
  origin: "center",
  interval: 16,
});

sr.reveal(".header-content-left, .info-left, .info-two-left", {
  duration: 2000,
  origin: "center",
  interval: 16,
  reset: true,
});

sr.reveal(".header-content-right, .info-right, .info-two-right, .info-four-right, .info-four-left ", {
  duration: 1000,
  origin: "bottom",
  interval: 16,
  reset: true,
});

sr.reveal(".container-progress-sm", {
  duration: 1000,
  origin: "center",
  delay: 1000,
  interval: 16,
  reset: true,
});

sr.reveal(".card", {
  duration: 1000,
  origin: "center",
  interval: 16,
  reset: true,
  rotate: {
    x: 180,
    z: 180,
  },
});

sr.reveal(".progress-sm, .progress-md", {
  duration: 1000,
  origin: "center",
  interval: 16,
  reset: true,
});

sr.reveal(".card-info-five", {
  duration: 2000,
  origin: "bottom",
  interval: 16,
  reset: true,
});

//SMOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

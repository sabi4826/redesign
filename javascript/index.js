window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    // Gem pop op
    document.querySelector("#popop").classList.add("hide");

    // Vis pop op når man trykker på pil
    document.querySelector("#pil").addEventListener("click", visPopop);

    // Vis pop op efter 15 sekunder (hvis nu brugeren ikke bruger "pil"-knappen)
    setTimeout(visPopop, 15000);
}

function visPopop() {
    console.log("visPopop");

    // Ryd op
    document.querySelector("#pil").removeEventListener("click", visPopop);

    // Vis pop op
    document.querySelector("#popop").classList.remove("hide");

    // Gør det muligt at lukke pop op
    document.querySelector("#luk").addEventListener("click", lukPopop);

}

function lukPopop() {
    console.log("lukPopop");

    // Ryd op:
    document.querySelector("#luk").removeEventListener("click", lukPopop);

    // Skjul pop op
    document.querySelector("#popop").classList.add("hide");
}

// Kodning til slideshow/anmeldelser

let slideNummer = 1;

visSlides(slideNummer);

function plusSlides(n) {
    visSlides(slideNummer += n);
}

function visSlides(n) {
    let i;
    let slides = document.getElementsByClassName("kunde");
    if (n > slides.length) {
        slideNummer = 1
    }
    if (n < 1) {
        slideNummer = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideNummer - 1].style.display = "block";
}

window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    // Gem pop op
    document.querySelector("#popop").classList.add("hide");

    // Vis pop op når man trykker på pil
    document.querySelector("#pil").addEventListener("click", visPopop);

    // Vis pop op efter 15 sekunder (hvis nu brugeren ikke bruger "pil"-knappen)
    setTimeout(visPopop, 30000);

    // Tryk på burgermenu
    document.querySelector("#menuburger").addEventListener("click", toggelmenu);

    // Tryk på "behandlinger og priser"
    document.querySelector("#behandlinger_knap").addEventListener("click", toggelDropdown);
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

function toggelmenu() {
    console.log("toggelmenu");
    document.querySelector("#menu").classList.toggle("hidden");
    document.querySelector("#nav").classList.toggle("nav_hide");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#menuburger").textContent = "☰";
    } else {
        document.querySelector("#menuburger").textContent = "X";
    }
}

function toggelDropdown() {
    console.log("toggelDropdown");
    document.querySelector("#dropdown").classList.toggle("hide");
    document.querySelector("#dropdown").classList.toggle("hidden");


}

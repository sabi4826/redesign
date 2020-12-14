window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    // Tryk på burgermenu
    document.querySelector("#menuburger").addEventListener("click", toggelmenu);

    // Tryk på "behandlinger og priser"
    document.querySelector("#behandlinger_knap").addEventListener("click", toggelDropdown);
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

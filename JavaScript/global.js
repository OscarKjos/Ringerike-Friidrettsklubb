/*___________Navigasjonsmeny__________*/

const NavClick = document.getElementById("NavClick");
const Overlay = document.querySelector(".Overlay");
const Remove = document.getElementById("NavRemove");
const Shadowlay = document.querySelector(".Shadowlay");
const TekstConf = document.querySelector(".TekstConf");

NavClick.addEventListener("click", () => {
    Overlay.classList.add("open");
    Shadowlay.classList.add("show");
    TekstConf.classList.add("CopyShow");
});

Remove.addEventListener("click", () => {
    Overlay.classList.remove("open");
    Shadowlay.classList.remove("show");
    TekstConf.classList.remove("CopyShow");
});

Shadowlay.addEventListener("click", () => {
    Overlay.classList.remove("open");
    Shadowlay.classList.remove("show");
    TekstConf.classList.remove("CopyShow");
});



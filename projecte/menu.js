const btnMenu = document.querySelector("#btn-Menu");
const navHeader = document.querySelector("#nav-header");
const btnClose = document.querySelector("#btn-close")

btnMenu.addEventListener("click", () => {
    navHeader.classList.add("nav-visible");
});

btnClose.addEventListener("click", () => {
    navHeader.classList.remove("nav-visible");
});
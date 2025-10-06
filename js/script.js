const searchBtn = document.querySelector(".search-icon")
const searchTab = document.querySelector(".hidden-search-section-wraper")
const headerTab = document.querySelector(".sticky-header")
const clossTab = document.querySelector(".close-search-tab-btn")
const hiddencart = document.querySelector(".hidden-cart-drawer-wraper")
const cartIcon = document.querySelector(".cart-icon")
const closeDrawer = document.querySelector(".close-drawer-section");
const hiddenNavIcone = document.querySelector(".drop-down-hidden")
const menuDrawer = document.querySelector(".menu-drawer__navigation");
const menuDrawerIcon = document.querySelector(".menu-drawer-icon")
const menuDrawerCloseIcon = document.querySelector(".menu-drawer-close")



searchBtn.addEventListener("click", (event) => {
    searchTab.style.display = "block";
    headerTab.style.display = "none"
})
clossTab.addEventListener("click", (event) => {
    searchTab.style.display = "none";
    headerTab.style.display = "block"
    console.log("error")
})
cartIcon.addEventListener("click", (event) => {
    hiddencart.style.display = "block"
})
closeDrawer.addEventListener("click", (event) => {
    hiddencart.style.display = "none"
})
hiddenNavIcone.addEventListener("click", (event) => {
    menuDrawer.classList.toggle("active")
    menuDrawerIcon.classList.toggle("active")
    menuDrawerCloseIcon.classList.toggle("active")  
});

// menuDrawerCloseIcon.addEventListener("click", (event) => {
//     menuDrawer.style.display = "none";
//     menuDrawerIcon.style.display = "block";
//     menuDrawerCloseIcon.style.display = "none"
// })
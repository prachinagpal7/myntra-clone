window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 20) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

let wishlist = 0;
let bag = 0;

document.querySelectorAll(".sale").forEach(item => {
    item.addEventListener("click", () => {
        wishlist++;
        document.getElementById("wishlistCount").innerText = wishlist;
    });
});

const searchInput = document.querySelector(".search_input");
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
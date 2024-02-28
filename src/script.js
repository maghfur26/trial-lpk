const humberger = document.querySelector("#humberger");
const navList = document.querySelector(".nav-list");

humberger.addEventListener('click', () => {
    humberger.classList.toggle("humberger-active");
    navList.classList.toggle("hidden");
})

window.onscroll = () => {
    const wrapperNav = document.querySelector(".wrapper-nav");
    const navfixed = wrapperNav.offsetTop

    if (window.scrollY > navfixed) {
        wrapperNav.classList.add('navbar-fixed');
    }else {
        wrapperNav.classList.remove('navbar-fixed');
    }
}
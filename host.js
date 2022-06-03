const target = document.querySelectorAll("[data-anime]");
const animationClass = "animate";

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 9);
    target.forEach(function (element) {
        if ((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    })
}

animeScroll();
document.addEventListener("scroll", (function () {
    animeScroll();
}));

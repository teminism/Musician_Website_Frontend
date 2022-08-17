// Student ID: 2002532

function navSlide() {
    const colapse = document.querySelector(".colapse");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    colapse.addEventListener("click", () => {
        //activates the nav
        nav.classList.toggle("nav-active");

        //creates the animation
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        colapse.classList.toggle("toggle");
    });

}

navSlide();

// https://www.codeply.com/p/hVa3gv9Umw


  window.addEventListener("scroll", navbar);

  function navbar() {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 0) {
      navbar.classList.add("nav-scrolled");
      navbar.classList.remove("nav-unscrolled");
    } else {
      navbar.classList.remove("nav-scrolled");
      navbar.classList.add("nav-unscrolled");
    }
  }

  function goto(id) {
    document.getElementById(id).scrollIntoView();
  }

  document.addEventListener("DOMContentLoaded", function () {
    const navbarLinks = document.querySelectorAll(".navbar a");
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", function () {
      const currentPos = window.scrollY;

      sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 170;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          currentPos >= sectionTop &&
          currentPos < sectionTop + sectionHeight
        ) {
          navbarLinks.forEach(function (navbarLink) {
            navbarLink.classList.remove("active");
          });

          document
            .querySelector('.navbar a[href="#' + sectionId + '"]')
            .classList.add("active");
        }
      });
    });
  });

window.addEventListener("DOMContentLoaded", (event) => {
  // Função para encolher a navbar em telas maiores que 992px
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.innerWidth > 991) {
      if (window.scrollY === 0) {
        navbarCollapsible.classList.remove("navbar-shrink");
      } else {
        navbarCollapsible.classList.add("navbar-shrink");
      }
    }
  };

  // Chama a função de encolher a navbar
  navbarShrink();

  // Ativa o scrollspy do Bootstrap
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Colapsa a navbar responsiva quando o toggler é visível
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  // Lógica para esconder ou mostrar a navbar em telas menores que 992px
  var lastScrollTop = 0;
  const navbar = document.getElementById("mainNav");

  window.addEventListener("scroll", function () {
    if (window.innerWidth <= 991) {
      let currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        navbar.style.display = "none";
      } else {
        navbar.style.display = "flex";
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }
  });

  // Lógica para mostrar a navbar no topo em telas menores que 992px
  const navbarTop = function () {
    if (window.innerWidth <= 991) {
      const navbar = document.getElementById("mainNav");
      if (window.scrollY === 0) {
        navbar.style.display = "flex";
      } else {
        navbar.style.display = "none";
      }
    }
  };

  // Chama a função quando a página for carregada ou rolada
  navbarTop();
  window.addEventListener("scroll", navbarTop);
});

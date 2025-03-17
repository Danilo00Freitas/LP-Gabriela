window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function (Comportamento atual para telas maiores que 992px)
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    // Para telas maiores que 992px
    if (window.innerWidth > 991) {
      if (window.scrollY === 0) {
        navbarCollapsible.classList.remove("navbar-shrink");
      } else {
        navbarCollapsible.classList.add("navbar-shrink");
      }
    }
  };

  // Shrink a navbar quando a página for rolada (funciona para todas as telas)
  navbarShrink();

  // Evento de scroll para o comportamento de navbar para telas maiores que 992px
  document.addEventListener("scroll", navbarShrink);

  //  Ativar o scrollspy do Bootstrap para navegação
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse a navbar responsiva quando o toggler for visível
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

  // Funcionalidade para esconder a navbar ao rolar para baixo em telas menores que 992px
  var lastScrollTop = 0;
  const navbar = document.getElementById("mainNav");

  // Evento de scroll para esconder ou mostrar a navbar em telas menores que 992px
  window.addEventListener("scroll", function () {
    if (window.innerWidth <= 991) {
      // Somente em telas menores que 992px
      let currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

      // Se rolou para baixo, esconder a navbar
      if (currentScroll > lastScrollTop) {
        navbar.style.display = "none"; // Esconde a navbar quando rolar para baixo
      } else {
        navbar.style.display = "flex"; // Exibe a navbar quando rolar para cima ou estiver no topo
      }

      // Atualiza a última posição do scroll
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }
  });

  // A lógica para mostrar a navbar no topo (comportamento para telas menores)
  const navbarTop = function () {
    if (window.innerWidth <= 991) {
      // Somente em telas menores que 992px
      const navbar = document.getElementById("mainNav");
      if (window.scrollY === 0) {
        navbar.style.display = "flex"; // Exibe a navbar quando estiver no topo
      } else {
        navbar.style.display = "none"; // Esconde a navbar quando rolar para baixo
      }
    }
  };

  // Chama a função de navbarTop quando a página for carregada ou rolada
  navbarTop();
  window.addEventListener("scroll", navbarTop);
});

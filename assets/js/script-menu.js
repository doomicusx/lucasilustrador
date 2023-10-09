function openNav() {
  const navBtn = document.getElementById("menu-toggle-btn");
  const menuAnimation = document.querySelector(".menu-animation");

  navBtn.addEventListener("click", function (e) {
    navBtn.classList.toggle("active");
    menuAnimation.classList.toggle("ativo-animacao");

    // Verifique se a classe "ativo-animacao" está presente após o clique
    if (menuAnimation.classList.contains("ativo-animacao")) {
      menuAnimation.style.display = "flex";
    } else {
      menuAnimation.style.display = "none";
    }
  });
}

// Chame a função openNav para inicializar o comportamento do clique no menu-toggle
openNav();

// Certifique-se de incluir a biblioteca GSAP no seu HTML antes de usar este código
document.addEventListener("DOMContentLoaded", function () {
  const menuAnimation = document.querySelector(".menu-animation");

  if (menuAnimation.classList.contains("ativo-animacao")) {
    gsap.fromTo(
      menuAnimation,
      { x: 0 },
      { x: "100%", duration: 0.5, ease: "power2.out" }
    );
  }
});

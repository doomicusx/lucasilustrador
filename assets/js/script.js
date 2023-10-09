function atualizarHorario() {
  const elementoHorario = document.querySelector(".f-time");
  const dataAtual = new Date();
  const options = { hour: "2-digit", minute: "2-digit", hour12: true };
  const horarioFormatado = new Intl.DateTimeFormat(
    navigator.language,
    options
  ).format(dataAtual);
  elementoHorario.textContent = horarioFormatado;
}

setInterval(atualizarHorario, 1000);

atualizarHorario();

var timeline = gsap.timeline();

timeline.fromTo(".projeto", { opacity: 0 }, { duration: 2, opacity: 1 });
timeline.fromTo(".bg-animation", { x: 0 }, { duration: 2, x: "100%" });

timeline.to([".projeto", ".bg-animation"], {
  display: "none",
  onComplete: function () {
    gsap.set([".projeto", ".bg-animation"], { display: "none" });
  },
});

function finalizar() {
  let score = 0;
  document.querySelectorAll("input:checked")
    .forEach(i => score += parseInt(i.value));

  localStorage.setItem("score", score);

  window.location.href = "pagamento.html";
}

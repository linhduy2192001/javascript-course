window.addEventListener("load", function () {
  function renderText() {
    const template = `<div class="sweet-alert">
      <i class="fa fa-check"> </i>
      <p class="sweet-text">Congratulation</p>
    </div>`;
    document.body.insertAdjacentHTML("beforeend", template);
  }
  const button = document.querySelector(".button");
  button.addEventListener("click", function () {
    renderText();
    const sweetAlert = document.querySelector(".sweet-alert");
    if (sweetAlert) {
      setTimeout(function () {
        sweetAlert.parentElement.removeChild(sweetAlert);
      }, 2000);
    }
  });
});

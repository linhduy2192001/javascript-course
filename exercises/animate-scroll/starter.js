document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".container img");
  window.addEventListener("scroll", function (e) {
    const windowOffsetTop = window.pageYOffset;
    [...images].forEach((image) => {
      const imageOffsetTop = image.offsetTop;
      if (windowOffsetTop > imageOffsetTop - image.offsetHeight / 2) {
        image.classList.add("active");
      }
    });
  });
});

window.addEventListener("load", function () {
  const slider = document.querySelector(".slider");
  const sliderMain = document.querySelector(".slider-main");
  const sliderItems = document.querySelectorAll(".slider-item");
  const nextBtn = document.querySelector(".slider-next");
  const prevBtn = document.querySelector(".slider-prev");
  const dotItems = document.querySelectorAll(".slider-dot-item");
  const sliderItemWidth = sliderItems[0].offsetWidth;
  const sliderLength = sliderItems.length;
  console.log("sliderLength", sliderLength);
  let positionX = 0;
  let index = 0;
  nextBtn.addEventListener("click", function () {
    handleChangeSlider(1);
  });
  prevBtn.addEventListener("click", function () {
    handleChangeSlider(-1);
  });

  function handleChangeSlider(dir) {
    if (dir === 1) {
      if (index >= sliderLength - 1) {
        index = sliderLength - 1;
        return;
      }
      console.log("index", index);
      positionX = positionX - sliderItemWidth;
      sliderMain.style = `transform  : translateX(${positionX}px)`;
      index++;
    } else if (dir === -1) {
      if (index <= 0) {
        index = 0;
        return;
      }
      console.log("index", index);
      positionX = positionX + sliderItemWidth;
      sliderMain.style = `transform  : translateX(${positionX}px)`;
      index--;
    }
  }
});

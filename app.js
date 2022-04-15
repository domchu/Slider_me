let slider = document.querySelectorAll(".slider");

let sliderPosition = 0;

function activateSlider() {
  sliderPosition++;
  if (sliderPosition > slider.length) {
    sliderPosition = 1;
  }
  for (let index = 0; index < slider.length; index++) {
    slider[index].style.display = "none";
    slider[sliderPosition - 1].style.display = "block";
  }
  setTimeout(() => {
    activateSlider();
  }, 5000);
}
activateSlider();

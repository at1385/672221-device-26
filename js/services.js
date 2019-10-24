var servicesSlider = document.querySelector(".services-slider");

var servicesButton1 = servicesSlider.querySelector(".services-slider-button:nth-child(1)");
var servicesButton2 = servicesSlider.querySelector(".services-slider-button:nth-child(2)");
var servicesButton3 = servicesSlider.querySelector(".services-slider-button:nth-child(3)");

var servicesSlide1 = servicesSlider.querySelector(".services-item:nth-child(1)");
var servicesSlide2 = servicesSlider.querySelector(".services-item:nth-child(2)");
var servicesSlide3 = servicesSlider.querySelector(".services-item:nth-child(3)");

servicesButton1.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!servicesButton1.classList.contains("services-slider-button-current")) {
    if (servicesButton2.classList.contains("services-slider-button-current")) {
     servicesButton2.classList.remove("services-slider-button-current");
   } else {
     servicesButton3.classList.remove("services-slider-button-current");
   }
    servicesButton1.classList.add("services-slider-button-current");
  }
  if (!servicesSlide1.classList.contains("services-item-show")) {
    if (servicesSlide2.classList.contains("services-item-show")) {
     servicesSlide2.classList.remove("services-item-show");
   } else {
     servicesSlide3.classList.remove("services-item-show");
   }
    servicesSlide1.classList.add("services-item-show");
  }
});

servicesButton2.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!servicesButton2.classList.contains("services-slider-button-current")) {
    if (servicesButton1.classList.contains("services-slider-button-current")) {
     servicesButton1.classList.remove("services-slider-button-current");
   } else {
     servicesButton3.classList.remove("services-slider-button-current");
   }
    servicesButton2.classList.add("services-slider-button-current");
  }
  if (!servicesSlide2.classList.contains("services-item-show")) {
    if (servicesSlide1.classList.contains("services-item-show")) {
     servicesSlide1.classList.remove("services-item-show");
   } else {
     servicesSlide3.classList.remove("services-item-show");
   }
    servicesSlide2.classList.add("services-item-show");
  }
});

servicesButton3.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!servicesButton3.classList.contains("services-slider-button-current")) {
    if (servicesButton1.classList.contains("services-slider-button-current")) {
     servicesButton1.classList.remove("services-slider-button-current");
   } else {
     servicesButton2.classList.remove("services-slider-button-current");
   }
    servicesButton3.classList.add("services-slider-button-current");
  }
  if (!servicesSlide3.classList.contains("services-item-show")) {
    if (servicesSlide1.classList.contains("services-item-show")) {
     servicesSlide1.classList.remove("services-item-show");
   } else {
     servicesSlide2.classList.remove("services-item-show");
   }
    servicesSlide3.classList.add("services-item-show");
  }
});

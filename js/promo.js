var promoSlider = document.querySelector(".promo-slider");

var promoButton1 = promoSlider.querySelector(".promo-slider-button:nth-child(1)");
var promoButton2 = promoSlider.querySelector(".promo-slider-button:nth-child(2)");
var promoButton3 = promoSlider.querySelector(".promo-slider-button:nth-child(3)");

var promoSlide1 = promoSlider.querySelector(".promo-slides-item:nth-child(1)");
var promoSlide2 = promoSlider.querySelector(".promo-slides-item:nth-child(2)");
var promoSlide3 = promoSlider.querySelector(".promo-slides-item:nth-child(3)");

promoButton1.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!promoButton1.classList.contains("promo-slider-button-current")) {
    if (promoButton2.classList.contains("promo-slider-button-current")) {
     promoButton2.classList.remove("promo-slider-button-current");
   } else {
     promoButton3.classList.remove("promo-slider-button-current");
   }
    promoButton1.classList.add("promo-slider-button-current");
  }
  if (!promoSlide1.classList.contains("promo-slides-item-show")) {
    if (promoSlide2.classList.contains("promo-slides-item-show")) {
     promoSlide2.classList.remove("promo-slides-item-show");
   } else {
     promoSlide3.classList.remove("promo-slides-item-show");
   }
    promoSlide1.classList.add("promo-slides-item-show");
  }
});

promoButton2.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!promoButton2.classList.contains("promo-slider-button-current")) {
    if (promoButton1.classList.contains("promo-slider-button-current")) {
     promoButton1.classList.remove("promo-slider-button-current");
   } else {
     promoButton3.classList.remove("promo-slider-button-current");
   }
    promoButton2.classList.add("promo-slider-button-current");
  }
  if (!promoSlide2.classList.contains("promo-slides-item-show")) {
    if (promoSlide1.classList.contains("promo-slides-item-show")) {
     promoSlide1.classList.remove("promo-slides-item-show");
   } else {
     promoSlide3.classList.remove("promo-slides-item-show");
   }
    promoSlide2.classList.add("promo-slides-item-show");
  }
});

promoButton3.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!promoButton3.classList.contains("promo-slider-button-current")) {
    if (promoButton1.classList.contains("promo-slider-button-current")) {
     promoButton1.classList.remove("promo-slider-button-current");
   } else {
     promoButton2.classList.remove("promo-slider-button-current");
   }
    promoButton3.classList.add("promo-slider-button-current");
  }
  if (!promoSlide3.classList.contains("promo-slides-item-show")) {
    if (promoSlide1.classList.contains("promo-slides-item-show")) {
     promoSlide1.classList.remove("promo-slides-item-show");
   } else {
     promoSlide2.classList.remove("promo-slides-item-show");
   }
    promoSlide3.classList.add("promo-slides-item-show");
  }
});

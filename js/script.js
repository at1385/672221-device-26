// promo-slider
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

// services-slider
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

// modal-map
var mapLink = document.querySelector(".map-link");

var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});

// modal-write-us
var writeLink = document.querySelector(".write-us-link");

var writePopup = document.querySelector(".modal-write-us");
var writeClose = writePopup.querySelector(".modal-close");

var writeForm = writePopup.querySelector(".write-us-form");
var writeUserName = writePopup.querySelector("[name=username]");
var writeUserEmail = writePopup.querySelector("[name=user-email]");
var writeUserText = writePopup.querySelector("[name=text-letter]");

writeLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  writePopup.classList.add("modal-show");
  writeUserName.focus();
});

writeClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writePopup.classList.remove("modal-show");
  writePopup.classList.remove("modal-error");
  writeUserName.classList.remove("invalid-value");
  writeUserEmail.classList.remove("invalid-value");
  writeUserText.classList.remove("invalid-value");
});

writeForm.addEventListener("submit", function (evt) {
  if (!writeUserName.value || !writeUserEmail.value || !writeUserText.value) {
    evt.preventDefault();
    if (!writeUserName.value) {
      writeUserName.classList.add("invalid-value");
    } else if (writeUserName.classList.contains("invalid-value")) {
      writeUserName.classList.remove("invalid-value");
    }
    if (!writeUserEmail.value) {
      writeUserEmail.classList.add("invalid-value");
    } else if (writeUserEmail.classList.contains("invalid-value")) {
      writeUserEmail.classList.remove("invalid-value");
    }
    if (!writeUserText.value) {
      writeUserText.classList.add("invalid-value");
    } else if (writeUserText.classList.contains("invalid-value")) {
      writeUserText.classList.remove("invalid-value");
    }
    writePopup.classList.remove("modal-error");
    writePopup.offsetWidth = writePopup.offsetWidth;
    writePopup.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (writePopup.classList.contains("modal-show")) {
      writePopup.classList.remove("modal-show");
      writePopup.classList.remove("modal-error");
      writeUserName.classList.remove("invalid-value");
      writeUserEmail.classList.remove("invalid-value");
      writeUserText.classList.remove("invalid-value");
    }
  }
});

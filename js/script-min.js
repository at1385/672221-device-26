var promoSlider=document.querySelector(".promo-slider"),promoButton1=promoSlider.querySelector(".promo-slider-button:nth-child(1)"),promoButton2=promoSlider.querySelector(".promo-slider-button:nth-child(2)"),promoButton3=promoSlider.querySelector(".promo-slider-button:nth-child(3)"),promoSlide1=promoSlider.querySelector(".promo-slides-item:nth-child(1)"),promoSlide2=promoSlider.querySelector(".promo-slides-item:nth-child(2)"),promoSlide3=promoSlider.querySelector(".promo-slides-item:nth-child(3)");promoButton1.addEventListener("click",function(e){e.preventDefault(),promoButton1.classList.contains("promo-slider-button-current")||(promoButton2.classList.contains("promo-slider-button-current")?promoButton2.classList.remove("promo-slider-button-current"):promoButton3.classList.remove("promo-slider-button-current"),promoButton1.classList.add("promo-slider-button-current")),promoSlide1.classList.contains("promo-slides-item-show")||(promoSlide2.classList.contains("promo-slides-item-show")?promoSlide2.classList.remove("promo-slides-item-show"):promoSlide3.classList.remove("promo-slides-item-show"),promoSlide1.classList.add("promo-slides-item-show"))}),promoButton2.addEventListener("click",function(e){e.preventDefault(),promoButton2.classList.contains("promo-slider-button-current")||(promoButton1.classList.contains("promo-slider-button-current")?promoButton1.classList.remove("promo-slider-button-current"):promoButton3.classList.remove("promo-slider-button-current"),promoButton2.classList.add("promo-slider-button-current")),promoSlide2.classList.contains("promo-slides-item-show")||(promoSlide1.classList.contains("promo-slides-item-show")?promoSlide1.classList.remove("promo-slides-item-show"):promoSlide3.classList.remove("promo-slides-item-show"),promoSlide2.classList.add("promo-slides-item-show"))}),promoButton3.addEventListener("click",function(e){e.preventDefault(),promoButton3.classList.contains("promo-slider-button-current")||(promoButton1.classList.contains("promo-slider-button-current")?promoButton1.classList.remove("promo-slider-button-current"):promoButton2.classList.remove("promo-slider-button-current"),promoButton3.classList.add("promo-slider-button-current")),promoSlide3.classList.contains("promo-slides-item-show")||(promoSlide1.classList.contains("promo-slides-item-show")?promoSlide1.classList.remove("promo-slides-item-show"):promoSlide2.classList.remove("promo-slides-item-show"),promoSlide3.classList.add("promo-slides-item-show"))});var servicesSlider=document.querySelector(".services-slider"),servicesButton1=servicesSlider.querySelector(".services-slider-button:nth-child(1)"),servicesButton2=servicesSlider.querySelector(".services-slider-button:nth-child(2)"),servicesButton3=servicesSlider.querySelector(".services-slider-button:nth-child(3)"),servicesSlide1=servicesSlider.querySelector(".services-item:nth-child(1)"),servicesSlide2=servicesSlider.querySelector(".services-item:nth-child(2)"),servicesSlide3=servicesSlider.querySelector(".services-item:nth-child(3)");servicesButton1.addEventListener("click",function(e){e.preventDefault(),servicesButton1.classList.contains("services-slider-button-current")||(servicesButton2.classList.contains("services-slider-button-current")?servicesButton2.classList.remove("services-slider-button-current"):servicesButton3.classList.remove("services-slider-button-current"),servicesButton1.classList.add("services-slider-button-current")),servicesSlide1.classList.contains("services-item-show")||(servicesSlide2.classList.contains("services-item-show")?servicesSlide2.classList.remove("services-item-show"):servicesSlide3.classList.remove("services-item-show"),servicesSlide1.classList.add("services-item-show"))}),servicesButton2.addEventListener("click",function(e){e.preventDefault(),servicesButton2.classList.contains("services-slider-button-current")||(servicesButton1.classList.contains("services-slider-button-current")?servicesButton1.classList.remove("services-slider-button-current"):servicesButton3.classList.remove("services-slider-button-current"),servicesButton2.classList.add("services-slider-button-current")),servicesSlide2.classList.contains("services-item-show")||(servicesSlide1.classList.contains("services-item-show")?servicesSlide1.classList.remove("services-item-show"):servicesSlide3.classList.remove("services-item-show"),servicesSlide2.classList.add("services-item-show"))}),servicesButton3.addEventListener("click",function(e){e.preventDefault(),servicesButton3.classList.contains("services-slider-button-current")||(servicesButton1.classList.contains("services-slider-button-current")?servicesButton1.classList.remove("services-slider-button-current"):servicesButton2.classList.remove("services-slider-button-current"),servicesButton3.classList.add("services-slider-button-current")),servicesSlide3.classList.contains("services-item-show")||(servicesSlide1.classList.contains("services-item-show")?servicesSlide1.classList.remove("services-item-show"):servicesSlide2.classList.remove("services-item-show"),servicesSlide3.classList.add("services-item-show"))});var mapLink=document.querySelector(".map-link"),mapPopup=document.querySelector(".modal-map"),mapClose=mapPopup.querySelector(".modal-close");mapLink.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.add("modal-show")}),mapClose.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),mapPopup.classList.contains("modal-show")&&mapPopup.classList.remove("modal-show"))});var writeLink=document.querySelector(".write-us-link"),writePopup=document.querySelector(".modal-write-us"),writeClose=writePopup.querySelector(".modal-close"),writeForm=writePopup.querySelector(".write-us-form"),writeUserName=writePopup.querySelector("[name=username]"),writeUserEmail=writePopup.querySelector("[name=user-email]"),writeUserText=writePopup.querySelector("[name=text-letter]");writeLink.addEventListener("click",function(e){e.preventDefault(),writePopup.classList.add("modal-show"),writeUserName.focus()}),writeClose.addEventListener("click",function(e){e.preventDefault(),writePopup.classList.remove("modal-show"),writePopup.classList.remove("modal-error"),writeUserName.classList.remove("invalid-value"),writeUserEmail.classList.remove("invalid-value"),writeUserText.classList.remove("invalid-value")}),writeForm.addEventListener("submit",function(e){writeUserName.value&&writeUserEmail.value&&writeUserText.value||(e.preventDefault(),writeUserName.value?writeUserName.classList.contains("invalid-value")&&writeUserName.classList.remove("invalid-value"):writeUserName.classList.add("invalid-value"),writeUserEmail.value?writeUserEmail.classList.contains("invalid-value")&&writeUserEmail.classList.remove("invalid-value"):writeUserEmail.classList.add("invalid-value"),writeUserText.value?writeUserText.classList.contains("invalid-value")&&writeUserText.classList.remove("invalid-value"):writeUserText.classList.add("invalid-value"),writePopup.classList.remove("modal-error"),writePopup.offsetWidth=writePopup.offsetWidth,writePopup.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),writePopup.classList.contains("modal-show")&&(writePopup.classList.remove("modal-show"),writePopup.classList.remove("modal-error"),writeUserName.classList.remove("invalid-value"),writeUserEmail.classList.remove("invalid-value"),writeUserText.classList.remove("invalid-value")))});
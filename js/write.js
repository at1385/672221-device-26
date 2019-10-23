var writeLink = document.querySelector(".write-us-link");

var writePopup = document.querySelector(".modal-write-us");
var writeClose = writePopup.querySelector(".modal-close");

var writeForm = writePopup.querySelector(".write-us-form");
var writeUserName = writePopup.querySelector("[name=username]");
var writeUserEmail = writePopup.querySelector("[name=user-email]");
var writeUserText = writePopup.querySelector("[name=text-letter]");

// var isStorageSupport = true;
// var storage = "";
//
// try {
//   storage = localStorage.getItem("login");
// } catch (err) {
//   isStorageSupport = false;
// }

writeLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  writePopup.classList.add("modal-show");
  // if (storage) {
  //   writeUserName.value = storage;
  //   writeUserEmail.focus();
  // } else {
  //   writeUserName.focus();
  // }
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
  // } else if (isStorageSupport) {
  //   localStorage.setItem("login", writeUserName.value);
  // }
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

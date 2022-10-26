// Dynamic loading Starts
const valueDisplay = document.querySelectorAll(".counter");
const int = 700;
valueDisplay.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = +valueDisplay.getAttribute("data-target");
  let duration = Math.floor(int / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue === endValue) {
      clearInterval(counter);
    }
  }, duration);
});

// VIDEO DROPDOWN START
const dateBtn = document.querySelector(".date");
const videoBtn = document.querySelector(".video");
const dateContent = document.querySelector(".dropdown-date-content");
const videoContent = document.querySelector(".dropdown-video-content");
const arrow = document.querySelector(".arrow");

dateBtn.addEventListener("click", function () {
  videoContent.classList.remove("active");
  dateContent.classList.toggle("active");
});
videoBtn.addEventListener("click", function () {
  dateContent.classList.remove("active");
  videoContent.classList.toggle("active");
});

// scroll time
const btnTimeConverter = document.querySelector(".btn-timeConverter");
const section3 = document.querySelector(".section-3");
const btnLogin = document.querySelector(".btn-login");
const login = document.querySelector(".container-login");
const btnHome = document.querySelector(".btn-home");
const home = document.querySelector("body");

btnTimeConverter.addEventListener("click", function (e) {
  e.preventDefault();
  section3.scrollIntoView({ behavior: "smooth" });
});
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  login.scrollIntoView({ behavior: "smooth" });
});
btnHome.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("helo");
  home.scrollIntoView({ behavior: "smooth" });
});






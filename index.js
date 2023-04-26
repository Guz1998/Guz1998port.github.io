/*Función de carrousel*/
const carousel = document.querySelector(".carousel");
let currentIndex = 0;

function slideCarousel() {
  const carouselWidth = carousel.offsetWidth;
  currentIndex = (currentIndex + 1) % carousel.children.length;
  carousel.style.transform = `translateX(-${currentIndex * carouselWidth}px)`;
}

setInterval(slideCarousel, 5000);

//

/*función para ejecutar la ventana emergente del botón de info*/
const modal = document.getElementById("modal");
const modalContent = document.querySelector(".modal-content");

document
  .querySelector(".sidebar-item04")
  .addEventListener("click", function () {
    modal.classList.add("active");
  });

modal.addEventListener("click", function (event) {
  if (
    event.target === modal ||
    event.target.classList.contains("modal-content")
  ) {
    modal.classList.remove("active");
  }
});

//Caja 01
const modal01 = document.getElementById("modal01");
const modalContent01 = document.querySelector(".modal-content");

document
  .querySelector(".btnPrevisualizar01")
  .addEventListener("click", function () {
    modal01.classList.add("active");
  });

modal01.addEventListener("click", function (event) {
  if (
    event.target === modal01 ||
    event.target.classList.contains("modal-content")
  ) {
    modal01.classList.remove("active");
  }
});

//Caja 02
const modal02 = document.getElementById("modal02");
const modalContent02 = document.querySelector(".modal-content");

document
  .querySelector(".btnPrevisualizar02")
  .addEventListener("click", function () {
    modal02.classList.add("active");
  });

modal02.addEventListener("click", function (event) {
  if (
    event.target === modal02 ||
    event.target.classList.contains("modal-content")
  ) {
    modal02.classList.remove("active");
  }
});

//Caja 03
const modal03 = document.getElementById("modal03");
const modalContent03 = document.querySelector(".modal-content");

document
  .querySelector(".btnPrevisualizar03")
  .addEventListener("click", function () {
    modal03.classList.add("active");
  });

modal03.addEventListener("click", function (event) {
  if (
    event.target === modal03 ||
    event.target.classList.contains("modal-content")
  ) {
    modal03.classList.remove("active");
  }
});

//Caja 04
const modal04 = document.getElementById("modal04");
const modalContent04 = document.querySelector(".modal-content");

document
  .querySelector(".btnPrevisualizar04")
  .addEventListener("click", function () {
    modal04.classList.add("active");
  });

modal04.addEventListener("click", function (event) {
  if (
    event.target === modal04 ||
    event.target.classList.contains("modal-content")
  ) {
    modal04.classList.remove("active");
  }
});

//Caja 05
const modal05 = document.getElementById("modal05");
const modalContent05 = document.querySelector(".modal-content");

document
  .querySelector(".btnPrevisualizar05")
  .addEventListener("click", function () {
    modal05.classList.add("active");
  });

modal05.addEventListener("click", function (event) {
  if (
    event.target === modal05 ||
    event.target.classList.contains("modal-content")
  ) {
    modal05.classList.remove("active");
  }
});

//Caja 06
const modal06 = document.getElementById("modal06");
const modalContent06 = document.querySelector(".modal-content");

document
  .querySelector(".btnPrevisualizar06")
  .addEventListener("click", function () {
    modal06.classList.add("active");
  });

modal06.addEventListener("click", function (event) {
  if (
    event.target === modal06 ||
    event.target.classList.contains("modal-content")
  ) {
    modal06.classList.remove("active");
  }
});

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

//Caja 07
const modal07 = document.getElementById("modal07");
const modalContent07 = document.querySelector(".modal-content");

document
  .querySelector(".btnPrevisualizar07")
  .addEventListener("click", function () {
    modal07.classList.add("active");
  });

modal07.addEventListener("click", function (event) {
  if (
    event.target === modal07 ||
    event.target.classList.contains("modal-content")
  ) {
    modal07.classList.remove("active");
  }
});

//Caja 08
const modal08 = document.getElementById("modal08");
const modalContent08 = document.querySelector(".modal-content");

document
  .querySelector(".btnPrevisualizar08")
  .addEventListener("click", function () {
    modal08.classList.add("active");
  });

modal08.addEventListener("click", function (event) {
  if (
    event.target === modal08 ||
    event.target.classList.contains("modal-content")
  ) {
    modal08.classList.remove("active");
  }
});

//Caja 09
const modal09 = document.getElementById("modal09");
const modalContent09 = document.querySelector(".modal-content");

document
  .querySelector(".btnPrevisualizar09")
  .addEventListener("click", function () {
    modal09.classList.add("active");
  });

modal09.addEventListener("click", function (event) {
  if (
    event.target === modal09 ||
    event.target.classList.contains("modal-content")
  ) {
    modal09.classList.remove("active");
  }
});

//Caja 10
const modal10 = document.getElementById('modal10');
const modalContent10 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar10').addEventListener('click', function () {
  modal10.classList.add('active');
});
modal10.addEventListener('click', function (event) {
  if (event.target === modal10 || event.target.classList.contains('modal-content')) {
    modal10.classList.remove('active');
  }
});

//Caja 11
const modal11 = document.getElementById('modal11');
const modalContent11 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar11').addEventListener('click', function () {
  modal11.classList.add('active');
});
modal11.addEventListener('click', function (event) {
  if (event.target === modal11 || event.target.classList.contains('modal-content')) {
    modal11.classList.remove('active');
  }
});
//Caja 12
const modal12 = document.getElementById('modal12');
const modalContent12 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar12').addEventListener('click', function () {
  modal12.classList.add('active');
});
modal12.addEventListener('click', function (event) {
  if (event.target === modal12 || event.target.classList.contains('modal-content')) {
    modal12.classList.remove('active');
  }
});
//Caja 13
const modal13 = document.getElementById('modal13');
const modalContent13 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar13').addEventListener('click', function () {
  modal13.classList.add('active');
});
modal13.addEventListener('click', function (event) {
  if (event.target === modal13 || event.target.classList.contains('modal-content')) {
    modal13.classList.remove('active');
  }
});
//Caja 14
const modal14 = document.getElementById('modal14');
const modalContent14 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar14').addEventListener('click', function () {
  modal14.classList.add('active');
});
modal14.addEventListener('click', function (event) {
  if (event.target === modal14 || event.target.classList.contains('modal-content')) {
    modal14.classList.remove('active');
  }
});
//Caja 15
const modal15 = document.getElementById('modal15');
const modalContent15 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar15').addEventListener('click', function () {
  modal15.classList.add('active');
});
modal15.addEventListener('click', function (event) {
  if (event.target === modal15 || event.target.classList.contains('modal-content')) {
    modal15.classList.remove('active');
  }
});
//Caja 16
const modal16 = document.getElementById('modal16');
const modalContent16 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar16').addEventListener('click', function () {
  modal16.classList.add('active');
});
modal16.addEventListener('click', function (event) {
  if (event.target === modal16 || event.target.classList.contains('modal-content')) {
    modal16.classList.remove('active');
  }
});
//Caja 17
const modal17 = document.getElementById('modal17');
const modalContent17 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar17').addEventListener('click', function () {
  modal17.classList.add('active');
});
modal17.addEventListener('click', function (event) {
  if (event.target === modal17 || event.target.classList.contains('modal-content')) {
    modal17.classList.remove('active');
  }
});
//Caja 18
const modal18 = document.getElementById('modal18');
const modalContent18 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar18').addEventListener('click', function () {
  modal18.classList.add('active');
});
modal18.addEventListener('click', function (event) {
  if (event.target === modal18 || event.target.classList.contains('modal-content')) {
    modal18.classList.remove('active');
  }
});
//Caja 19
const modal19 = document.getElementById('modal19');
const modalContent19 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar19').addEventListener('click', function () {
  modal19.classList.add('active');
});
modal19.addEventListener('click', function (event) {
  if (event.target === modal19 || event.target.classList.contains('modal-content')) {
    modal19.classList.remove('active');
  }
});
//Caja 20
const modal20 = document.getElementById('modal20');
const modalContent20 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar20').addEventListener('click', function () {
  modal20.classList.add('active');
});
modal20.addEventListener('click', function (event) {
  if (event.target === modal20 || event.target.classList.contains('modal-content')) {
    modal20.classList.remove('active');
  }
});
//Caja 21
const modal21 = document.getElementById('modal21');
const modalContent21 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar21').addEventListener('click', function () {
  modal21.classList.add('active');
});
modal21.addEventListener('click', function (event) {
  if (event.target === modal21 || event.target.classList.contains('modal-content')) {
    modal21.classList.remove('active');
  }
});
//Caja 22
const modal22 = document.getElementById('modal22');
const modalContent22 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar22').addEventListener('click', function () {
  modal22.classList.add('active');
});
modal22.addEventListener('click', function (event) {
  if (event.target === modal22 || event.target.classList.contains('modal-content')) {
    modal22.classList.remove('active');
  }
});
//Caja 23
const modal23 = document.getElementById('modal23');
const modalContent23 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar23').addEventListener('click', function () {
  modal23.classList.add('active');
});
modal23.addEventListener('click', function (event) {
  if (event.target === modal23 || event.target.classList.contains('modal-content')) {
    modal23.classList.remove('active');
  }
});
//Caja 24
const modal24 = document.getElementById('modal24');
const modalContent24 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar24').addEventListener('click', function () {
  modal24.classList.add('active');
});
modal24.addEventListener('click', function (event) {
  if (event.target === modal24 || event.target.classList.contains('modal-content')) {
    modal24.classList.remove('active');
  }
});
//Caja 25
const modal25 = document.getElementById('modal25');
const modalContent25 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar25').addEventListener('click', function () {
  modal25.classList.add('active');
});
modal25.addEventListener('click', function (event) {
  if (event.target === modal25 || event.target.classList.contains('modal-content')) {
    modal25.classList.remove('active');
  }
});
//Caja 26
const modal26 = document.getElementById('modal26');
const modalContent26 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar26').addEventListener('click', function () {
  modal26.classList.add('active');
});
modal26.addEventListener('click', function (event) {
  if (event.target === modal26 || event.target.classList.contains('modal-content')) {
    modal26.classList.remove('active');
  }
});
//Caja 27
const modal27 = document.getElementById('modal27');
const modalContent27 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar27').addEventListener('click', function () {
  modal27.classList.add('active');
});
modal27.addEventListener('click', function (event) {
  if (event.target === modal27 || event.target.classList.contains('modal-content')) {
    modal27.classList.remove('active');
  }
});
//Caja 28
const modal28 = document.getElementById('modal28');
const modalContent28 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar28').addEventListener('click', function () {
  modal28.classList.add('active');
});
modal28.addEventListener('click', function (event) {
  if (event.target === modal28 || event.target.classList.contains('modal-content')) {
    modal28.classList.remove('active');
  }
});
//Caja 29
const modal29 = document.getElementById('modal29');
const modalContent29 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar29').addEventListener('click', function () {
  modal29.classList.add('active');
});
modal29.addEventListener('click', function (event) {
  if (event.target === modal29 || event.target.classList.contains('modal-content')) {
    modal29.classList.remove('active');
  }
});
//Caja 30
const modal30 = document.getElementById('modal30');
const modalContent30 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar30').addEventListener('click', function () {
  modal30.classList.add('active');
});
modal30.addEventListener('click', function (event) {
  if (event.target === modal30 || event.target.classList.contains('modal-content')) {
    modal30.classList.remove('active');
  }
});
//Caja 31
const modal31 = document.getElementById('modal31');
const modalContent31 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar31').addEventListener('click', function () {
  modal31.classList.add('active');
});
modal31.addEventListener('click', function (event) {
  if (event.target === modal31 || event.target.classList.contains('modal-content')) {
    modal31.classList.remove('active');
  }
});
//Caja 32
const modal32 = document.getElementById('modal32');
const modalContent32 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar32').addEventListener('click', function () {
  modal32.classList.add('active');
});
modal32.addEventListener('click', function (event) {
  if (event.target === modal32 || event.target.classList.contains('modal-content')) {
    modal32.classList.remove('active');
  }
});
//Caja 33
const modal33 = document.getElementById('modal33');
const modalContent33 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar33').addEventListener('click', function () {
  modal33.classList.add('active');
});
modal33.addEventListener('click', function (event) {
  if (event.target === modal33 || event.target.classList.contains('modal-content')) {
    modal33.classList.remove('active');
  }
});
//Caja 34
const modal34 = document.getElementById('modal34');
const modalContent34 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar34').addEventListener('click', function () {
  modal34.classList.add('active');
});
modal34.addEventListener('click', function (event) {
  if (event.target === modal34 || event.target.classList.contains('modal-content')) {
    modal34.classList.remove('active');
  }
});
//Caja 35
const modal35 = document.getElementById('modal35');
const modalContent35 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar35').addEventListener('click', function () {
  modal35.classList.add('active');
});
modal35.addEventListener('click', function (event) {
  if (event.target === modal35 || event.target.classList.contains('modal-content')) {
    modal35.classList.remove('active');
  }
});
//Caja 36
const modal36 = document.getElementById('modal36');
const modalContent36 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar36').addEventListener('click', function () {
  modal36.classList.add('active');
});
modal36.addEventListener('click', function (event) {
  if (event.target === modal36 || event.target.classList.contains('modal-content')) {
    modal36.classList.remove('active');
  }
});
//Caja 37
const modal37 = document.getElementById('modal37');
const modalContent37 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar37').addEventListener('click', function () {
  modal37.classList.add('active');
});
modal37.addEventListener('click', function (event) {
  if (event.target === modal37 || event.target.classList.contains('modal-content')) {
    modal37.classList.remove('active');
  }
});
//Caja 38
const modal38 = document.getElementById('modal38');
const modalContent38 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar38').addEventListener('click', function () {
  modal38.classList.add('active');
});
modal38.addEventListener('click', function (event) {
  if (event.target === modal38 || event.target.classList.contains('modal-content')) {
    modal38.classList.remove('active');
  }
});
//Caja 39
const modal39 = document.getElementById('modal39');
const modalContent39 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar39').addEventListener('click', function () {
  modal39.classList.add('active');
});
modal39.addEventListener('click', function (event) {
  if (event.target === modal39 || event.target.classList.contains('modal-content')) {
    modal39.classList.remove('active');
  }
});
//Caja 40
const modal40 = document.getElementById('modal40');
const modalContent40 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar40').addEventListener('click', function () {
  modal40.classList.add('active');
});
modal40.addEventListener('click', function (event) {
  if (event.target === modal40 || event.target.classList.contains('modal-content')) {
    modal40.classList.remove('active');
  }
});
//Caja 41
const modal41 = document.getElementById('modal41');
const modalContent41 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar41').addEventListener('click', function () {
  modal41.classList.add('active');
});
modal41.addEventListener('click', function (event) {
  if (event.target === modal41 || event.target.classList.contains('modal-content')) {
    modal41.classList.remove('active');
  }
});
//Caja 42
const modal42 = document.getElementById('modal42');
const modalContent42 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar42').addEventListener('click', function () {
  modal42.classList.add('active');
});
modal42.addEventListener('click', function (event) {
  if (event.target === modal42 || event.target.classList.contains('modal-content')) {
    modal42.classList.remove('active');
  }
});
//Caja 43
const modal43 = document.getElementById('modal43');
const modalContent43 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar43').addEventListener('click', function () {
  modal43.classList.add('active');
});
modal43.addEventListener('click', function (event) {
  if (event.target === modal43 || event.target.classList.contains('modal-content')) {
    modal43.classList.remove('active');
  }
});
//Caja 44
const modal44 = document.getElementById('modal44');
const modalContent44 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar44').addEventListener('click', function () {
  modal44.classList.add('active');
});
modal44.addEventListener('click', function (event) {
  if (event.target === modal44 || event.target.classList.contains('modal-content')) {
    modal44.classList.remove('active');
  }
});
//Caja 45
const modal45 = document.getElementById('modal45');
const modalContent45 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar45').addEventListener('click', function () {
  modal45.classList.add('active');
});
modal45.addEventListener('click', function (event) {
  if (event.target === modal45 || event.target.classList.contains('modal-content')) {
    modal45.classList.remove('active');
  }
});
//Caja 46
const modal46 = document.getElementById('modal46');
const modalContent46 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar46').addEventListener('click', function () {
  modal46.classList.add('active');
});
modal46.addEventListener('click', function (event) {
  if (event.target === modal46 || event.target.classList.contains('modal-content')) {
    modal46.classList.remove('active');
  }
});
//Caja 47
const modal47 = document.getElementById('modal47');
const modalContent47 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar47').addEventListener('click', function () {
  modal47.classList.add('active');
});
modal47.addEventListener('click', function (event) {
  if (event.target === modal47 || event.target.classList.contains('modal-content')) {
    modal47.classList.remove('active');
  }
});
//Caja 48
const modal48 = document.getElementById('modal48');
const modalContent48 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar48').addEventListener('click', function () {
  modal48.classList.add('active');
});
modal48.addEventListener('click', function (event) {
  if (event.target === modal48 || event.target.classList.contains('modal-content')) {
    modal48.classList.remove('active');
  }
});
//Caja 49
const modal49 = document.getElementById('modal49');
const modalContent49 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar49').addEventListener('click', function () {
  modal49.classList.add('active');
});
modal49.addEventListener('click', function (event) {
  if (event.target === modal49 || event.target.classList.contains('modal-content')) {
    modal49.classList.remove('active');
  }
});
//Caja 50
const modal50 = document.getElementById('modal50');
const modalContent50 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar50').addEventListener('click', function () {
  modal50.classList.add('active');
});
modal50.addEventListener('click', function (event) {
  if (event.target === modal50 || event.target.classList.contains('modal-content')) {
    modal50.classList.remove('active');
  }
});
//Caja 51
const modal51 = document.getElementById('modal51');
const modalContent51 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar51').addEventListener('click', function () {
  modal51.classList.add('active');
});
modal51.addEventListener('click', function (event) {
  if (event.target === modal51 || event.target.classList.contains('modal-content')) {
    modal51.classList.remove('active');
  }
});
//Caja 52
const modal52 = document.getElementById('modal52');
const modalContent52 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar52').addEventListener('click', function () {
  modal52.classList.add('active');
});
modal52.addEventListener('click', function (event) {
  if (event.target === modal52 || event.target.classList.contains('modal-content')) {
    modal52.classList.remove('active');
  }
});
//Caja 53
const modal53 = document.getElementById('modal53');
const modalContent53 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar53').addEventListener('click', function () {
  modal53.classList.add('active');
});
modal53.addEventListener('click', function (event) {
  if (event.target === modal53 || event.target.classList.contains('modal-content')) {
    modal53.classList.remove('active');
  }
});
//Caja 54
const modal54 = document.getElementById('modal54');
const modalContent54 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar54').addEventListener('click', function () {
  modal54.classList.add('active');
});
modal54.addEventListener('click', function (event) {
  if (event.target === modal54 || event.target.classList.contains('modal-content')) {
    modal54.classList.remove('active');
  }
});
//Caja 55
const modal55 = document.getElementById('modal55');
const modalContent55 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar55').addEventListener('click', function () {
  modal55.classList.add('active');
});
modal55.addEventListener('click', function (event) {
  if (event.target === modal55 || event.target.classList.contains('modal-content')) {
    modal55.classList.remove('active');
  }
});
//Caja 56
const modal56 = document.getElementById('modal56');
const modalContent56 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar56').addEventListener('click', function () {
  modal56.classList.add('active');
});
modal56.addEventListener('click', function (event) {
  if (event.target === modal56 || event.target.classList.contains('modal-content')) {
    modal56.classList.remove('active');
  }
});
//Caja 57
const modal57 = document.getElementById('modal57');
const modalContent57 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar57').addEventListener('click', function () {
  modal57.classList.add('active');
});
modal57.addEventListener('click', function (event) {
  if (event.target === modal57 || event.target.classList.contains('modal-content')) {
    modal57.classList.remove('active');
  }
});
//Caja 58
const modal58 = document.getElementById('modal58');
const modalContent58 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar58').addEventListener('click', function () {
  modal58.classList.add('active');
});
modal58.addEventListener('click', function (event) {
  if (event.target === modal58 || event.target.classList.contains('modal-content')) {
    modal58.classList.remove('active');
  }
});
//Caja 59
const modal59 = document.getElementById('modal59');
const modalContent59 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar59').addEventListener('click', function () {
  modal59.classList.add('active');
});
modal59.addEventListener('click', function (event) {
  if (event.target === modal59 || event.target.classList.contains('modal-content')) {
    modal59.classList.remove('active');
  }
});
//Caja 60
const modal60 = document.getElementById('modal60');
const modalContent60 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar60').addEventListener('click', function () {
  modal60.classList.add('active');
});
modal60.addEventListener('click', function (event) {
  if (event.target === modal60 || event.target.classList.contains('modal-content')) {
    modal60.classList.remove('active');
  }
});
//Caja 61
const modal61 = document.getElementById('modal61');
const modalContent61 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar61').addEventListener('click', function () {
  modal61.classList.add('active');
});
modal61.addEventListener('click', function (event) {
  if (event.target === modal61 || event.target.classList.contains('modal-content')) {
    modal61.classList.remove('active');
  }
});
//Caja 62
const modal62 = document.getElementById('modal62');
const modalContent62 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar62').addEventListener('click', function () {
  modal62.classList.add('active');
});
modal62.addEventListener('click', function (event) {
  if (event.target === modal62 || event.target.classList.contains('modal-content')) {
    modal62.classList.remove('active');
  }
});
//Caja 63
const modal63 = document.getElementById('modal63');
const modalContent63 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar63').addEventListener('click', function () {
  modal63.classList.add('active');
});
modal63.addEventListener('click', function (event) {
  if (event.target === modal63 || event.target.classList.contains('modal-content')) {
    modal63.classList.remove('active');
  }
});
//Caja 64
const modal64 = document.getElementById('modal64');
const modalContent64 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar64').addEventListener('click', function () {
  modal64.classList.add('active');
});
modal64.addEventListener('click', function (event) {
  if (event.target === modal64 || event.target.classList.contains('modal-content')) {
    modal64.classList.remove('active');
  }
});
//Caja 65
const modal65 = document.getElementById('modal65');
const modalContent65 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar65').addEventListener('click', function () {
  modal65.classList.add('active');
});
modal65.addEventListener('click', function (event) {
  if (event.target === modal65 || event.target.classList.contains('modal-content')) {
    modal65.classList.remove('active');
  }
});
//Caja 66
const modal66 = document.getElementById('modal66');
const modalContent66 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar66').addEventListener('click', function () {
  modal66.classList.add('active');
});
modal66.addEventListener('click', function (event) {
  if (event.target === modal66 || event.target.classList.contains('modal-content')) {
    modal66.classList.remove('active');
  }
});
//Caja 67
const modal67 = document.getElementById('modal67');
const modalContent67 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar67').addEventListener('click', function () {
  modal67.classList.add('active');
});
modal67.addEventListener('click', function (event) {
  if (event.target === modal67 || event.target.classList.contains('modal-content')) {
    modal67.classList.remove('active');
  }
});
//Caja 68
const modal68 = document.getElementById('modal68');
const modalContent68 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar68').addEventListener('click', function () {
  modal68.classList.add('active');
});
modal68.addEventListener('click', function (event) {
  if (event.target === modal68 || event.target.classList.contains('modal-content')) {
    modal68.classList.remove('active');
  }
});
//Caja 69
const modal69 = document.getElementById('modal69');
const modalContent69 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar69').addEventListener('click', function () {
  modal69.classList.add('active');
});
modal69.addEventListener('click', function (event) {
  if (event.target === modal69 || event.target.classList.contains('modal-content')) {
    modal69.classList.remove('active');
  }
});
//Caja 70
const modal70 = document.getElementById('modal70');
const modalContent70 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar70').addEventListener('click', function () {
  modal70.classList.add('active');
});
modal70.addEventListener('click', function (event) {
  if (event.target === modal70 || event.target.classList.contains('modal-content')) {
    modal70.classList.remove('active');
  }
});
//Caja 71
const modal71 = document.getElementById('modal71');
const modalContent71 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar71').addEventListener('click', function () {
  modal71.classList.add('active');
});
modal71.addEventListener('click', function (event) {
  if (event.target === modal71 || event.target.classList.contains('modal-content')) {
    modal71.classList.remove('active');
  }
});
//Caja 72
const modal72 = document.getElementById('modal72');
const modalContent72 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar72').addEventListener('click', function () {
  modal72.classList.add('active');
});
modal72.addEventListener('click', function (event) {
  if (event.target === modal72 || event.target.classList.contains('modal-content')) {
    modal72.classList.remove('active');
  }
});
//Caja 73
const modal73 = document.getElementById('modal73');
const modalContent73 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar73').addEventListener('click', function () {
  modal73.classList.add('active');
});
modal73.addEventListener('click', function (event) {
  if (event.target === modal73 || event.target.classList.contains('modal-content')) {
    modal73.classList.remove('active');
  }
});
//Caja 74
const modal74 = document.getElementById('modal74');
const modalContent74 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar74').addEventListener('click', function () {
  modal74.classList.add('active');
});
modal74.addEventListener('click', function (event) {
  if (event.target === modal74 || event.target.classList.contains('modal-content')) {
    modal74.classList.remove('active');
  }
});
//Caja 75
const modal75 = document.getElementById('modal75');
const modalContent75 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar75').addEventListener('click', function () {
  modal75.classList.add('active');
});
modal75.addEventListener('click', function (event) {
  if (event.target === modal75 || event.target.classList.contains('modal-content')) {
    modal75.classList.remove('active');
  }
});
//Caja 76
const modal76 = document.getElementById('modal76');
const modalContent76 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar76').addEventListener('click', function () {
  modal76.classList.add('active');
});
modal76.addEventListener('click', function (event) {
  if (event.target === modal76 || event.target.classList.contains('modal-content')) {
    modal76.classList.remove('active');
  }
});
//Caja 77
const modal77 = document.getElementById('modal77');
const modalContent77 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar77').addEventListener('click', function () {
  modal77.classList.add('active');
});
modal77.addEventListener('click', function (event) {
  if (event.target === modal77 || event.target.classList.contains('modal-content')) {
    modal77.classList.remove('active');
  }
});
//Caja 78
const modal78 = document.getElementById('modal78');
const modalContent78 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar78').addEventListener('click', function () {
  modal78.classList.add('active');
});
modal78.addEventListener('click', function (event) {
  if (event.target === modal78 || event.target.classList.contains('modal-content')) {
    modal78.classList.remove('active');
  }
});
//Caja 79
const modal79 = document.getElementById('modal79');
const modalContent79 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar79').addEventListener('click', function () {
  modal79.classList.add('active');
});
modal79.addEventListener('click', function (event) {
  if (event.target === modal79 || event.target.classList.contains('modal-content')) {
    modal79.classList.remove('active');
  }
});
//Caja 80
const modal80 = document.getElementById('modal80');
const modalContent80 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar80').addEventListener('click', function () {
  modal80.classList.add('active');
});
modal80.addEventListener('click', function (event) {
  if (event.target === modal80 || event.target.classList.contains('modal-content')) {
    modal80.classList.remove('active');
  }
});
//Caja 81
const modal81 = document.getElementById('modal81');
const modalContent81 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar81').addEventListener('click', function () {
  modal81.classList.add('active');
});
modal81.addEventListener('click', function (event) {
  if (event.target === modal81 || event.target.classList.contains('modal-content')) {
    modal81.classList.remove('active');
  }
});
//Caja 82
const modal82 = document.getElementById('modal82');
const modalContent82 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar82').addEventListener('click', function () {
  modal82.classList.add('active');
});
modal82.addEventListener('click', function (event) {
  if (event.target === modal82 || event.target.classList.contains('modal-content')) {
    modal82.classList.remove('active');
  }
});
//Caja 83
const modal83 = document.getElementById('modal83');
const modalContent83 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar83').addEventListener('click', function () {
  modal83.classList.add('active');
});
modal83.addEventListener('click', function (event) {
  if (event.target === modal83 || event.target.classList.contains('modal-content')) {
    modal83.classList.remove('active');
  }
});
//Caja 84
const modal84 = document.getElementById('modal84');
const modalContent84 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar84').addEventListener('click', function () {
  modal84.classList.add('active');
});
modal84.addEventListener('click', function (event) {
  if (event.target === modal84 || event.target.classList.contains('modal-content')) {
    modal84.classList.remove('active');
  }
});
//Caja 85
const modal85 = document.getElementById('modal85');
const modalContent85 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar85').addEventListener('click', function () {
  modal85.classList.add('active');
});
modal85.addEventListener('click', function (event) {
  if (event.target === modal85 || event.target.classList.contains('modal-content')) {
    modal85.classList.remove('active');
  }
});
//Caja 86
const modal86 = document.getElementById('modal86');
const modalContent86 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar86').addEventListener('click', function () {
  modal86.classList.add('active');
});
modal86.addEventListener('click', function (event) {
  if (event.target === modal86 || event.target.classList.contains('modal-content')) {
    modal86.classList.remove('active');
  }
});
//Caja 87
const modal87 = document.getElementById('modal87');
const modalContent87 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar87').addEventListener('click', function () {
  modal87.classList.add('active');
});
modal87.addEventListener('click', function (event) {
  if (event.target === modal87 || event.target.classList.contains('modal-content')) {
    modal87.classList.remove('active');
  }
});
//Caja 88
const modal88 = document.getElementById('modal88');
const modalContent88 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar88').addEventListener('click', function () {
  modal88.classList.add('active');
});
modal88.addEventListener('click', function (event) {
  if (event.target === modal88 || event.target.classList.contains('modal-content')) {
    modal88.classList.remove('active');
  }
});
//Caja 89
const modal89 = document.getElementById('modal89');
const modalContent89 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar89').addEventListener('click', function () {
  modal89.classList.add('active');
});
modal89.addEventListener('click', function (event) {
  if (event.target === modal89 || event.target.classList.contains('modal-content')) {
    modal89.classList.remove('active');
  }
});
//Caja 90
const modal90 = document.getElementById('modal90');
const modalContent90 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar90').addEventListener('click', function () {
  modal90.classList.add('active');
});
modal90.addEventListener('click', function (event) {
  if (event.target === modal90 || event.target.classList.contains('modal-content')) {
    modal90.classList.remove('active');
  }
});
//Caja 91
const modal91 = document.getElementById('modal91');
const modalContent91 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar91').addEventListener('click', function () {
  modal91.classList.add('active');
});
modal91.addEventListener('click', function (event) {
  if (event.target === modal91 || event.target.classList.contains('modal-content')) {
    modal91.classList.remove('active');
  }
});
//Caja 92
const modal92 = document.getElementById('modal92');
const modalContent92 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar92').addEventListener('click', function () {
  modal92.classList.add('active');
});
modal92.addEventListener('click', function (event) {
  if (event.target === modal92 || event.target.classList.contains('modal-content')) {
    modal92.classList.remove('active');
  }
});
//Caja 93
const modal93 = document.getElementById('modal93');
const modalContent93 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar93').addEventListener('click', function () {
  modal93.classList.add('active');
});
modal93.addEventListener('click', function (event) {
  if (event.target === modal93 || event.target.classList.contains('modal-content')) {
    modal93.classList.remove('active');
  }
});
//Caja 94
const modal94 = document.getElementById('modal94');
const modalContent94 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar94').addEventListener('click', function () {
  modal94.classList.add('active');
});
modal94.addEventListener('click', function (event) {
  if (event.target === modal94 || event.target.classList.contains('modal-content')) {
    modal94.classList.remove('active');
  }
});
//Caja 95
const modal95 = document.getElementById('modal95');
const modalContent95 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar95').addEventListener('click', function () {
  modal95.classList.add('active');
});
modal95.addEventListener('click', function (event) {
  if (event.target === modal95 || event.target.classList.contains('modal-content')) {
    modal95.classList.remove('active');
  }
});
//Caja 96
const modal96 = document.getElementById('modal96');
const modalContent96 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar96').addEventListener('click', function () {
  modal96.classList.add('active');
});
modal96.addEventListener('click', function (event) {
  if (event.target === modal96 || event.target.classList.contains('modal-content')) {
    modal96.classList.remove('active');
  }
});
//Caja 97
const modal97 = document.getElementById('modal97');
const modalContent97 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar97').addEventListener('click', function () {
  modal97.classList.add('active');
});
modal97.addEventListener('click', function (event) {
  if (event.target === modal97 || event.target.classList.contains('modal-content')) {
    modal97.classList.remove('active');
  }
});
//Caja 98
const modal98 = document.getElementById('modal98');
const modalContent98 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar98').addEventListener('click', function () {
  modal98.classList.add('active');
});
modal98.addEventListener('click', function (event) {
  if (event.target === modal98 || event.target.classList.contains('modal-content')) {
    modal98.classList.remove('active');
  }
});
//Caja 99
const modal99 = document.getElementById('modal99');
const modalContent99 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar99').addEventListener('click', function () {
  modal99.classList.add('active');
});
modal99.addEventListener('click', function (event) {
  if (event.target === modal99 || event.target.classList.contains('modal-content')) {
    modal99.classList.remove('active');
  }
});
//Caja 100
const modal100 = document.getElementById('modal100');
const modalContent100 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar100').addEventListener('click', function () {
  modal100.classList.add('active');
});
modal100.addEventListener('click', function (event) {
  if (event.target === modal100 || event.target.classList.contains('modal-content')) {
    modal100.classList.remove('active');
  }
});
//Caja 101
const modal101 = document.getElementById('modal101');
const modalContent101 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar101').addEventListener('click', function () {
  modal101.classList.add('active');
});
modal101.addEventListener('click', function (event) {
  if (event.target === modal101 || event.target.classList.contains('modal-content')) {
    modal101.classList.remove('active');
  }
});
//Caja 102
const modal102 = document.getElementById('modal102');
const modalContent102 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar102').addEventListener('click', function () {
  modal102.classList.add('active');
});
modal102.addEventListener('click', function (event) {
  if (event.target === modal102 || event.target.classList.contains('modal-content')) {
    modal102.classList.remove('active');
  }
});
//Caja 103
const modal103 = document.getElementById('modal103');
const modalContent103 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar103').addEventListener('click', function () {
  modal103.classList.add('active');
});
modal103.addEventListener('click', function (event) {
  if (event.target === modal103 || event.target.classList.contains('modal-content')) {
    modal103.classList.remove('active');
  }
});
//Caja 104
const modal104 = document.getElementById('modal104');
const modalContent104 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar104').addEventListener('click', function () {
  modal104.classList.add('active');
});
modal104.addEventListener('click', function (event) {
  if (event.target === modal104 || event.target.classList.contains('modal-content')) {
    modal104.classList.remove('active');
  }
});
//Caja 105
const modal105 = document.getElementById('modal105');
const modalContent105 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar105').addEventListener('click', function () {
  modal105.classList.add('active');
});
modal105.addEventListener('click', function (event) {
  if (event.target === modal105 || event.target.classList.contains('modal-content')) {
    modal105.classList.remove('active');
  }
});
//Caja 106
const modal106 = document.getElementById('modal106');
const modalContent106 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar106').addEventListener('click', function () {
  modal106.classList.add('active');
});
modal106.addEventListener('click', function (event) {
  if (event.target === modal106 || event.target.classList.contains('modal-content')) {
    modal106.classList.remove('active');
  }
});
//Caja 107
const modal107 = document.getElementById('modal107');
const modalContent107 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar107').addEventListener('click', function () {
  modal107.classList.add('active');
});
modal107.addEventListener('click', function (event) {
  if (event.target === modal107 || event.target.classList.contains('modal-content')) {
    modal107.classList.remove('active');
  }
});
//Caja 108
const modal108 = document.getElementById('modal108');
const modalContent108 = document.querySelector('.modal-content');
document.querySelector('.btnPrevisualizar108').addEventListener('click', function () {
  modal108.classList.add('active');
});
modal108.addEventListener('click', function (event) {
  if (event.target === modal108 || event.target.classList.contains('modal-content')) {
    modal108.classList.remove('active');
  }
});
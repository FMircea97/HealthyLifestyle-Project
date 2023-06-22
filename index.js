var hamburger = document.getElementById("hamburger");
var secondNav = document.getElementById("secondary-nav");
var exit = document.getElementById("exit");

hamburger.addEventListener("click", hamMenu);

function hamMenu() {
  secondNav.style.display = "block";
}

exit.addEventListener("click", ExitBtn);

function ExitBtn() {
  secondNav.style.display = "none";
}

var allLyst = document.getElementsByClassName("new-color");

for (var x = 0; x < allLyst.length; x++) {
  allLyst[x].addEventListener("mouseover", newColor1);
  function newColor1() {
    this.classList.add("blue");
    this.style.cursor = "pointer";
  }
  allLyst[x].addEventListener("mouseout", newColor2);
  function newColor2() {
    this.classList.remove("blue");
  }
}
var home = document.getElementById("Home");
var home1 = document.getElementById("home-nav");
home1.addEventListener("click", GoHome);
function GoHome() {
  home.style.display = "block";
  antrPers1.style.display = "none";
  antrPers2.style.display = "none";
  supplements.style.display = "none";
  exercice.style.display = "none";
  antrPers3.style.display = "none";
}

var exercice = document.getElementById("exercice");
var exercice1 = document.getElementById("exercice-nav");
exercice1.addEventListener("click", Proexercice);

function Proexercice() {
  antrPers3.style.display = "none";
  antrPers2.style.display = "none";
  antrPers1.style.display = "none";
  supplements.style.display = "none";
  exercice.style.display = "block";
  home.style.display = "none";
}

var suppandfood = document.getElementById("suppandfood-nav");
var supplements = document.getElementById("supplementsfoods");
suppandfood.addEventListener("click", SuppandFood);

function SuppandFood() {
  home.style.display = "none";
  antrPers3.style.display = "none";
  antrPers2.style.display = "none";
  exercice.style.display = "none";
  antrPers1.style.display = "none";
  supplements.style.display = "block";
}

var allStyleLy = document.getElementsByClassName("style");
for (var x = 0; x < allStyleLy.length; x++) {
  allStyleLy[x].addEventListener("mouseover", addBlue);
  function addBlue() {
    this.classList.add("red");
    this.style.cursor = "pointer";
  }
  allStyleLy[x].addEventListener("mouseout", removeBlue);
  function removeBlue() {
    this.classList.remove("red");
  }
}

var antrPers1 = document.getElementById("antrenament-personalizat-1");
var tag1 = document.getElementById("tag-1");
tag1.addEventListener("click", Tag1);

function Tag1() {
  home.style.display = "none";
  antrPers3.style.display = "none";
  antrPers2.style.display = "none";
  supplements.style.display = "none";
  exercice.style.display = "none";
  antrPers1.style.display = "block";
}

var antrPers2 = document.getElementById("antrenament-personalizat-2");
var tag2 = document.getElementById("tag-2");
tag2.addEventListener("click", Tag2);

function Tag2() {
  home.style.display = "none";
  antrPers3.style.display = "none";
  supplements.style.display = "none";
  exercice.style.display = "none";
  antrPers1.style.display = "none";
  antrPers2.style.display = "block";
}

var antrPers3 = document.getElementById("antrenament-personalizat-3");
var tag3 = document.getElementById("tag-3");
tag3.addEventListener("click", Tag3);

function Tag3() {
  home.style.display = "none";
  antrPers1.style.display = "none";
  antrPers2.style.display = "none";
  supplements.style.display = "none";
  exercice.style.display = "none";
  antrPers3.style.display = "block";
}

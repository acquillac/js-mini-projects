let slides = document.querySelectorAll(".slides");
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

let n = 0;

slides[n].style.display = "block";

nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);

function nextImage() {
  let slideIndex = slides.length - 1;

  if (slideIndex === n) {
    slides[n].style.display = "none";
    n = 0;
    slides[n].style.display = "block";
  } else {
    slides[n].style.display = "none";
    n++;
    slides[n].style.display = "block";
  }
}

function prevImage() {
  let slideIndex = slides.length - 1;

  if (n <= 0) {
    console.log("if");
    slides[n].style.display = "none";
    n = slideIndex;
    slides[n].style.display = "block";
  } else {
    console.log("else");
    slides[n].style.display = "none";
    n--;
    slides[n].style.display = "block";
  }
}

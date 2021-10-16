const rightBtn = document.querySelector('.right-btn');
const leftBtn = document.querySelector('.left-btn');
const output = document.querySelector('.image-container');
const images = ['url(/background-img-slider/img/image1.jpg)',
                'url(/background-img-slider/img/image2.jpg)',
                'url(/background-img-slider/img/image3.jpg)',
                'url(/background-img-slider/img/image4.jpg',
                'url(/background-img-slider/img/image5.jpg)'];
let counter = 0;


rightBtn.addEventListener('click', () => {
  counter ++
  if (counter === images.length){
      counter = 0;
  }
  changeImage();
})

leftBtn.addEventListener('click', () => {
  counter --
  if (counter < 0){
      counter = images.length -1
  }
  changeImage();
})


function changeImage(){
  output.style.opacity = '0';
  setTimeout(() => {
    output.style.background = images[counter]
    output.style.opacity = '1'
  }, 500)
}

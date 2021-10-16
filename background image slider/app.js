const rightBtn = document.querySelector('.right-btn');
const leftBtn = document.querySelector('.left-btn');
const output = document.querySelector('.image-container');
const images = ['url(/img/image1.jpg)',
                'url(/img/image2.jpg)',
                'url(/img/image3.jpg)',
                'url(/img/image4.jpg)',
                'url(/img/image5.jpg)'];
let counter = 0;


rightBtn.addEventListener('click', () => {
  counter ++
  if (counter === images.length){
      counter = 0;
  }
  output.style.background = images[counter];
})


leftBtn.addEventListener('click', () => {
  counter --
  if (counter < 0){
      counter = images.length -1
  }
  output.style.background = images[counter];
})

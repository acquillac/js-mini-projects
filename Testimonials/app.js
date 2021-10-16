const rightButton = document.querySelector('.right-btn');
const leftButton = document.querySelector('.left-btn');
const output = document.querySelector('.testimonial-content');

let counter = 0;

rightButton.addEventListener('click', () => {
  counter ++

  fetch('testimonial.json')
    .then(res => res.json())
    .then(data => {
      if (counter === data.testimonials.length){
        counter = 0;
      }
      
      const avatar = data.testimonials[counter].avatar
      const client = data.testimonials[counter].client
      const rating = data.testimonials[counter].rating
      const quote = data.testimonials[counter].quote

      output.innerHTML = `
      <div class="client-image" style="background: url(${avatar})center/cover"></div>
      <h3>${client}</h3>
      <div class="rating">${rating}</div>
      <q>${quote}</q>
      `;
    })
    .catch(err => console.log(err))
})

leftButton.addEventListener('click', () => {
  counter--

  fetch('testimonial.json')
    .then(res => res.json())
    .then(data => {
      if (counter < 0){
        counter = data.testimonials.length -1
      }
      const avatar = data.testimonials[counter].avatar
      const client = data.testimonials[counter].client
      const rating = data.testimonials[counter].rating
      const quote = data.testimonials[counter].quote

      output.innerHTML = `
      <div class="client-image" style="background: url(${avatar})center/cover"></div>
      <h3>${client}</h3>
      <div class="rating">${rating}</div>
      <q>${quote}</q>
      `;
    })
    .catch(err => console.log(err))
})

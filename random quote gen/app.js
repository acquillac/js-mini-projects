

document.querySelector('button').addEventListener('click', () => {

  const num = 103;
  const randomNum = Math.floor(Math.random() * num);
  
  fetch('quotes.json')
    .then(res => res.json())
    .then(data => {
      
      const quote = data.quotes[randomNum].quote;
      const author = data.quotes[randomNum].author;

      document.querySelector('.output').innerHTML = 
      `<h2><q>${quote}</q></h2>
        <p>${author}</p>`;

    })
    .catch(err => console.log(err));
});
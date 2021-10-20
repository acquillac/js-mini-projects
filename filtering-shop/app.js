const search = 
document.querySelector('.search');
const shopItems = 
document.querySelectorAll('.item');


search.addEventListener('keyup', (e) => {
  
  const input = e.target.value.toLowerCase();

  shopItems.forEach( (shopItem) => {
    const item = shopItem.textContent;
    console.log(item)


    if (item.toLocaleLowerCase().indexOf(input) != -1) {
      shopItem.style.display = 'block';
    } else {
      shopItem.style.display = 'none';
    }

  } )

})


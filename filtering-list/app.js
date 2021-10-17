const search = document.querySelector('.search');
const listItems = document.querySelectorAll('.collection-item');
let counter = 0;

search.addEventListener('keyup', (e) => {
  
  const input = e.target.value.toLowerCase()

  listItems.forEach((listitem) => {
    const item = listitem.firstChild.textContent;
    if(item.toLocaleLowerCase().indexOf(input) != -1){
      listitem.style.display = 'block';
    }else{
      listitem.style.display = 'none';
    }
  })

})
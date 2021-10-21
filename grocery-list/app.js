const input = document.querySelector('.input');
const submit = document.querySelector('.submit');
const listItems = document.querySelector('.list');
const clear = document.querySelector('.clear-items');


submit.addEventListener('click', () => {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(input.value))
  listItems.appendChild(li);
  input.value = '';
})

clear.addEventListener('click', () => {
  listItems.innerHTML = '';
})



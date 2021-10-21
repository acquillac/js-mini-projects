const input = document.querySelector('.input');
const submit = document.querySelector('.submit');
const listItems = document.querySelector('.list');
const clear = document.querySelector('.clear-items');

// adding new item
submit.addEventListener('click', () => {
  if (input.value === ''){
    alert('invalid input');
  }else{
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value))
    listItems.appendChild(li);
    toLocalStorage(li.innerHTML);
    input.value = '';
  }
})

// clearing all items
clear.addEventListener('click', () => {
  localStorage.clear();
  location.reload();
})

// storing items
function toLocalStorage(input) {
  let storage;
  if (localStorage.getItem('key') === null) {
    storage = [];
  } else {
    storage = JSON.parse(localStorage.getItem('key'));
  }
  storage.push(input);
  localStorage.setItem('key', JSON.stringify(storage))
}

// getting stored items
document.addEventListener('DOMContentLoaded', () => {
  let storage;
  if (localStorage.getItem('key') === null) {
    storage = [];
  }else{
    storage = JSON.parse(localStorage.getItem('key'));
  }
  storage.forEach((item) => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item))
    listItems.appendChild(li);
  })
})

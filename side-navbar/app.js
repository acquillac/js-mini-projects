const openNav = document.querySelector('.open-nav');
const closeNav = document.querySelector('.close-nav');
const navBar = document.querySelector('.side-navbar');

openNav.addEventListener('click', () => {
  openNav.style.display = 'none';
  navBar.style.left = '0';
  
  setTimeout(function (){
    navBar.style.display = 'block';
  }, 100)

})

closeNav.addEventListener('click', () => {

  navBar.style.left = '-200px';
  setTimeout( function () {
    openNav.style.display = 'block';
  }, 100)
   
})
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const botonMenuHamburgesa = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
botonMenuHamburgesa.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() { 
  const isAsideClosed = aside.classList.contains('inactive');
  if (!isAsideClosed) {
    aside.classList.add('inactive');
  }

  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains('inactive');
  if (!isAsideClosed) {
    aside.classList.add('inactive');
  }

  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
  const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
  
  if (isMobileMenuOpen) { 
    mobileMenu.classList.add('inactive');
  }
  aside.classList.toggle('inactive');

}
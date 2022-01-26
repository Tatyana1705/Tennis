const mainNav = document.querySelector('.main-nav');
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', function() {
  if (mainNav.classList.contains('main-nav--close')) {
    toggle.classList.remove('toggle--open');
    toggle.classList.add('toggle--close');
    mainNav.classList.remove('main-nav--close');
    mainNav.classList.add('main-nav--open');
  } else {
    toggle.classList.remove('toggle--close');
    toggle.classList.add('toggle--open');
    mainNav.classList.remove('main-nav--open');
    mainNav.classList.add('main-nav--close');
  }
});

const header = document.querySelector('.header');
const main = document.querySelector('.main');

document.addEventListener('scroll', () => {
  if (scrollY > 0) {
    header.classList.add('header_fixed')
    main.style.marginTop = '214px';
  } else {
    header.classList.remove('header_fixed');
    main.style.marginTop = '48px';
  }
});

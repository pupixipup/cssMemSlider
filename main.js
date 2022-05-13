let slides = document.querySelectorAll('.slider__slide');
let controls = document.querySelector('.controls');
let slider = document.querySelector('.slider__wrapper');
let slideWidth = document.querySelector('.slider__slide').offsetWidth;
let sliderText = document.querySelector('.slider__text');
for (let i = 0; i < slides.length; i++) {
let dot = document.createElement('span');
dot.classList.add('dot');
dot.addEventListener('click', (e) => {
  let dots = document.querySelectorAll('.dot');
  dots.forEach( (item) => {
    console.log(item);
        item.classList.remove('_dot-active');
  });
  dot.classList.add('_dot-active');
});
dot.id = i;
controls.append(dot);
dot.addEventListener('click', () => {
slider.style.transform = `translateX(-${i * slideWidth}px)`
sliderText.innerText = slides[i].getAttribute('alt');
sliderText.classList.add('_fade');
setTimeout(() => {
  sliderText.classList.remove('_fade');
}, 200);
});
}

window.addEventListener('resize', () => {location.reload()});


import './assets/sass/index.scss';
import './js/skipLinks';
import './js/translation';
import '../node_modules/ip-d14-slider/dist/ip-slider/ip-slider.esm';

const browser = window.innerWidth;
const slider = document.querySelector(' ip-slider-sl-1');

if (browser < 992) {
  slider.setAttribute('item-to-show', '1');
}

if (browser < 767) {
  slider.setAttribute('item-to-show', '1');
}

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function initAccordion() {
    const items = document.querySelectorAll('.accordion__item');
    console.log(items);
    
    if (!items.length) return;
  
    items.forEach(item => {
      const header = item.querySelector('.accordion__header');
      const body   = item.querySelector('.accordion__body');
      const arrow  = header.querySelector('.accordion__btn');
      if (!header || !body) return;
  
      header.style.cursor = 'pointer';
  
      // Начальное состояние
      body.classList.remove('is-expanded');
      if (arrow) {
        arrow.style.transform = '';
      }
  
      header.addEventListener('click', () => {
        console.log('Нажат');
        
        const isOpen = body.classList.contains('is-expanded');
  
        // Закрываем все остальные
        items.forEach(other => {
          const oHdr  = other.querySelector('.accordion__header');
          const oBody = other.querySelector('.accordion__body');
          const oArr  = oHdr.querySelector('.accordion__arrow');
          oBody.classList.remove('is-expanded');
          if (oArr) {
            oArr.style.transform = '';
          }
        });
  
        // Открываем/закрываем текущий
        if (!isOpen) {
          body.classList.add('is-expanded');
          if (arrow) {
            arrow.style.transform = 'rotate(180deg)';
          }
        }
      });
    });
  }

function initSliders() {
    new Swiper('.housing-swiper', {
      modules: [Navigation],
      slidesPerView: 4,
      spaceBetween: 50,
      navigation: {
        nextEl: '.housing-swiper-button-next',
        prevEl: '.housing-swiper-button-prev',
      },
      breakpoints: {
        1440: { slidesPerView: 4 , spaceBetween: 50},
        1024: { slidesPerView: 3 , spaceBetween: 50},
        480: { slidesPerView: 2  , spaceBetween: 24},
        0: { slidesPerView: 1 , spaceBetween: 24},
      },
    });
    
    // Info Swiper
    new Swiper('.info-swiper', {
      modules: [Navigation],
      slidesPerView: 4,
      spaceBetween: 24,
      navigation: {
        nextEl: '.info-swiper-button-next',
        prevEl: '.info-swiper-button-prev',
      },
      breakpoints: {
        1440: { slidesPerView: 4 },
        1024: { slidesPerView: 3 },
        768: { slidesPerView: 2 },
        0: { slidesPerView: 1 },
      },
    });
}

document.addEventListener('DOMContentLoaded', ()=> {
  initSliders();
  initAccordion();
});

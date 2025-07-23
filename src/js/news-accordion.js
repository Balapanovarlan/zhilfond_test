function initAccordion() {
  const items = document.querySelectorAll('.accordion__item');
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
      const isOpen = body.classList.contains('is-expanded');

      // Закрываем все остальные
      items.forEach(other => {
        const oHdr  = other.querySelector('.accordion__header');
        const oBody = other.querySelector('.accordion__body');
        const oArr  = oHdr.querySelector('.accordion__btn'); // исправлено!
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
document.addEventListener('DOMContentLoaded', initAccordion); 
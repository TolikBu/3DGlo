const slider = () => {
  const sliderBlock = document.querySelector('.portfolio-content');
  const slides = document.querySelectorAll('.portfolio-item');
  // const dots = document.querySelectorAll(".dot");
  const dotBlock = document.querySelector('.portfolio-dots');
  const timeInterval = 2000;
  

  const dotss = () => {
    for (let i of slides) {
      i = slides[0].cloneNode();
      i.className = 'dot';
      dotBlock.append(i);
    }
  };
  let dots = dotss();

  let carrentSlide = 0;
  let interval;

  const prevSlides = (elems, index, strCarrent) => {
    elems[index].classList.remove(strCarrent);
  };

  const nextSlides = (elems, index, strCarrent) => {
    elems[index].classList.add(strCarrent);
  };

  const autoSlide = () => {
    dots = document.querySelectorAll('.dot');
    
    prevSlides(slides, carrentSlide, 'portfolio-item-active');
    prevSlides(dots, carrentSlide, 'dot-active');
    carrentSlide++;

    if (carrentSlide >= slides.length) {
      carrentSlide = 0;
    }

    nextSlides(slides, carrentSlide, 'portfolio-item-active');
    nextSlides(dots, carrentSlide, 'dot-active');
  };

  const startSlide = (timer = 1500) => {
    interval = setInterval(autoSlide, timer);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  sliderBlock.addEventListener('click', (e) => {
    e.preventDefault();

    if (!e.target.matches('.dot, .portfolio-btn')) {
      return;
    }

    prevSlides(slides, carrentSlide, 'portfolio-item-active');
    prevSlides(dots, carrentSlide, 'dot-active');

    if (e.target.matches('#arrow-right')) {
      carrentSlide++;
    } else if (e.target.matches('#arrow-left')) {
      carrentSlide--;
    } else if (e.target.classList.contains('dot')) {
      dots.forEach((dot, index) => {
        if (e.target === dot) {
          carrentSlide = index;
        }
      });
    }

    if (carrentSlide >= slides.length) {
      carrentSlide = 0;
    }

    if (carrentSlide < 0) {
      carrentSlide = slides.length - 1;
    }

    nextSlides(slides, carrentSlide, 'portfolio-item-active');
    nextSlides(dots, carrentSlide, 'dot-active');
  });

  sliderBlock.addEventListener(
    'mouseenter',
    (e) => {
      if (e.target.matches('.dot, .portfolio-btn')) {
        stopSlide();
      }
    },
    true
  );

  sliderBlock.addEventListener(
    'mouseleave',
    (e) => {
      if (e.target.matches('.dot, .portfolio-btn')) {
        startSlide(timeInterval);
      }
    },
    true
  );

  startSlide(timeInterval);
};

export default slider;

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const carouselImages = document.querySelectorAll('.carousel-image');
    const prevButton = carousel.querySelector('.prev');
    const nextButton = carousel.querySelector('.next');
    let activeIndex = 0;
    const intervalTime = 3000; // Time in milliseconds (3000ms = 3 seconds)

  
    function updateCarousel() {
        carouselImages.forEach((image, index) => {
          if (index === activeIndex) {
            image.classList.add('active');
            image.style.visibility = 'visible';
            image.style.position = 'relative';
          } else {
            image.classList.remove('active');
            image.style.visibility = 'hidden';
            image.style.position = 'absolute';
          }
        });
      }
  
    function move(direction) {
      activeIndex += direction;
      if (activeIndex < 0) {
        activeIndex = carouselImages.length - 1;
      } else if (activeIndex >= carouselImages.length) {
        activeIndex = 0;
      }
      updateCarousel();
    }
  
    prevButton.addEventListener('click', () => {
      move(-1);
    });
  
    nextButton.addEventListener('click', () => {
      move(1);
    });

    setInterval(() => {
        move(1);
      }, intervalTime);
    
  
    updateCarousel();
  });
  
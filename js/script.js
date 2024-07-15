document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".slider__track");
    const slides = Array.from(track.children);
    const nextButton = document.querySelector(".slider__control--next");
    const prevButton = document.querySelector(".slider__control--prev");
    const indicators = Array.from(document.querySelectorAll(".slider__indicator"));
    let currentIndex = 0;
  
    function updateSlidePosition() {
      const slideWidth = slides[0].getBoundingClientRect().width;
      anime({
        targets: track,
        translateX: -slideWidth * currentIndex,
        duration: 500,
        easing: 'easeInOutQuad'
      });
      updateIndicators();
    }
  
    function updateIndicators() {
      indicators.forEach((indicator, index) => {
        indicator.classList.toggle("active", index === currentIndex);
      });
    }
  
    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlidePosition();
    });
  
    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlidePosition();
    });
  
    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        currentIndex = index;
        updateSlidePosition();
      });
    });
  
    let startX = 0;
    let isDragging = false;
  
    track.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    });
  
    track.addEventListener("touchmove", (e) => {
      if (!isDragging) return;
      const currentX = e.touches[0].clientX;
      const moveX = currentX - startX;
      if (moveX > 50) {
        isDragging = false;
        prevButton.click();
      } else if (moveX < -50) {
        isDragging = false;
        nextButton.click();
      }
    });
  
    track.addEventListener("touchend", () => {
      isDragging = false;
    });
  
    // Resize event to adjust slide positions
    window.addEventListener("resize", updateSlidePosition);
  
    // Initial call to set the correct slide position and indicators
    updateSlidePosition();
  });
// Анимации для элементов .nav_list
document.querySelectorAll('.nav_list').forEach(navItem => {
    navItem.addEventListener('mouseenter', () => {
        anime({
            targets: navItem,
            keyframes: [
                {translateX: -10},
                {translateX: 10},
                {translateX: 0}
            ],
            duration: 800,
            easing: 'easeInOutSine'
        });
    });
});

// Анимация для иконок внутри .nav_list__icon
document.querySelectorAll('.nav_list__icon i').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        anime({
            targets: icon,
            scale: [1, 1.2, 1],
            rotate: '1turn',
            duration: 1000,
            easing: 'easeInOutSine'
        });
    });
});
  
    //GALERIJA
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');

    let index = 0;
    const totalItems = items.length / 2; // samo jedinstveni
    const itemWidth = items[0].offsetWidth + 16; // item width + gap

    // update carousel position
    function updateCarousel() {
      carousel.style.transform = `translateX(-${index * itemWidth}px)`;
    }

    // arrow loop
    leftArrow.addEventListener('click', () => {
      index--;
      if(index < 0) index = totalItems - 1;
      updateCarousel();
    });

    rightArrow.addEventListener('click', () => {
      index++;
      if(index >= totalItems) index = 0;
      updateCarousel();
    });

    // Auto-scroll
    /*let autoScroll = setInterval(() => {
      index++;
      if(index >= totalItems) index = 0;
      updateCarousel();
    }, 5000); // svakih 5 sek

    // Pause on hover
    carousel.addEventListener('mouseenter', () => clearInterval(autoScroll));
    carousel.addEventListener('mouseleave', () => {
      autoScroll = setInterval(() => {
        index++;
        if(index >= totalItems) index = 0;
        updateCarousel();
      }, 4000);
    });*/

    //READ MORE DUGMENCE
    function toggleReadMore() {
      const dots = document.getElementById("dots");
      const moreText = document.getElementById("more");
      const btn = document.getElementById("readMoreBtn");

      if (dots.style.display === "none") {
        dots.style.display = "inline";
        btn.textContent = "Read more";
        moreText.style.display = "none";
      } else {
        dots.style.display = "none";
        btn.textContent = "Read less";
        moreText.style.display = "inline";
      }
    }
    
    //SWAJPOVIII
    let startX = 0;
    let endX = 0;
    carousel.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    });

    carousel.addEventListener('touchend', (e) => {
      endX = e.changedTouches[0].clientX;
      handleSwipe();
    });

    function handleSwipe() {
      const deltaX = endX - startX;
      const swipeThreshold = 50; // minimum px za swipe

      if (deltaX > swipeThreshold) {
        //swipe right - move carousel left
        leftArrow.click();
      } else if (deltaX < -swipeThreshold) {
        //swipe left - move carousel right
        rightArrow.click();
      }
    }

    // tap kao hover za mobilni #mobilefriendly
    const eventCards = document.querySelectorAll('.event-card');

    eventCards.forEach(card => {
      card.addEventListener('click', () => {
        eventCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        });
    });


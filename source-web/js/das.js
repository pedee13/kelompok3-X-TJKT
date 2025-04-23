    // Slider otomatis
    let currentSlide = 0;
    const slides = document.getElementById("slides");
    const totalSlides = slides.children.length;

    setInterval(() => {
      currentSlide = (currentSlide + 1) % totalSlides;
      slides.style.transform = translateX(-${currentSlide * 100}%);
    }, 5000);
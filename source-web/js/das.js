    // Slider otomatis
    let currentSlide = 0;
    const slides = document.getElementById("slides");
    const totalSlides = slides.children.length;

    setInterval(() => {
      currentSlide = (currentSlide + 1) % totalSlides;
      slides.style.transform = translateX(-${currentSlide * 100}%);
    }, 5000);
    function submitFeedback() {
      const rating = document.querySelector('input[name="star"]:checked');
      const comment = document.getElementById("comment").value.trim();
      const result = document.getElementById("feedback-result");
  
      if (!rating) {
        result.style.color = "red";
        result.innerText = "Silakan beri rating terlebih dahulu.";
        return;
      }
  
      if (comment.length < 3) {
        result.style.color = "red";
        result.innerText = "Komentar terlalu singkat.";
        return;
      }
  
      // Simulasi kirim feedback
      result.style.color = "green";
      result.innerText = `Terima kasih atas feedback Anda! ⭐ (${rating.value})`;
  
      // Reset input
      document.getElementById("comment").value = "";
      document.querySelectorAll('input[name="star"]').forEach(el => el.checked = false);
    }
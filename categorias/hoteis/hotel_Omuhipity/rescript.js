 // Coordenadas do restaurante (exemplo: Ilha de Moçambique)
      const LATITUDE = -15.0364;
      const LONGITUDE = 40.735;
      const PLACE_NAME = "Restaurante Vista Mar";
      const WHATSAPP_NUMBER = "258841234567"; // Número sem + e sem espaços

      // Slider de Imagens
      let currentSlide = 0;
      const slider = document.getElementById("sliderContainer");
      const slides = slider.querySelectorAll(".slider-image");
      const totalSlides = slides.length;
      const dotsContainer = document.getElementById("dotsContainer");

      // Criar dots
      for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement("div");
        dot.className = "dot";
        if (i === 0) dot.classList.add("active");
        dot.onclick = () => goToSlide(i);
        dotsContainer.appendChild(dot);
      }

      function updateDots() {
        const dots = document.querySelectorAll(".dot");
        dots.forEach((dot, index) => {
          dot.classList.toggle("active", index === currentSlide);
        });
      }

      function moveSlide(direction) {
        currentSlide += direction;
        if (currentSlide < 0) currentSlide = totalSlides - 1;
        if (currentSlide >= totalSlides) currentSlide = 0;
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        updateDots();
      }

      function goToSlide(index) {
        currentSlide = index;
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        updateDots();
      }

      // Auto-play do slider
      setInterval(() => {
        moveSlide(1);
      }, 5000);

      // Abrir Google Maps com coordenadas
      function openGoogleMaps(event) {
        event.preventDefault();
        const url = `https://www.google.com/maps/search/?api=1&query=${LATITUDE},${LONGITUDE}`;
        window.open(url, "_blank");
      }

      // Abrir WhatsApp com mensagem automática
      function openWhatsApp(event) {
        event.preventDefault();
        const message = `Olá! Gostaria de fazer uma reserva no ${PLACE_NAME}.\n\nLocalização: https://www.google.com/maps/search/?api=1&query=${LATITUDE},${LONGITUDE}`;
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
        window.open(url, "_blank");
      }
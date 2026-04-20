// Hero Slider
class HeroSlider {
  constructor() {
    this.slides = document.querySelectorAll('.hero-slide');
    this.indicators = document.querySelectorAll('.indicator');
    this.prevBtn = document.querySelector('.prev-btn');
    this.nextBtn = document.querySelector('.next-btn');
    this.currentIndex = 0;
    this.autoPlayInterval = null;
    this.autoPlayDelay = 5000; // 5 segundos

    this.init();
  }

  init() {
    // Event listeners para botões
    this.prevBtn.addEventListener('click', () => this.prev());
    this.nextBtn.addEventListener('click', () => this.next());

    // Event listeners para indicadores
    this.indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => this.goToSlide(index));
    });

    // Iniciar autoplay
    this.startAutoPlay();

    // Pausar autoplay ao passar o mouse
    const heroSection = document.querySelector('.hero-section');
    heroSection.addEventListener('mouseenter', () => this.stopAutoPlay());
    heroSection.addEventListener('mouseleave', () => this.startAutoPlay());

    // Suporte para teclado
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
    });

    // Suporte para touch/swipe
    this.addSwipeSupport();
  }

  goToSlide(index) {
    // Remover classe active do slide atual
    this.slides[this.currentIndex].classList.remove('active');
    this.indicators[this.currentIndex].classList.remove('active');

    // Atualizar índice
    this.currentIndex = index;

    // Adicionar classe active ao novo slide
    this.slides[this.currentIndex].classList.add('active');
    this.indicators[this.currentIndex].classList.add('active');
  }

  next() {
    const nextIndex = (this.currentIndex + 1) % this.slides.length;
    this.goToSlide(nextIndex);
  }

  prev() {
    const prevIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.goToSlide(prevIndex);
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => this.next(), this.autoPlayDelay);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }

  addSwipeSupport() {
    const heroSection = document.querySelector('.hero-section');
    let startX = 0;
    let endX = 0;

    heroSection.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    });

    heroSection.addEventListener('touchmove', (e) => {
      endX = e.touches[0].clientX;
    });

    heroSection.addEventListener('touchend', () => {
      const diff = startX - endX;
      const threshold = 50; // Mínimo de pixels para considerar swipe

      if (Math.abs(diff) > threshold) {
        if (diff > 0) {
          // Swipe para esquerda - próximo slide
          this.next();
        } else {
          // Swipe para direita - slide anterior
          this.prev();
        }
      }
    });
  }
}

// Inicializar slider quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  new HeroSlider();
});

// Animações de scroll suaves
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Lazy loading para imagens
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}
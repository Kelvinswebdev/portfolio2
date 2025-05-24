// Function to animate the number counting
const counters = document.querySelectorAll('.count');

const animateCounters = () => {
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const speed = 200; // Speed of counting

    const updateCounter = () => {
      const increment = target / speed;
      count += increment;
      if (count >= target) {
        count = target;
      }
      counter.textContent = Math.floor(count);

      if (count < target) {
        requestAnimationFrame(updateCounter);
      }
    };
    updateCounter();
  });
};

// Function to check if the element is in view
const isInView = (element) => {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
};

const onScroll = () => {
  const stats = document.querySelectorAll('.stat');
  stats.forEach(stat => {
    if (isInView(stat) && !stat.classList.contains('visible')) {
      stat.classList.add('visible');
      animateCounters();
    }
  });
};

window.addEventListener('scroll', onScroll);

// Initial check in case the section is already in view on page load
onScroll();






// ##################################################################

const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const slideInterval = 3000; // Adjust the interval as needed

function showSlide() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  slides[currentSlide].classList.add('active');

  currentSlide = (currentSlide + 1) % slides.length; 
}

// Start the slideshow
showSlide(); // Show the initial slide
setInterval(showSlide, slideInterval); 

// Optional: Add touch/swipe support
let touchStartX = 0;
let touchEndX = 0;

sliderContainer.addEventListener('touchstart', (event) => {
  touchStartX = event.touches[0].clientX;
});

sliderContainer.addEventListener('touchend', (event) => {
  touchEndX = event.changedTouches[0].clientX;

  if (touchStartX < touchEndX) {
    // Swipe left: Go to previous slide
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; 
  } else if (touchStartX > touchEndX) {
    // Swipe right: Go to next slide
    currentSlide = (currentSlide + 1) % slides.length; 
  }

  showSlide();
});


function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

function toggleDropdown(event) {
  event.preventDefault();
  event.target.parentElement.classList.toggle("active");
}



function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

function toggleDropdown(event) {
  event.preventDefault();
  event.target.parentElement.classList.toggle("active");
}


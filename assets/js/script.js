document.addEventListener("DOMContentLoaded", function () {
    const fallingImgSection = document.querySelector('.fallingImg');
    const fallingImgMainElements = document.querySelectorAll('.fallingImgMain');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add a delay of 1 second before starting the animation
                setTimeout(() => {
                    fallingImgMainElements.forEach((element) => {
                        element.style.animationPlayState = 'running';
                    });
                }, 1000); // 1000ms = 1 second

                // Stop observing after triggering the animation
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null, // Observes scrolling in the viewport
        threshold: 0.2 // Animation starts when 20% of the section is visible
    });

    // Start observing the section
    if (fallingImgSection) {
        observer.observe(fallingImgSection);
    }
});

    const swiper = new Swiper('.mySwiper', {
        loop: true, // Enable infinite loop
        autoplay: {
            delay: 0, // No delay between slides
            disableOnInteraction: false, // Continue autoplay even when user interacts
        },
        speed: 5000, // Adjust slide transition speed (in milliseconds)
        slidesPerView: 'auto', // Automatically adjust slides per view
        freeMode: true, // Enable free mode for smoother scrolling
        grabCursor: true, // Show grab cursor on hover
        spaceBetween: 20, // Space between slides
    });

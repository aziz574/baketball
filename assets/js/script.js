// company slider logo 

{
    document.addEventListener("DOMContentLoaded", function () {
        const swiper = new Swiper('.logoSlider', {
            loop: true,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
            speed: 5000,
            slidesPerView: 'auto',
            freeMode: true,
            grabCursor: true,
            spaceBetween: 20,
        });
    })
}

// company slider logo 


// big ball animation

document.addEventListener('DOMContentLoaded', function () {
    const ballSection = document.querySelector('.ballAnimated');
    const container = document.querySelector('.ballAnimated .container');

    const updateContainerWidth = () => {
        const containerWidth = container.offsetWidth;
        container.style.setProperty('--container-width', `${containerWidth}px`);
    };

    // Initial calculation
    updateContainerWidth();

    // Recalculate on window resize
    window.addEventListener('resize', updateContainerWidth);

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    container.classList.add('animate');
                    observer.unobserve(ballSection);
                    console.log('Animation triggered!');
                }
            });
        },
        {
            threshold: 0.5,
        }
    );

    if (ballSection) {
        observer.observe(ballSection);
    }
});

// big ball animation



// falling image animation

{
    document.addEventListener("DOMContentLoaded", function () {
        const fallingImgSection = document.querySelector('.fallingImg');
        const fallingImgMainElements = document.querySelectorAll('.fallingImgMain');
    
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add a reduced delay of 500ms before starting the animation
                    setTimeout(() => {
                        fallingImgMainElements.forEach((element) => {
                            element.style.animationPlayState = 'running';
                        });
                    }, 100); // Reduced to 500ms (0.5 seconds)
    
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
}

// falling image animation


const drawerItemHldr = document.getElementById("drawerItemHldr");
const hamburgerBtnOpen = document.getElementById("hamburgerBtnOpen");

hamburgerBtnOpen.addEventListener("click", () => {
  drawerItemHldr.classList.toggle("visible");
  hamburgerBtnOpen.classList.toggle("active");
});
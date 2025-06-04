
    // Generalized Scroll Animation
    document.addEventListener("DOMContentLoaded", function () {
        function animateOnScroll(className, animationClass) {
            const elements = document.querySelectorAll(`.${className}`);

            elements.forEach(el => {
                const position = el.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (position < windowHeight - 100) {
                    el.classList.add(animationClass); // Apply animation class
                    el.style.opacity = 1; // Ensure visibility
                }
            });
        }

        function handleScroll() {
            animateOnScroll("animated-element-1", "animate__fadeInUp");
            animateOnScroll("animated-element-2", "animate__slideInLeft");
            animateOnScroll("animated-element-3", "animate__slideInRight"); // Add more as needed
        }

        // Attach event listener for scroll
        window.addEventListener("scroll", handleScroll);

        // Run on page load
        handleScroll();
    });
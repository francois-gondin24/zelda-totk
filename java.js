document.addEventListener("DOMContentLoaded", function () {
    const carrouselContainer = document.querySelector(".carrousel-container");
    const carrousel = document.querySelector(".carrousel");
    const images = carrousel.querySelectorAll("img");
    const prevButton = document.querySelector(".arrow.left");
    const nextButton = document.querySelector(".arrow.right");

    let index = 0; // Commence avec la première image

    function updateCarrousel() {
        const imageWidth = carrouselContainer.offsetWidth;
        const offset = -index * imageWidth;

        carrousel.style.transform = `translateX(${offset}px)`;

        // Gérer la visibilité des flèches
        prevButton.style.display = index === 0 ? 'none' : 'block';
        nextButton.style.display = index === images.length - 1 ? 'none' : 'block';
    }

    prevButton.addEventListener("click", () => {
        if (index > 0) {
            index--;
            updateCarrousel();
        }
    });

    nextButton.addEventListener("click", () => {
        if (index < images.length - 1) {
            index++;
            updateCarrousel();
        }
    });

    updateCarrousel();
});

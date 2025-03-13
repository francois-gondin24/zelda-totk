document.addEventListener("DOMContentLoaded", function () {
    const carrouselContainer = document.querySelector(".carrousel-container");
    const carrousel = document.querySelector(".carrousel");
    const images = carrousel.querySelectorAll("img");
    const prevButton = document.querySelector(".left");
    const nextButton = document.querySelector(".right");

    let index = 0; // Commence avec la première image

    function updateCarrousel() {
        images.forEach((img, i) => {
            img.classList.remove("active");
            if (i === index) {
                img.classList.add("active");
            }
        });

        // Largeur d'une image + espace entre elles
        const imageWidth = images[0].offsetWidth + 10;
        // Centrage dynamique
        const offset = (carrouselContainer.offsetWidth / 2) - (imageWidth / 2) - (index * imageWidth);

        carrousel.style.transform = `translateX(${offset}px)`;

        // Gérer la visibilité des flèches
        prevButton.style.display = index === 0 ? 'none' : 'block';
        nextButton.style.display = index === images.length - 1 ? 'none' : 'block';
    }

    prevButton.addEventListener("click", () => {
        index = (index > 0) ? index - 1 : images.length - 1;
        updateCarrousel();
    });

    nextButton.addEventListener("click", () => {
        index = (index < images.length - 1) ? index + 1 : 0;
        updateCarrousel();
    });

    updateCarrousel();
});

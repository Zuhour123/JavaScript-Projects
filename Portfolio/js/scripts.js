const contactPopupBright = document.getElementById("contact-popup-bright");
const closeButtonBright = document.querySelector(".close-button-bright");

function toggleContactForm() {
    if (contactPopupBright.style.display === "block") {
        contactPopupBright.style.display = "none";
    } else {
        contactPopupBright.style.display = "flex"; // Use flex for centering
    }
}

if (closeButtonBright) {
    closeButtonBright.onclick = function() {
        contactPopupBright.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == contactPopupBright) {
        contactPopupBright.style.display = "none";
    }
}


let gallerySlideIndex = 1;
showGallerySlides(gallerySlideIndex);

function plusGallerySlides(n) {
    showGallerySlides(gallerySlideIndex += n);
}

function currentGallerySlide(n) {
    showGallerySlides(gallerySlideIndex = n);
}

function showGallerySlides(n) {
    let i;
    const slides = document.getElementsByClassName("slide-bright");
    const dots = document.getElementsByClassName("dot-bright");
    if (!slides.length || !dots.length) return; // Exit if no slides/dots

    if (n > slides.length) { gallerySlideIndex = 1 }
    if (n < 1) { gallerySlideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[gallerySlideIndex - 1].style.display = "block";
    dots[gallerySlideIndex - 1].className += " active";
}

document.querySelectorAll('#main-navigation a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#') && href !== '#contact-me') { // Exclude contact if it opens popup
            e.preventDefault();
            const targetId = href.substring(1); // Remove #
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 60; // Adjust 60 based on nav height
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        } else if (href === '#contact-me') {
        }
    });
});

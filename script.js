// Fungsi untuk mengecek apakah elemen berada di dalam viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Menambahkan animasi fade-in atau slide-in saat elemen muncul
function animateOnScroll() {
    const fadeElements = document.querySelectorAll('.fade-in');
    const slideElements = document.querySelectorAll('.slide-in');
    const slideRightElements = document.querySelectorAll('.slide-in-right');

    fadeElements.forEach((element) => {
        if (isInViewport(element)) {
            element.classList.add('fade-in');
        }
    });

    slideElements.forEach((element) => {
        if (isInViewport(element)) {
            element.classList.add('slide-in');
        }
    });

    slideRightElements.forEach((element) => {
        if (isInViewport(element)) {
            element.classList.add('slide-in-right');
        }
    });
}

// Memanggil fungsi saat scroll
window.addEventListener('scroll', animateOnScroll);

// Memanggil fungsi untuk animasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', animateOnScroll);
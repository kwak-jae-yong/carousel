const swiper = new Swiper(".carousel", {
    slidesPerView: 3,
    //spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {


        0: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        }
    },

    centeredSlides: true,
    loop: true,
});
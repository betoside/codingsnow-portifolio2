//Navigation bar effects on scroll
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

//Services section - Modal
const serviceModals = document.querySelectorAll('.service-modal');
const learnmoreBtns = document.querySelectorAll('.learn-more-btn');
const modalcloseBtns = document.querySelectorAll('.modal-close-btn');

var modal = function(modalClick){
    serviceModals[modalClick].classList.add('active');
}

learnmoreBtns.forEach((learnmoreBtn, i) => {
    learnmoreBtn.addEventListener('click', () => {
        modal(i);
    });
});

modalcloseBtns.forEach((modalcloseBtn) => {
    modalcloseBtn.addEventListener('click', () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove('active');
        });
    });
});


//Portfolio section - Modal
const portfolioModals = document.querySelectorAll('.portfolio-model');
const imgCards = document.querySelectorAll('.img-card');
const portfolioCloseBtns = document.querySelectorAll('.portfolio-close-btn');

var portfolioModal = function(modalClick){
    portfolioModals[modalClick].classList.add('active');
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener('click', () => {
        portfolioModal(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener('click', () => {
        portfolioModals.forEach((portifolioModalView) => {
            portifolioModalView.classList.remove('active');
        });
    });
});

//Our clients - Swiper

//Website dark/light theme

//Scroll to top button

//Navigation menu items active on page scroll

//Responsive navigation menu toggle

//Scroll reveal animations
//Common reveal options to create reveal animations

//Target elements, and specify options to create reveal animations
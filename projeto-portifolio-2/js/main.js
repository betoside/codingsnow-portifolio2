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
const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme');
    themeBtn.classList.toggle('sun');

    localStorage.setItem('saved-theme', getCurrentTheme());
    localStorage.setItem('saved-icon', getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains('dark-theme') ? 'dark' : 'light';
const getCurrentIcon = () => document.body.classList.contains('sun') ? 'sun' : 'moon';

const savedTheme = localStorage.getItem('save-theme');
const savedIcon = localStorage.getItem('save-icon');

//Scroll to top button
const scrollTopBtn = document.querySelector('.scrollToTop-btn');
window.addEventListener('scroll',  ()=>{
    scrollTopBtn.classList.toggle('active', window.scrollY > 500);
});

scrollTopBtn.addEventListener('click', ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});



//Navigation menu items active on page scroll
window.addEventListener('scroll', ()=>{
    const sections = document.querySelectorAll('section');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-items a[href*='+id+"]").classList.add('active');
        } else {
            document.querySelector('.nav-items a[href*='+id+"]").classList.remove('active');
        }
    });
});

//Responsive navigation menu toggle

//Scroll reveal animations
//Common reveal options to create reveal animations

//Target elements, and specify options to create reveal animations
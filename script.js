$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: [  "Developer", "UI/UX Designer", "Freelancer","Business Analyst"],
        typeSpeed: 120,
        backSpeed: 70,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: [ "Developer", "UI/UX Designer", "Freelancer","Business Analyst"],
        typeSpeed: 120,
        backSpeed: 70,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
let slideIndex = 0;
const slides = document.querySelector(".home");

const images = [
  "./images/pro5.jpg", 
  "./images/pro6.jpg",
  "./images/pro11.jpg",
  "./images/pro13.jpg"
];

showSlides();

function showSlides() {
  slides.style.backgroundImage = `url('${images[slideIndex]}')`;
  
  slideIndex++;
  
  if (slideIndex >= images.length) {
    slideIndex = 0;
  }    

  setTimeout(showSlides, 3000); // Change slide every 3 seconds (adjust as needed)
}

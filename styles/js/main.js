const header = document.querySelector('.header');

window.addEventListener('scroll', () =>{
    const scrollPos = window.scrollY;
    if(scrollPos > 10){
        header.classList.add('scrolled');
    }else {
        header.classList.remove('scrolled');
    }
});


//------------ adopciones - carousel
const slideShow = document.querySelector('.carousel-slide'),
        slides = Array.from(slideShow.children),
        slideWidth = slides[0].getBoundingClientRect().width, //returns the width size of the first slide

        dotsNav = document.querySelector('.carousel_nav'),
        dots = Array.from(dotsNav.children);

slides.forEach((slide, index) =>{ // sets the slides one next to another
    slide.style.left = slideWidth * index + 'px';
})

const moveToSlide = (activeSlide, targetSlide) =>{
    slideShow.style.transform = `translateX(-${targetSlide.style.left})`
    activeSlide.classList.remove('carousel-slide--active')
    targetSlide.classList.add('carousel-slide--active')
}

dotsNav.addEventListener('click', e =>{
    const targetDot = e.target.closest('span');
    if(!targetDot) return; 
    
    const activeSlide = slideShow.querySelector('.carousel-slide--active')
    const activeDot = dotsNav.querySelector('.carusel-dot--active')
    const targetIndex = dots.findIndex(dot => dot === targetDot)
    const targetSlide = slides[targetIndex]

    moveToSlide(activeSlide, targetSlide)

    activeDot.classList.remove('carusel-dot--active')
    targetDot.classList.add('carusel-dot--active')

});

// function byId(id) {
//    return typeof id==="string"?document.getElementById(id):id;
// }

// let index=0
//     timer=null,
//     banner=byId("banner").getElementsByTagName("div"),
//     len=banner.length,
//     dots=byId("dots").getElementsByTagName("span");


// function slideImg() {
//     let container = byId("carrusel_container");
//     container.onmouseover = function () {
//         if(timer){
//             clearInterval(timer);
//         }
//     }
//     container.onmouseout = function () {
//         timer = setInterval(function () {
//             index++;
//             if(index>=len){
//                 index=0;
//             }
//             changeImg();
//         },4000);
//     };

//     container.onmouseout();

//     for(let d = 0; d < len ; d++){
        
//         dots[d].id = d;

//         dots[d].onclick=function () {
//             index=this.id;
//             this.className="active";
//             changeImg();
//         };
//     };

// }

// function changeImg() {
//     for(let i=0; i<len; i++){
//         banner[i].style.display='none';
//         dots[i].className="";
//     };
//     banner[index].style.display='flex';
//     dots[index].className="active";
// }


// slideImg();


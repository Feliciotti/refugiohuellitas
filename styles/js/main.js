//NAvbar
const header = document.querySelector('.main-header');
window.addEventListener('scroll', () =>{
    const scrollPos = window.scrollY;
    if(scrollPos > 10){
        header.classList.add('scrolled');
    }else {
        header.classList.remove('scrolled');
    }
});



function byId(id) {

   return  typeof id==="string"?document.getElementById(id):id;
}

var index=0,timer=null,banner=byId("banner").getElementsByTagName("div"),len=banner.length,dots=byId("dots").getElementsByTagName("span");


function slideImg() {

    var container=byId("carrusel_container");

    container.onmouseover=function () {
        if(timer){
            clearInterval(timer);
        }
    }
    container.onmouseout=function () {
        timer=setInterval(function () {
            index++;

            if(index>=len){
                index=0;
            }

            changeImg();
        },4000);
    };

    container.onmouseout();

    for(var d=0;d<len;d++){
        dots[d].id=d;

        dots[d].onclick=function () {
            index=this.id;
            this.className="active";
            changeImg();
        };
    };

}

function changeImg() {

    for(var i=0;i<len;i++){
        banner[i].style.display='none';
        dots[i].className="";
    };

    banner[index].style.display='block';
    dots[index].className="active";
}


slideImg();


const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}

 const slideShow = document.getElementById("slideShow");
    const slides = slideShow.getElementsByTagName("video");
    var index = 0;
     const slideShowText = document.getElementById("slideShowText");
    const slidesText = slideShowText.getElementsByTagName("div");
    var i = 0;

    function nextSlide() {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
         slidesText[i].classList.remove("active");
        i = (i + 1) % slidesText.length;
        slidesText[i].classList.add("active");
    }
     function prevSlide() {
        slides[index].classList.remove("active");
        index = (index - 1 + slides.length) % slides.length;
        slides[index].classList.add("active");
          slidesText[i].classList.remove("active");
        i = (i - 1 + slidesText.length) % slidesText.length;
        slidesText[i].classList.add("active");
    }

     
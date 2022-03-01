/// slider if exist ///

// const swiper = new Swiper(".mySwiper", {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   slidesPerGroup: 1,
//   loop: true,
//   loopFillGroupWithBlank: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });


// swiper();

// mobile
const hamburger = document.querySelector(".header__hamburger");
const moblieMenu = document.querySelector(".header__menu");
const mobileSearchBtn = document.querySelector(".header-mobile__button");
const mobileInput = document.querySelector(".header-mobile__input");
const headerLinks = document.querySelectorAll(".header__link");

function hamburgerOpen(){
  hamburger.style.animation = null;
  hamburger.classList.remove("icon-hamburger");
  hamburger.classList.add("icon-closex");
  hamburger.classList.toggle('animate');
}

function hamburgerClose(){
  hamburger.style.animation = null;
  hamburger.classList.remove("icon-closex")
  hamburger.classList.add("icon-hamburger");
  hamburger.classList.toggle('animate');
}


//listener on hamburger btn
hamburger.addEventListener("click",()=>{
    moblieMenu.classList.toggle("header__menu--active");
  if(hamburger.classList.contains("icon-hamburger")){
      hamburgerOpen();
      document.body.style.overflowY = "hidden";
      return;
  }else{
      hamburgerClose();
      document.body.style.overflowY = "unset";
    return;
  }
})

/// listener on menu links click 
headerLinks.forEach(link => {
  link.addEventListener("click",()=>{
    if(hamburger.classList.contains("icon-closex")){
      moblieMenu.classList.toggle("header__menu--active")
      hamburgerClose();
    }else{
      return;
    }
  })
  
});



mobileSearchBtn.addEventListener("click",()=>{
    mobileInput.classList.toggle("header-mobile__input--active");
});

//desktop

const searchDesktop = document.querySelector(".header-form__btn");
const inputDesktop = document.querySelector(".header__input");

searchDesktop.addEventListener("click",()=>{
  inputDesktop.classList.toggle("header__input--active");
});
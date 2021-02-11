"use strict"

//Functional buttons

let body = document.querySelector('body'),
    menuMobileFull = document.querySelector('.h-mobile_wrap'),
    headerMobile = document.querySelector('.h-mobile'),
    searchBtn = document.querySelector('.h-m__right__search-icon'),
    searchMobile = document.querySelector('.h-mobile__search_wrap'),
    menuBtn = document.querySelector('.h-m__left__hamburger'),
    mobileMenu = document.querySelector('.links-mobile'),
    mobileCatalogList = document.querySelector('.goods-mobile'),
    mobileCatalogBtn = document.querySelector('.mobile__catalog'),    
    backBtn = document.querySelector('.goods-mobile__back-btn'),
    closeMenuBtn = document.querySelectorAll('.h-mobile__close_wrap')[0],
    searchCloseBtn = document.querySelectorAll('.h-mobile__close_wrap')[1];

searchBtn.addEventListener('click', function () {
    searchMobile.classList.toggle('dnone');
})

searchCloseBtn.addEventListener('click', function () {
    searchMobile.classList.toggle('dnone');
})

menuBtn.addEventListener('click', function () {
    mobileMenu.classList.toggle('dnone');
    menuBtn.classList.toggle('dnone');
    closeMenuBtn.classList.toggle('dnone');
    searchMobile.classList.add('dnone');
    body.style.overflow = 'hidden';
    menuMobileFull.classList.add('fixed');
    headerMobile.style.position = "fixed";
})

closeMenuBtn.addEventListener('click', function () {
    menuMobileFull.classList.remove('fixed');
    headerMobile.style.position = "";
    searchMobile.classList.add('dnone');
    mobileMenu.classList.add('dnone');
    mobileCatalogList.classList.add('dnone');
    closeMenuBtn.classList.toggle('dnone');
    menuBtn.classList.toggle('dnone');
    body.style.overflow = 'auto';
})

mobileCatalogBtn.addEventListener('click', function () {
    mobileMenu.classList.toggle('dnone');
    mobileCatalogList.classList.toggle('dnone');
})

backBtn.addEventListener('click', function () {
    mobileMenu.classList.toggle('dnone');
    mobileCatalogList.classList.toggle('dnone');
})


//Slider

let videoItem = document.querySelectorAll('.main-video_inner>.main-video__item'),
    leftBtn = document.querySelectorAll('.nav-btns_wrap>.nav-btns')[0],
    rightBtn = document.querySelectorAll('.nav-btns_wrap>.nav-btns')[1],
    num = 0;

    //move slides on left
function slideOnLeft() {
    document.querySelector('.main-video_inner').append(videoItem[num]);
    num += 1;
}

    //move slides on rigth
function slideOnRight() {
    num -= 1;
    document.querySelector('.main-video_inner').prepend(videoItem[num]);
}

    //left button listner
leftBtn.addEventListener('click', function (event) {
    if (num < videoItem.length) {

        for (let i = 0; i < videoItem.length; i++) {
            videoItem[i].classList.add('slide');
            videoItem[i].style.transform = "translateX(-100%)";
            setTimeout(function transform() {
                videoItem[i].style.transform = "translate( 0px, 0px )";
                videoItem[i].classList.remove('slide');
            }, 1500);
        }

        setTimeout(function relocate() {
            slideOnLeft()
        }, 1500);

    } else {
        num = 0;
        slideOnLeft();
    }
})
    //right button listner
rightBtn.addEventListener('click', function (event) {
    //do while index of a slide < length of the array with slides 
    if (num != 0 && num < videoItem.length) {
        
        for (let i = 0; i < videoItem.length; i++) {
            //add animation classes
            videoItem[i].classList.add('slide');
            videoItem[i].style.transform = "translateX(100%)";
            //add function to reset blocks position and remove animation class
            setTimeout(function transform() {
                videoItem[i].style.transform = "translate( 0px, 0px )";
                videoItem[i].classList.remove('slide');
            }, 1500);
        }

        setTimeout(function relocate() {
            slideOnRight()
        }, 1500);
        
    } else {
        num = videoItem.length;
        slideOnRight();
    }
})
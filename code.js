document.body.style.scrollbarFaceColor="red"
document.body.style.scrollbarArrowColor="blue"
document.body.style.scrollbarTrackColor="orange"
document.body.style.scrollbarShadowColor="black"
document.body.style.scrollbarHighlightColor="brown"
document.body.style.scrollbar3dlightColor="green"
document.body.style.scrollbarDarkshadowColor="orange"







/*const intro=document.querySelector('.intro');
const video=document.querySelector('.video');
const text=document.querySelector('.text');

const section=document.querySelector('section');
const end=document.querySelector('.text');

const controller=new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
    duration:12000,
    triggerElement:intro,
    triggerHook: 0
})
.addIndicators()
.setPin(intro)
.addTo(controller);

const textAnim = TweenMax.fromTo(text, 3, {opacity: 1}, {opacity:0});

let scene2 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement:intro,
    triggerHook: 0
})
.setTween(textAnim)
.addTo(controller);

let accelamount = 0.1;
let scrollpos=0;
let delay=0;
scene.on('update', e => {
    scrollpos= e.scrollPos/100;
    
})

setInterval(() => {
    delay +=(scrollpos - delay)*accelamount;
    video.currentTime = scrollpos;
}, 120);*/
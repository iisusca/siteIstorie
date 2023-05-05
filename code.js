

//NVM fac mai multe doar ca cu marimi diferite...
window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    document.getElementById('year').textContent="Anul " + Math.round((window.pageYOffset / (document.body.offsetHeight - window.innerHeight)*500+300));
    if(window.pageYOffset / (document.body.offsetHeight - window.innerHeight)<0.3) {
        document.body.style.setProperty('--my-var', 100);
        document.getElementById('fill-color').style.backgroundColor="red";
    }
    if(window.pageYOffset / (document.body.offsetHeight - window.innerHeight)>0.3) {
        document.body.style.setProperty('--my-var', 200);
        document.getElementById('fill-color').style.backgroundColor="orange";

    }
    //Deci ce vreau; sa creasca pana cand o valoare ajunge la capat, apoi din nou zeo, apoi val. iara creste...
    
  }, false);



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
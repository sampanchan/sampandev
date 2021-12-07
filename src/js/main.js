console.log(` 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`)

console.log('test');

let  menuToggle = document.querySelector(".hamburger");
menuToggle.addEventListener('click', event =>{
    // let  nav = document.querySelector(".header-nav");
    document.body.classList.toggle('nav-active');
    console.log('clicked');
} );

var blossomDelay = new gsap.timeline({repeat:-1});
blossomDelay.to('#flower3', {duration: 1, delay:1, rotation: 360, transformOrigin: '50% 50%'});
blossomDelay.to('#flower4', {duration: 2, delay:1, rotation: 360, transformOrigin: '50% 50%'});
blossomDelay.to('#flower2', {duration: 2, delay:1, rotation: 360, transformOrigin: '50% 50%'});
blossomDelay.to('#flower1', {duration: 3, delay:1, rotation: 360, transformOrigin: '50% 50%'});


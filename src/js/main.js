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

var blossomDelay = new TimeLineMax({repeat:-1});
blossomDelay
.to('#flower3',1, {delay:2, rotation: 360, transformOrigin: '50% 50%'});
.to('#flower4',2, {delay:1, rotation: 360, transformOrigin: '50% 50%'});
.to('#flower2',2, {delay:5, rotation: 360, transformOrigin: '50% 50%'});
.to('#flower1',3, {delay:5, rotation: 360, transformOrigin: '50% 50%'});
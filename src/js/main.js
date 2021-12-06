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

ScrollReveal().reveal('#section-1', {
    duration: 1000, 
    origin: 'bottom', 
    distance: '100px', 
});


ScrollReveal().reveal('#section-2', {
    duration: 1000,
    origin: 'right', 
    distance: '50px' 
});

const typed = new Typed('#div-pai-section-3', {
    strings: [""],
    typeSpeed: 30, 
    backSpeed: 25, 
    loop: true, 
    showCursor: false, 
    fadeOut: true, 
});
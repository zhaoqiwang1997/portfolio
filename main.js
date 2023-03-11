let toggle = document.querySelector('.toggle');
let topbar = document.querySelector('.topbar');
let navigator = document.querySelector('.navigator');
let main = document.querySelector('.main');
// toggle classes on and off
toggle.onclick = function(){
    toggle.classList.toggle('active');
    topbar.classList.toggle('active');
    navigator.classList.toggle('active');
    main.classList.toggle('active');
}

// optimize for mobile devices
function toggleMenu(){
    let navigator = document.querySelector('.navigator');
    let main = document.querySelector('.main');
    navigator.classList.remove('active');
    main.classList.remove('active');
}
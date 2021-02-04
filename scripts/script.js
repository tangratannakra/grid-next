const navToggler = document.querySelector('.nav-btn__label');
let mainNavClassList = document.querySelector('.main-nav').classList;

navToggler.addEventListener('change', ()=>{
    setTimeout(()=> {mainNavClassList.toggle('display-none')}, 450);
})




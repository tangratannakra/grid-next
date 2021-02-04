const navToggler = document.getElementById('nav-btn');
let mainNavClassList = document.querySelector('.main-nav').classList;

navToggler.addEventListener('change', ()=>{
    setTimeout(()=> {mainNavClassList.toggle('display-none')}, 500);
})




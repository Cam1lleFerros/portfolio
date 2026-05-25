const headerEl = document.querySelector('.header')
const heroEl = document.querySelector('.hero')
window.addEventListener(
    'scroll',()=>{
        if(window.scrollY>heroEl.clientHeight-50){
            headerEl.classList.add('header-scrolled');
        }
        else if(window.scrollY<heroEl.clientHeight-50){
            headerEl.classList.remove('header-scrolled');
        }
    }
)
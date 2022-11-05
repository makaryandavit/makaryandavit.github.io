const line2 = document.querySelector('.line2')
const line3 = document.querySelector('.line3')
const lines = document.querySelector('.lines');
const burgerContent = document.querySelector('.burgerContent');
const serachBox = document.querySelector('.search-box')
const search = document.querySelector('.search')
const header = document.querySelector('header');
const body = document.body;
const cart = document.querySelector('.cart');
const basket = document.querySelector('.basket');
const cross = document.querySelector('.cross');
const headerRight = document.querySelector('.header-right-left')

lines.addEventListener('click',function(){
    line2.classList.toggle('line2Change');
    line3.classList.toggle('line3Change');
    burgerContent.classList.toggle('burgerCome')
    header.classList.toggle('backWhite')
    body.classList.toggle('hidden')
})



search.addEventListener('click',function(){
    serachBox.classList.toggle('searchCome');
    header.classList.toggle('backWhite');
    body.classList.toggle('hidden');
    searchInput.value = '';
    basket.classList.remove('basketCome')
})

const main = document.querySelector('#main');
main.addEventListener('click',function(){
    serachBox.classList.remove('searchCome');
    basket.classList.remove('basketCome');
})

cart.addEventListener('click',function(){
    basket.classList.add('basketCome')
    body.classList.add('hidden')
    serachBox.classList.remove('searchCome')
})

cross.addEventListener('click',function(){
    basket.classList.remove('basketCome')
    body.classList.remove('hidden')
})

const searchInput = document.querySelector('.inp-search');
const searchButton = document.querySelector('.search-btn');

searchButton.addEventListener('click',function(){
    searchInput.value = '';
})

const toTop = document.querySelector('.toTop');
toTop.addEventListener('click',function(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
})


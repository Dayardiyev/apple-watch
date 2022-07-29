
/* ============================= VARIABLES ============================= */

const elements = document.querySelectorAll('.hero-item')
const main = document.querySelector('.main')
const mainImg = document.getElementById("main-img")
const circles = document.querySelectorAll('.circle')
const font = document.querySelector('.font-theme')
const li = document.querySelector('.header-nav ul li.active')

/* ============================= TOGGLE THEME/ITEM CHANGE ============================= */

elements.forEach((element, idx) => {
    element.addEventListener('click', () => {
        if(idx == 0){
            li.style.color = "var(--blue)"
            font.style.color = "var(--blue)"
            main.style.background = "var(--blue-bg)"
            mainImg.src = "img/watch-blue.svg"
            removeActive()
            circles[0].classList.add('active')
        } else if(idx == 1){
            li.style.color = "var(--dark-blue)"
            font.style.color = "var(--dark-blue)"
            main.style.background = "var(--dark-blue-bg)"
            mainImg.src = "img/watch-dark-blue.svg"
            removeActive()
            circles[1].classList.add('active')
        } else if(idx == 2){
            li.style.color = "var(--turquoise)"
            font.style.color = "var(--turquoise)"
            main.style.background = "var(--turquoise-bg)"
            mainImg.src = "img/watch-turquoise.svg"
            removeActive()
            circles[2].classList.add('active')
        }
    })
})

/* ============================= TOGGLE THEME/ITEM CHANGE ============================= */

circles.forEach((element, idx) => {
    element.addEventListener('click', () => {
        if(idx == 0){
            li.style.color = "var(--blue)"
            font.style.color = "var(--blue)"
            main.style.background = "var(--blue-bg)"
            mainImg.src = "img/watch-blue.svg"
            removeActive()
            circles[0].classList.add('active')
        } else if(idx == 1){
            li.style.color = "var(--dark-blue)"
            font.style.color = "var(--dark-blue)"
            main.style.background = "var(--dark-blue-bg)"
            mainImg.src = "img/watch-dark-blue.svg"
            removeActive()
            circles[1].classList.add('active')
        } else if(idx == 2){
            li.style.color = "var(--turquoise)"
            font.style.color = "var(--turquoise)"
            main.style.background = "var(--turquoise-bg)"
            mainImg.src = "img/watch-turquoise.svg"
            removeActive()
            circles[2].classList.add('active')
        }
    })
})

/* ----------- CIRCLES ----------- */

function removeActive(){
    circles.forEach((circle => circle.classList.remove('active')))
}

/* ============================= BURGER MENU ============================= */

const header = document.querySelector('.header-wrapper')
const headerBurger = document.querySelector('.header-burger')

/* ----------- BURGER OPEN ----------- */

headerBurger.addEventListener('click', () =>{
    header.classList.toggle('active')
})

/* ----------- BURGER CLOSE ----------- */

document.querySelector('.hero').addEventListener('click', () =>{
    header.classList.remove('active')
})
const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const items = document.querySelectorAll('.item')
const dots = document.querySelectorAll('.dots')
const numberIndicator = document.querySelectorAll('.numbers')
const list = document.querySelectorAll('.list')

let active = 0;
const total = items.length
let timer;

// let ou const (var) quando criar uma variavel e ela assumir um valor e ela continuar com esse valor sempre, será const - valor constante
//let para variáveis que trocam os valores


function update(direction) {
    document.querySelector('.item.active').classList.remove('active')
    document.querySelector('dot.active').classList.remove('active')

    if(direction > 0) {
        active = active + 1
        
        if(active === total){
            active = 0
        }
    } 
    
    else if(direction < 0) {
        active = active - 1

        if(active < 0) {
            active = total - 1
        }
    }

    items[active].classList.add('active')
    dots[active].classList.add('active')
}

prevButton.addEventListener('click', () => {
    update(-1)
})

nextButton.addEventListener('click', () => {
    update(+1)
})
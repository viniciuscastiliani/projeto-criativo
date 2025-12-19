const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const items = document.querySelectorAll('.item')
const dots = document.querySelectorAll('.dot')
const numberIndicator = document.querySelector('.numbers')

let active = 0
const total = items.length
let timer

function update(direction) {
  document.querySelector('.item.active')?.classList.remove('active')
  document.querySelector('.dot.active')?.classList.remove('active')

  active = (active + direction + total) % total

  items[active].classList.add('active')
  dots[active].classList.add('active')
  numberIndicator.textContent = String(active + 1).padStart(2, '0')

  resetTimer()
}

function resetTimer() {
  clearInterval(timer)
  timer = setInterval(() => update(1), 5000)
}

prevButton.addEventListener('click', () => update(-1))
nextButton.addEventListener('click', () => update(1))

resetTimer()


let startX = 0

list.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX
})

list.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX
  const diff = startX - endX

  if (Math.abs(diff) > 50) {
    diff > 0 ? update(1) : update(-1)
  }
})


document.addEventListener('keydown', (e) => {
  if (e.key === 't') {
    document.body.dataset.theme =
      document.body.dataset.theme === 'light' ? '' : 'light'
  }
})


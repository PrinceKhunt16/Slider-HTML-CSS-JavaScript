const left = document.querySelector('.left')
const right = document.querySelector('.right')
const slider = document.querySelector('.slider')
const frame = document.querySelector('.frame')
const images = document.querySelectorAll('.image')
const bottom = document.querySelector('.bottom')
const length = images.length
let frameWidth = frame.offsetWidth
let slideNumber = 1

for(let i = 0; i < length; i++){
  const div = document.createElement("div")
  div.className = "button"
  bottom.appendChild(div)
}

const buttons = document.querySelectorAll('.button')
buttons[0].style.backgroundColor = "#000"

const resetBg = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
  })
}

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    resetBg()
    slider.style.transform = `translateX(-${i * frameWidth}px)`
    slideNumber = i + 1
    button.style.backgroundColor = "#000";
  })
})

const prevSlide = () => {
  slider.style.transform = `translateX(-${(slideNumber - 2) * frameWidth}px)`
  slideNumber--
}

const nextSlide = () => {
  slider.style.transform = `translateX(-${slideNumber * frameWidth}px)`
  slideNumber++
}

const getFirstSlide = () => {
  slider.style.transform = `translateX(0px)`
  slideNumber = 1
}

const getLastSlide = () => {
  slider.style.transform = `translateX(-${(length - 1) * frameWidth}px)`
  slideNumber = length
}
 
const changeColor = () => {
  buttons[slideNumber - 1].style.backgroundColor = '#000'
}

left.addEventListener("click", () => {
  slideNumber > 1 ? prevSlide() : getLastSlide()
  resetBg()
  changeColor()
})

right.addEventListener("click", () => {
  slideNumber < length ? nextSlide() : getFirstSlide()
  resetBg()
  changeColor()
})
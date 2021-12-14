import { incrementCustomProperty, setCustomProperty } from './updateCustomProperty.js'

const SPEED = 0.05
const starsELems = document.querySelectorAll('[data-stars]')

export function setupStars() {
   setCustomProperty(starsElems[0], "--left", 0)
   setCustomProperty(starsElems[1], "--left", 330)
}

export function updateStars(delta) {
   starsELems.forEach(stars => {
      incrementCustomProperty(stars, "--left", delta * SPEED * -1)
   })
}
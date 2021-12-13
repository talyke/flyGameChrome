import { incrementCustomProperty } from './updateCustomProperty.js'

const SPEED = .05
const starsELems = document.querySelectorAll('[data-stars]')

export function updateStars(delta) {
   starsELems.forEach(stars => {
  incrementCustomProperty(stars, "--left", delta * SPEED * -1)
   })
}
import { getCustomProperty, incrementCustomProperty, setCustomProperty } from './updateCustomProperty.js'

const SPEED = 0.05
const starsELems = document.querySelectorAll("[data-stars]")

export function setupStars() {
   setCustomProperty(starsElems[0], "--left", 0)
   setCustomProperty(starsElems[1], "--left", 300)
}

export function updateStars(delta, speedScale) {
   starsELems.forEach(stars => {
      incrementCustomProperty(stars, "--left", delta * speedScale * SPEED * -1)

      if (getCustomProperty(stars, "--left") <= -300) {
         incrementCustomProperty(stars, "--left", 600)
      }
   })
}
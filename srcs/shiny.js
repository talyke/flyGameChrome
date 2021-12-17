import { getCustomProperty, incrementCustomProperty, setCustomProperty } from './updateCustomProperty.js'

const SPEED = 0.05
const  SHINY_INTERVAL_MIN = 500
const  SHINY_INTERVAL_MAX = 2000
const worldElem = document.querySelector("[data-world]")

let nextShinyTime
export function setupShiny() {
    nextShinyTime = SHINY_INTERVAL_MIN
    document.querySelectorAll("[data-cactus]").forEach(shiny => {
        shiny.remove
    })
}

export function updateShiny(delta, speedScale) {
    document.querySelectorAll("[data-shiny]").forEach(shiny => {
        incrementCustomProperty(shiny, "--left", delta * speedScale * SPEED * -1)
        if (getCustomProperty(shiny, "--left") <= -100) {
            shiny.remove()
        }
    })
    if (nextShinyTime <= 0) {
    createShiny()
    nextShinyTime = randomNumberBetween(SHINY_INTERVAL_MIN, 
    SHINY_INTERVAL_MAX) / speedScale
    }
    nextShinyTime -= delta
}

function createShiny() {
    const shiny = document.createElement("div")
    shiny.dataset.shiny = true
    shiny.src = "imgs/shiny.png"
    shiny.classList.add("shiny")
    setCustomProperty(shiny, "--left", 100)
    worldElem.append(shiny)
}

function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

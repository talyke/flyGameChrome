import { updateStars, setupStars } from './stars.js'
import { updateFly, setupFly } from './fly.js'
import { updateShiny, setupShiny } from './shiny.js'

const WORLD_WIDTH = 100
const WORLD_HEIGHT = 30
const SPEED_SCALE_INCREASE = 0.00001


const worldElem = document.querySelector("[data-world]")
const scoreElem = document.querySelector("[data-score]")
const startScreenElem = document.querySelector("[data-start-screen]")

setPixelWorldToScale()
window.addEventListener("resize", setPixelWorldToScale)
document.addEventListener("keydown", handleStart, { once: true})

setupStars()

let lastTime
let speedScale
let score
function update(time) {
    if (lastTime == null) {
    lastTime = time
    window.requestAnimationFrame(update)
    return
}
const delta = time - lastTime

updateStars(delta, speedScale)
updateFly(delta, speedScale)
updateShiny(delta, speedScale)
updateSpeedScale(delta)
updateScore(delta)

lastTime = time
window.requestAnimationFrame(update)
}

function updateSpeedScale(delta) {
    speedScale += delta * SPEED_SCALE_INCREASE
}

function updateScore(delta) {
 score =+ delta * 0.01
 scoreElem.textContent = Math.floor(score)
}

function handleStart() {
    lastTime = null
    speedScale = 1
    score = 0
    setupStars()
    setupFly()
    setupShiny()
    startScreenElem.classList.add("hide")
    window.requestAnimationFrame(update)
}

function setPixelWorldToScale() {
    let pixelWorldToScale
    if (window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT) {
        pixelWorldToScale = window.innerWidth / WORLD_WIDTH
    } else {
        pixelWorldToScale = window.innerHeight / WORLD_HEIGHT
    }
    worldElem.style.width = `${WORLD_WIDTH * pixelWorldToScale}px`
    worldElem.style.height = `${WORLD_HEIGHT * pixelWorldToScale}px`
}

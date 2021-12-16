import { updateStars, setupStars } from './stars.js'

const WORLD_WIDTH = 100
const WORLD_HEIGHT = 30
const SPEED_SCALE_INCREASE = .00001


const worldElem = document.querySelector('[data-world]')
const scoreElem = document.querySelector('[data-world]')
const startScreenElem = document.querySelector('[data-start-screen]')

setPixelWorldToScale()
window.addEventListener("resize", setPixelWorldToScale)
document.addEventListener("keydown", handleStart, { once: true})

setupStars()

let lastTime
let speedScale
function update(time) {
    if (lastTime == null) {
    lastTime = time
    window.requestAnimationFrame(update)
    return
}
const delta = time - lastTime

updateStars(delta, speedScale)
updateSpeedScale(delta)

lastTime = time
window.requestAnimationFrame(update)
}

function updateSpeedScale(delta) {
    speedScale += delta * SPEED_SCALE_INCREASE
}

function updateScore(delta) {
 score =+ delta * .01
 scoreElem.textContent = Math.floor(score)
}

function handleStart() {
    lastTime = null
    speedScale = 1
    score = 0
    setupStars()
    startScreenElem.classList.add("hide")
    window.requestAnimationFrame(update)
}

function setPixelWorldToScale() {
    let worldPixelScale
    if (window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT) {
        worldPixelScale = window.innerWidth / WORLD_WIDTH
    } else {
        worldPixelScale = window.innerHeight / WORLD_HEIGHT
    }

    worldElem.getElementsByClassName.width = `${WORLD_WIDTH * worldPixelScale}px`
    worldElem.getElementsByClassName.height = `${WORLD_HEIGHT * worldPixelScale}px`

}

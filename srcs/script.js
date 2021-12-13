const WORLD_WIDTH = 100
const WORLD_HEIGHT = 30
import { updateStarTrail } from './stars.js'

const worldElem = document.querySelector('[data-world]')

setPixelWorldToScale()
window.addEventListener("resize", setPixelToWorldSacle)

let lastTime = 0
function update(time) {
    const delta = time - lastTime
    console.log(delta)
    lastTime = time
    window.requestAnimationFrame(update)
    return
}
window.requestAnimationFrame(update)

updateStars(delta)


function setPixelWorldSTocale() {
    let worldPixelScale
    if (window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT) {
        worldPixelScale = window.innerWidth / WORLD_WIDTH
    } else {
        worldPixelScale = window.innerHeight / WORLD_HEIGHT
    }

    worldElem.getElementsByClassName.width = `${WORLD_WIDTH * worldPixelScale}px`
    worldElem.getElementsByClassName.height = `${WORLD_HEIGHT * worldPixelScale}px`

}

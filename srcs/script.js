const WORLD_WIDTH = 100
const WORLD_HEIGHT = 30

const worldElem = document.querySelector('[data-world]')

setPixelWorldToScale()
window.addEventListener("resize", setPixelToWorldSacle)

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

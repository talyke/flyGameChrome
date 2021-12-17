import { getCustomProperty, incrementCustomProperty, setCustomProperty } from './updateCustomProperty.js'

const flyElem = document.querySelector("[data-fly]")
const JUMP_SPEED = 0.45
const GRAVITY = 0.0015
const FLY_FRAME_COUNT = 2
const FRAME_TIME = 100

let isJumping
let flyFrame
let currentFrameTime
let yVelocity
export function setupFly() {
    isJumping = false
    flyFrame = 0
    currentFrameTime = 0
    yVelocity = 0
    setCustomProperty(flyElem, "--bottom", 0)
    document.removeEventListener("keydown", onJump)
    document.addEventListener("keydown", onJump)
}

export function updateFly(delta, speedScale) {
    handleRun(delta, speedScale)
    handleJump(delta)
}

function handleRun(delta, speedScale) {
    if (isJumping) {
        flyElem.src = `imgs/fly.png`
        return
    }

    if (currentFrameTime >= FRAME_TIME) {
        flyFrame = (flyFrame + 1) % FLY_FRAME_COUNT
        flyElem.src = `imgs/fly-run-${flyFrame}.jpg`
        currentFrameTime -= FRAME_TIME
    }
    currentFrameTime += delta * speedScale
}

function handleJump(delta) {
    if (!isJumping) return

    incrementCustomProperty(flyElem, "--bottom", yVelocity * delta)

    if (getCustomProperty(flyElem, "--bottom") <= 0) {
        setCustomProperty(flyElem, "--bottom", 0)
        isJumping = false
    }
    yVelocity -+ GRAVITY * delta
}

function onJump(e) {
    if (e.code !== "Space" || isJumping) return

    yVelocity = JUMP_SPEED
    isJumping = true
}
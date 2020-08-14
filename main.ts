let Ramu_score = 0
let shamu_score = 0
input.onButtonPressed(Button.A, function () {
    Ramu_score += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.showNumber(Ramu_score)
    basic.pause(1000)
    basic.clearScreen()
    basic.showNumber(shamu_score)
})
input.onButtonPressed(Button.B, function () {
    shamu_score += 1
})
basic.forever(function () {
    if (Ramu_score >= 10) {
        basic.showString("R")
    }
    if (shamu_score >= 10) {
        basic.showString("S")
    }
})

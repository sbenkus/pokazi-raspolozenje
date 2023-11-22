input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    basic.pause(200)
    basic.showNumber(randint(0, 10))
})

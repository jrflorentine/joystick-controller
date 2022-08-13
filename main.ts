pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
radio.setGroup(1)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P2) < 500) {
        radio.sendString("left")
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (pins.analogReadPin(AnalogPin.P2) > 750 && pins.analogReadPin(AnalogPin.P2) < 850) {
        radio.sendString("right")
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (pins.analogReadPin(AnalogPin.P0) > 600) {
        radio.sendString("up")
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (pins.analogReadPin(AnalogPin.P0) < 300) {
        radio.sendString("down")
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else {
        radio.sendString("stop")
        basic.clearScreen()
    }
})

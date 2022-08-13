pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
radio.setGroup(1)
basic.forever(function () {
    while (pins.digitalReadPin(DigitalPin.P1) == 1) {
        if (pins.analogReadPin(AnalogPin.P0) < 600) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
        } else if (pins.analogReadPin(AnalogPin.P0) > 800) {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
        } else if (pins.analogReadPin(AnalogPin.P2) > 800) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
        } else if (pins.analogReadPin(AnalogPin.P2) < 600) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
        } else {
            basic.clearScreen()
        }
    }
    basic.showIcon(IconNames.No)
})

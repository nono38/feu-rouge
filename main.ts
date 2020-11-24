input.onPinPressed(TouchPin.P0, function () {
	
})
input.onButtonPressed(Button.A, function () {
    DOUCEMENT = 5
})
input.onButtonPressed(Button.AB, function () {
    caca = 0
})
input.onButtonPressed(Button.B, function () {
    DOUCEMENT = 8
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
let DOUCEMENT = 0
let caca = 0
caca = 1
DOUCEMENT = 1
while (caca) {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(2000 * DOUCEMENT)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(1500 * DOUCEMENT)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P1, 3)
    basic.pause(500 * DOUCEMENT)
    pins.digitalWritePin(DigitalPin.P1, 0)
}

input.onButtonPressed(Button.A, () => {
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(5000000)
    pins.digitalWritePin(DigitalPin.P1, 0)
})
radio.onDataPacketReceived( ({ receivedNumber }) =>  {
    if (receivedNumber == 0) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.showIcon(IconNames.Heart)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.showIcon(IconNames.StickFigure)
    }
})
radio.setGroup(18)
basic.showIcon(IconNames.Heart)
pins.digitalWritePin(DigitalPin.P1, 0)
basic.forever(() => {
	
})

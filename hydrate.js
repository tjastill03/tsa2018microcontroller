let moisture = 0
let motion = 0
// If both buttons pressed set steps to 0
input.onButtonPressed(Button.AB, () => {
    basic.showString("Humidity %:")
    basic.showNumber(weatherbit.humidity() / 1024)
    motion = 0
})
// Count the steps when shaking
input.onGesture(Gesture.Shake, () => {
    motion += 1
})
// Show the steps
input.onButtonPressed(Button.A, () => {
    basic.showNumber(motion)
})
// Show the temperature
input.onButtonPressed(Button.B, () => {
    basic.showNumber(input.temperature())
})
// Group for sending to parents
radio.setGroup(18)
weatherbit.startWeatherMonitoring()
motion = 0
basic.showNumber(motion)
basic.forever(() => {
    moisture = pins.analogReadPin(AnalogPin.P2)
    if (weatherbit.humidity() > 56 && moisture > 200) {
        basic.showIcon(IconNames.Sad)
        radio.sendNumber(1)
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        basic.showIcon(IconNames.Happy)
        radio.sendNumber(0)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
basic.forever(() => {

})

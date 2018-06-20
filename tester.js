input.onButtonPressed(Button.A, () => {
    basic.showIcon(IconNames.No)
    radio.sendNumber(0)
})
input.onButtonPressed(Button.B, () => {
    basic.showIcon(IconNames.Yes)
    radio.sendNumber(1)
})
radio.setGroup(18)
basic.forever(() => {
	
}]

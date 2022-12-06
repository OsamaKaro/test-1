input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # . . .
        # . # . .
        . # . . #
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    music.playMelody("- - - A G G - - ", 120)
})
basic.forever(function () {
	
})

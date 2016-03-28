# Forever

Repeat code [in the background](/microbit/reference/control/in-background) forever.

```sig
basic.forever(() => {
})
```

### Example: compass

The following example constantly checks the [compass heading](/microbit/reference/input/compass-heading) and updates the screen with the direction.

```blocks
basic.forever(() => {
    let heading = input.compassHeading()
    if (heading < 45) {
        basic.showString("N", 100)
    } else if (heading < 135) {
        basic.showString("E", 100)
    }
    else if (heading < 225) {
        basic.showString("S", 100)
    }
    else {
        basic.showString("W", 100)
    }
})
```

### Example: counter

The following example continually shows the current value of a global variable:

```blocks
let num = 0
basic.forever(() => {
    basic.showNumber(num, 150)
})
input.onButtonPressed("A", () => {
    num = num + 1
})
```

### Contention for the LED display

If you have multiple processes that each show something on the LED screen, you may get unexpected results. Try, for example:

```blocks
basic.forever(() => {
    basic.showNumber(6789, 150)
})
input.onButtonPressed(Button.A, () => {
    basic.showNumber(2, 150)
})
```

### Lessons

[blink](/microbit/lessons/blink), [bounce-image](/microbit/lessons/bounce-image),  [snowflake-fall](/microbit/lessons/snowflake-fall), [flashing-heart](/microbit/lessons/flashing-heart)

### See also

[while](/microbit/js/while), [on button pressed](/microbit/reference/input/on-button-pressed), [in background](/microbit/reference/control/in-background)

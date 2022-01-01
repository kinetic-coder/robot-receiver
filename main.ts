function HaltIfClose (distance: number) {
    basic.showString("" + (distance))
    if (distance < 5) {
        moveBackwards(1000)
    }
}
function processRequest (requestString: string) {
    if (requestString == "G") {
        moveForward(0)
    }
    if (requestString == "S") {
        halt()
    }
    if (requestString == "<") {
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, 80)
        basic.pause(100)
        halt()
    }
    if (requestString == ">") {
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, 80)
        basic.pause(100)
        halt()
    }
    if (requestString == "B") {
        moveBackwards(0)
    }
}
function moveForward (duration: number) {
    moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
    moveMotorZIP.showColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Yellow))
    moveMotorZIP.show()
    Kitronik_Move_Motor.beepHorn()
    Kitronik_Move_Motor.beepHorn()
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 80)
    if (duration > 0) {
        basic.pause(duration)
        halt()
    }
}
function playImperialMarch () {
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(311, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
}
function moveBackwards (duration: number) {
    moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
    moveMotorZIP.showColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Green))
    Kitronik_Move_Motor.beepHorn()
    Kitronik_Move_Motor.beepHorn()
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, 80)
    if (duration > 0) {
        basic.pause(duration)
        halt()
    }
}
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    processRequest(receivedString)
})
function halt () {
    Kitronik_Move_Motor.beepHorn()
    Kitronik_Move_Motor.stop()
    moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
    moveMotorZIP.showColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Red))
    moveMotorZIP.show()
}
let distance = 0
let moveMotorZIP: Kitronik_Move_Motor.MoveMotorZIP = null
radio.setGroup(50)
Kitronik_Move_Motor.setUltrasonicUnits(Kitronik_Move_Motor.Units.Centimeters)
basic.forever(function () {
    distance = Kitronik_Move_Motor.measure()
    HaltIfClose(distance)
})

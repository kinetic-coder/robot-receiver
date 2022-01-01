function processRequest (requestString: string) {
    if (requestString == "G") {
        playImperialMarch()
        moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
        moveMotorZIP.showColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Yellow))
        moveMotorZIP.show()
        Kitronik_Move_Motor.beepHorn()
        Kitronik_Move_Motor.beepHorn()
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 80)
    }
    if (requestString == "S") {
        moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
        moveMotorZIP.showColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Red))
        moveMotorZIP.show()
        Kitronik_Move_Motor.beepHorn()
        Kitronik_Move_Motor.stop()
    }
    if (requestString == "<") {
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, 80)
        basic.pause(100)
        Kitronik_Move_Motor.stop()
    }
    if (requestString == ">") {
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, 80)
        basic.pause(100)
        Kitronik_Move_Motor.stop()
    }
    if (requestString == "B") {
        moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
        moveMotorZIP.showColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Green))
        Kitronik_Move_Motor.beepHorn()
        Kitronik_Move_Motor.beepHorn()
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, 80)
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
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    processRequest(receivedString)
})
let moveMotorZIP: Kitronik_Move_Motor.MoveMotorZIP = null
radio.setGroup(50)
basic.forever(function () {
	
})

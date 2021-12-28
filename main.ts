function processRequest (requestString: string) {
    if (requestString == "G") {
        switchOffLights()
        moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(0)
        moveMotorZIP.showColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.White))
        moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(1)
        moveMotorZIP.showColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.White))
        moveMotorZIP.show()
        Kitronik_Move_Motor.beepHorn()
        Kitronik_Move_Motor.beepHorn()
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 80)
    }
    if (requestString == "S") {
        switchOffLights()
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
}
function switchOffLights () {
    moveMotorZIP2 = Kitronik_Move_Motor.createMoveMotorZIPLED(0)
    moveMotorZIP.clear()
    moveMotorZIP2 = Kitronik_Move_Motor.createMoveMotorZIPLED(1)
    moveMotorZIP.clear()
    moveMotorZIP2 = Kitronik_Move_Motor.createMoveMotorZIPLED(2)
    moveMotorZIP.clear()
    moveMotorZIP2 = Kitronik_Move_Motor.createMoveMotorZIPLED(3)
}
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    processRequest(receivedString)
})
let moveMotorZIP2: Kitronik_Move_Motor.MoveMotorZIP = null
let moveMotorZIP: Kitronik_Move_Motor.MoveMotorZIP = null
radio.setGroup(50)
basic.forever(function () {
	
})

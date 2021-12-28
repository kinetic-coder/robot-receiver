function processRequest (requestString: string) {
    if (requestString == "MOVE-FORWARD") {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 80)
    }
    if (requestString == "STOP") {
        Kitronik_Move_Motor.stop()
    }
    if (requestString == "LEFT") {
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, 80)
        basic.pause(100)
        Kitronik_Move_Motor.stop()
    }
    if (requestString == "RIGHT") {
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, 80)
        basic.pause(100)
        Kitronik_Move_Motor.stop()
    }
}
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    processRequest(receivedString)
})
radio.setGroup(50)
basic.forever(function () {
	
})

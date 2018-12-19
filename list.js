const SerialPort = require('serialport')

SerialPort.list((err, port) => {
	console.log(err, port)
});

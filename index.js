const SerialPort = require('serialport')


const port = new SerialPort('/dev/ttyACM0', {
  baudRate: 115200
})

port.on('data', function (data) {
  console.log('Data:', data)
})

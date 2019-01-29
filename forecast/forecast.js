const request = require('request')

const forecastRequest = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/8530a8baa9a0d049f53453923953be42/${lat + ',' + lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const temperature = (body.currently.temperature - 32) * 0.5556
      const apparentTemperature = (body.currently.apparentTemperature - 32) * 0.5556
      callback(undefined, {
        temperature: temperature.toFixed(1),
        apparentTemperature: apparentTemperature.toFixed(1)
      })
    } else {
      callback('Unable to fetch weather')
    }
  })
}

module.exports = {
  forecastRequest
}

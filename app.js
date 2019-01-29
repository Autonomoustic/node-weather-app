const yargs = require('yargs')

const geocode = require('./geocode/geocode')
const forecast = require('./forecast/forecast')

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage)
  } else if (results) {
    console.log(JSON.stringify(results, undefined, 2))
  }
})

forecast.forecastRequest(51.5363442, -0.3188306, (errorMessage, weatherResults) => {
  if (errorMessage) {
    console.log(errorMessage)
  } else if (weatherResults) {
    console.log(JSON.stringify(weatherResults, undefined, 2))
    console.log(`The temperature is ${weatherResults.temperature} degrees`)

    console.log(`But feels like ${weatherResults.apparentTemperature} degrees`)
  }
})

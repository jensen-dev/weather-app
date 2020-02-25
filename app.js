// to run: node app.js [name of city]
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2]

if (!location) {
    console.log('Please provide an address')
}else {
    geocode(location, (error, {latitude, longitude, location}) => {
        if (error) {
            return console.log('Error', error)
        } else {
            forecast(latitude, longitude, (error, forecastData) => {
                if (error) {
                    return console.log('Error', error)
                } else {
                    console.log(location)
                    console.log(forecastData)
                }
            })
        }
    })
}
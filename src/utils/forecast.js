const request = require ('request')

const forecast = (latitude, longitude , callback ) => {
    const url = 'http://api.weatherstack.com/current?access_key=64c7481fefed8547d0dddba486cedace&query=' + latitude + ',' + longitude + '&units=m'

    request ({url, json:true}, (error, {body}={} ) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        }else if (body.error) {
            callback('Location is missspeled',undefined)
        }else {
           
            callback (undefined, 'It is currently '+ body.current.temperature + '℃, and feels like  ' +  body.current.feelslike + '℃. Wind speed at the moment is ' + body.current.wind_speed + 'km per hour.')

        }

    })
}

module.exports = forecast
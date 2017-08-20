const axios = require('axios')

module.exports = (config, request, respond) => {
    const query = request.arguments.join(' ')

    axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + query + '&units=metric&appid=' + config.weather.apiKey).then((response) => {
        const json = response.data

        const city = json.name
        const country = json.sys.country
        const description = json.weather[0].main
        const temperature = json.main.temp

        respond(request.from + ': ' + city + ', ' + country + ' | ' + description + ' | ' + temperature + 'C')
    })
}

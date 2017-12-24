module.exports = (config, models, request, respond) => {
    let response = ''

    switch (request.arguments[0]) {
        case 'weather':
            response = '.weather query'
        break

        case 'insult':
            response = '.insult nick?'
        break

        case 'lifts':
            response = '.lifts nick?'
        break

        case 'lifts_add':
            response = '.lifts_add exercise weight unit repetitions'
        break

        case 'lifts_remove':
            response = '.lifts_remove exercise'
        break

        case 'tell':
            response = '.tell nick message'
        break

        default:
            response = 'commands: '

            for (const command in config.commands) {
                response += command + ', '
            }

            response = response.slice(0, -2)
        break
    }

    respond(request.from + ': ' + response)
}

module.exports = (config, models, request, respond) => {
    if (request.arguments.length >= 2) {
        const to = request.arguments[0]

        // Don't include recipient in text
        request.arguments.shift()

        models['message'].create({
            from: request.from,
            to: to,
            text: request.arguments.join(' '),
            sent: false
        })

        respond(request.from + ': done')
    } else {
        respond(request.from + ': syntax error')
    }
}

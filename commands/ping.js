module.exports = (config, models, request, respond) => {
    respond(request.from + ': pong')
}

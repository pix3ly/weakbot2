module.exports = (config, models, request, respond) => {
    if (arguments[0] && arguments[1] && arguments[2] && arguments[3]) {
        const user = request.from
        const exercise = request.arguments[0]
        const weight = request.arguments[1]
        const unit = request.arguments[2]
        const repetitions = request.arguments[3]

        models['lift'].create({
            user, exercise, weight, unit, repetitions
        })

        respond(request.from + ': done')
    } else {
        respond(request.from + ': wrong syntax, check out .help')
    }
}

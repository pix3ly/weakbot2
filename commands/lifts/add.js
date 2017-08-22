module.exports = (config, models, request, respond) => {
    const user = request.from
    const exercise = request.arguments[0]
    const weight = request.arguments[1]
    const unit = request.arguments[2]
    const repetitions = request.arguments[3]

    models['lift'].create({
        user, exercise, weight, unit, repetitions
    })

    respond(request.from + ': done')
}

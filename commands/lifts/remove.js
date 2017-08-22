module.exports = (config, models, request, respond) => {
    if (request.arguments.length === 1) {
        const user = request.from
        const exercise = request.arguments[0]

        models['lift'].destroy({
            where: {
                user, exercise
            }
        })

        respond(request.from + ': done')
    } else {
        respond(request.from + ': syntax error')
    }
}

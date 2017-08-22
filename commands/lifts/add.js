module.exports = (config, models, request, respond) => {
    if (request.arguments.length === 4) {
        const user = request.from
        const exercise = request.arguments[0]
        const weight = request.arguments[1]
        const unit = request.arguments[2]
        const repetitions = request.arguments[3]

        models['lift'].findOne({
            where: {
                user, exercise
            }
        }).then((lift) => {
            if (lift) {
                lift.weight = weight
                lift.unit = unit
                lift.repetitions = repetitions

                lift.save()
            } else {
                models['lift'].create({
                    user, exercise, weight, unit, repetitions
                })
            }
        })

        respond(request.from + ': done')
    } else {
        respond(request.from + ': syntax error')
    }
}

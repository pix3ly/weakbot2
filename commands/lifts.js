module.exports = (config, models, request, respond) => {
    let target = request.from

    if (request.arguments[0]) {
        target = request.arguments[0]
    }

    models['lift'].findAll({
        where: {
            user: target
        }
    }).then((lifts) => {
        let responseString = ''

        lifts.forEach((lift, key, array) => {
            responseString += lift.exercise + ' ' + lift.repetitions + 'x' + lift.weight + lift.unit

            if (key !== array.length - 1) {
                responseString += ' | '
            }
        })

        respond(request.from + ': ' + responseString)
    })
}

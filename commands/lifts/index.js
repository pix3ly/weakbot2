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

        if (target !== request.from) {
            responseString += target + ' | '
        }

        if (lifts.length) {
            lifts.forEach((lift, key, array) => {
                responseString += lift.exercise + ' ' + lift.weight + lift.unit + 'x' + lift.repetitions

                if (key !== array.length - 1) {
                    responseString += ' | '
                }
            })
        } else {
            responseString += 'dissapointment'
        }

        respond(request.from + ': ' + responseString)
    })
}

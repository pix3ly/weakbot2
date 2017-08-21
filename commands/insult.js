const Sequelize = require('sequelize')

module.exports = (config, models, request, respond) => {
    models['insult'].find({
        order: [
            Sequelize.fn('RAND')
        ]
    }).then((insult) => {
        let target = request.from

        if (request.arguments[0]) {
            target = request.arguments[0]
        }

        respond(target + ': ' + insult.text)
    })
}

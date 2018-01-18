const config = require('./config')

const Sequelize = require('sequelize')
const irc = require('irc')

const sequelize = new Sequelize(config.database.name, config.database.user, config.database.password, {
    dialect: 'mysql',
    define: {
        timestamps: false
    }
})

const client = new irc.Client(config.client.server, config.client.user, {
    channels: config.client.channels
})

let models = []

models['insult'] = require('./models/insult')(sequelize)
models['lift'] = require('./models/lift')(sequelize)
models['message'] = require('./models/message')(sequelize)

sequelize.sync()

client.addListener('registered', (msg) => {
    client.say('nickserv', 'IDENTIFY ' + config.client.password)
})

client.addListener('message', (from, to, msg) => {
    const startingCharacter = msg.substr(0, 1)

    if (startingCharacter === '.') {
        const parts = msg.split(' ')

        const command = parts[0].substr(1)

        if (config.commands[command]) {
            parts.shift()

            const request = {
                from, to, arguments: parts
            }

            config.commands[command](config, models, request, (response) => {
                client.say(to, response)
            })
        }
    }

    models['message'].findOne({
        order: ['id'],
        where: {
            to: from,
            sent: false
        }
    }).then((message) => {
        if (message) {
            client.say(to, message.to + ': message from ' + message.from + ' | ' + message.text)

            message.sent = true

            message.save()
        }
    })
})

const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

app.use('/', express.static('public'))

nunjucks.configure('views', {
    express: app
})

app.get('/', (request, response) => {
    response.render('index.html')
})

app.get('/lifts/:nick', (request, response) => {
    const nick = request.params.nick

    models['lift'].findAll({
        where: {
            user: nick
        }
    }).then((lifts) => {
        response.render('lifts/show.html', {
            nick, lifts
        })
    })
})

app.listen(3000)

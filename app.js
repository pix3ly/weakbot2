const config = require('./config')

const irc = require('irc')

const client = new irc.Client(config.client.server, config.client.user, {
    channels: config.client.channels
})

client.addListener('message', (from, to, msg) => {
    const startingCharacter = msg.substr(0, 1)

    if (startingCharacter === '.') {
        const command = msg.substr(1)

        if (config.commands[command]) {
            config.commands[command](config, from, to, msg, (response) => {
                client.say(to, response)
            })
        }
    }
})

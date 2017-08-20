const config = require('./config')

const irc = require('irc')

const client = new irc.Client(config.client.server, config.client.user, {
    channels: config.client.channels
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

            config.commands[command](config, request, (response) => {
                client.say(to, response)
            })
        }
    }
})

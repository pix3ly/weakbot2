const config = require('./config')

const irc = require('irc')

const client = new irc.Client(config.client.server, config.client.user, {
    channels: config.client.channels
})

client.addListener('message', (from, to, msg) => {
    console.log(from + ': ' + msg)
})

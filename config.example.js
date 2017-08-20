module.exports = {
    client: {
        server: 'irc.freenode.org',
        user: 'weakbot2',
        channels: ['#something']
    },
    commands: [
        ping: require('./commands/ping')
    ]
}

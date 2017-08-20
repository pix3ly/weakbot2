module.exports = {
    client: {
        server: 'irc.freenode.org',
        user: 'weakbot2',
        password: '',
        channels: ['#something']
    },
    commands: {
        ping: require('./commands/ping'),
        weather: require('./commands/weather')
    },
    weather: {
        apiKey: ''
    }
}

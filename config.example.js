module.exports = {
    client: {
        server: 'irc.freenode.org',
        user: 'weakbot2',
        password: '',
        channels: ['#something']
    },
    database: {
        name: 'weakbot2',
        user: 'root',
        password: ''
    },
    commands: {
        ping: require('./commands/ping'),
        weather: require('./commands/weather'),
        insult: require('./commands/insult'),
        lifts: require('./commands/lifts')
    },
    weather: {
        apiKey: ''
    }
}

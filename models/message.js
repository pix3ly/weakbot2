const Sequelize = require('sequelize')

module.exports = (sequelize) => {
    return sequelize.define('message', {
        from: Sequelize.STRING,
        to: Sequelize.STRING,
        text: Sequelize.STRING,
        sent: Sequelize.BOOLEAN
    })
}

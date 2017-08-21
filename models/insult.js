const Sequelize = require('sequelize')

module.exports = (sequelize) => {
    return sequelize.define('insult', {
        text: Sequelize.STRING
    })
}

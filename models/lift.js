const Sequelize = require('sequelize')

module.exports = (sequelize) => {
    return sequelize.define('lift', {
        user: Sequelize.STRING,
        exercise: Sequelize.STRING,
        weight: Sequelize.FLOAT
        repetitions: Sequelize.INTEGER,
        unit: Sequelize.STRING
    })
}

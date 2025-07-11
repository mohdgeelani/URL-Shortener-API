const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const URL = sequelize.define('Url',{
    originalurl : {
        type : DataTypes.TEXT,
        allowNull : false
    },
    shortCode : {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },},
    {
        tableName: 'urls',
        timestamps : true,



});

module.exports = URL;
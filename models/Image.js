const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Image extends Model {};

Image.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        img_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'post',
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'Image'
    }
);

module.exports = Image;
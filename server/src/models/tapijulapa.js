import {DataTypes} from 'sequelize'
import { sequelize } from '../database/database.js'

export const tapijulapa = sequelize.define('tapijulapa', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_imagen: {
        type: DataTypes.STRING
    },
    titulo: {
        type: DataTypes.STRING
    },
}, {   
    tableName: 'tapijulapa',
    timestamps: false }); 
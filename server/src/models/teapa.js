import {DataTypes} from 'sequelize'
import { sequelize } from '../database/database.js'

export const teapa = sequelize.define('teapa', {
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
    tableName: 'teapa',
    timestamps: false }); 
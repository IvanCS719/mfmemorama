import {DataTypes} from 'sequelize'
import { sequelize } from '../database/database.js'

export const comodines = sequelize.define('comodines', {
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
    tableName: 'comodines',
    timestamps: false }); 
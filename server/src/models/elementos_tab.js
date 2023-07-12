import {DataTypes} from 'sequelize'
import { sequelize } from '../database/database.js'

export const elementos_tab = sequelize.define('elementos_tab', {
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
    tableName: 'elementos_tab',
    timestamps: false }); 
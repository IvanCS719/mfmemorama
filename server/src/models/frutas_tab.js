import {DataTypes} from 'sequelize'
import { sequelize } from '../database/database.js'

export const frutas_tab = sequelize.define('frutas_tab', {
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
    tableName: 'frutas_tab',
    timestamps: false }); 
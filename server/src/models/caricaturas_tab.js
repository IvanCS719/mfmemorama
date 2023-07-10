import {DataTypes} from 'sequelize'
import { sequelize } from '../database/database.js'

export const caricaturas_tab = sequelize.define('caricaturas_tab', {
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
    tableName: 'caricaturas_tab',
    timestamps: false });
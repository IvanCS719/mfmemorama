import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('memorama', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
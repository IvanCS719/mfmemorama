import app from './app.js'
import {sequelize} from './database/database.js' 
/*
import './models/caricaturas_tab.js'
import './models/centla.js'
import './models/chontal_espanol.js'
import './models/comodines.js'
import './models/elementos_tab.js'
import './models/frutas_tab.js'
import './models/tapijulapa.js'
import './models/teapa.js'*/

async function main() {
    try {
        await sequelize.sync();
        app.listen(3000);
        console.log('Servidor Activo', 3000)
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
} 

main();


//{force: true} elimina tabla y crea
import express from 'express';
import app from './app.js';
import {sequelize} from './database/database.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
/*
import './models/caricaturas_tab.js'
import './models/centla.js'
import './models/chontal_espanol.js'
import './models/comodines.js'
import './models/elementos_tab.js'
import './models/frutas_tab.js'
import './models/tapijulapa.js'
import './models/teapa.js'*/


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configurar la ruta estática para los archivos en la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

async function main() {
  try {
      await sequelize.sync();
      app.listen(3000);
      console.log('Servidor Activo', 'http://localhost:' + 3000)
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
} 

main();


//{force: true} elimina tabla y crea
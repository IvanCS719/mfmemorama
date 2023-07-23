import express from 'express';
import caricaturasRoutes from './routes/caricaturas_tab.routes.js';
import centlaRoutes from './routes/centla.routes.js';
import teapaRoutes from './routes/teapa.routes.js';
import chontalRoutes from './routes/chontal_espanol.routes.js';
import comodinesRoutes from './routes/comodines.routes.js';
import elementosRoutes from './routes/elementos_tab.routes.js';
import frutasRoutes from './routes/frutas_tab.routes.js';
import tapijulapaRoutes from './routes/tapijulapa.routes.js';
import path from 'path';

import cors from 'cors';


const app = express();

//middlewares
app.use(express.json());

const corsOptions = {
    origin: '*', // Especifica el dominio permitido (o '*' para permitir cualquier dominio)
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
    credentials: true, // Habilita el uso de credenciales (por ejemplo, cookies) en solicitudes
  };
  
  // Middleware para habilitar CORS con opciones personalizadas
  app.use(cors(corsOptions))

app.use(caricaturasRoutes);
app.use(centlaRoutes);
app.use(teapaRoutes);
app.use(chontalRoutes);
app.use(comodinesRoutes);
app.use(elementosRoutes);
app.use(frutasRoutes);
app.use(tapijulapaRoutes);


 
export default app;

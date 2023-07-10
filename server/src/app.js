import express from 'express';
import caricaturasRoutes from './routes/caricaturas_tab.routes.js';
import centlaRoutes from './routes/centla.routes.js';
import teapaRoutes from './routes/teapa.routes.js';
import chontalRoutes from './routes/chontal_espanol.routes.js';
import comodinesRoutes from './routes/comodines.routes.js';
import elementosRoutes from './routes/elementos_tab.routes.js';
import frutasRoutes from './routes/frutas_tab.routes.js';
import tapijulapaRoutes from './routes/tapijulapa.routes.js';

const app = express();

//middlewares
app.use(express.json());

app.use(caricaturasRoutes);
app.use(centlaRoutes);
app.use(teapaRoutes);
app.use(chontalRoutes);
app.use(comodinesRoutes);
app.use(elementosRoutes);
app.use(frutasRoutes);
app.use(tapijulapaRoutes);


export default app;

import express from 'express';
import caricaturasRoutes from './routes/caricaturas_tab.routes.js';
import centlaRoutes from './routes/centla.routes.js';
import teapaRoutes from './routes/teapa.routes.js';
import chontalRoutes from './routes/chontal_espanol.routes.js';

const app = express();

//middlewares
app.use(express.json());

app.use(caricaturasRoutes);
app.use(centlaRoutes);
app.use(teapaRoutes);
app.use(chontalRoutes);

export default app;

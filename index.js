import express from 'express';
// import bodyParser from 'body-parser';
import cors from 'cors';

import Connection from './database/db.js';

import UserRoutes from './routes/userRoutes.js';
import TeamRoutes from './routes/teamRoutes.js';
import FilteringRoutes from './routes/filteringRoutes.js';
const app = express();
const PORT = 5000;

Connection();

app.use(cors());
app.use('/api', UserRoutes);
app.use('/api', TeamRoutes);
app.use('/api', FilteringRoutes);

// app.use(bodyParser.json({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`http://localhost:${PORT}/user`));
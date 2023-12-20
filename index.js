import express from 'express';
import bodyParser from 'body-parser';

import userRoutes from './routes/users.js';

const app = express();
const POST = 5000;

app.use(bodyParser.json());

app.use('/users', userRoutes);

app.get('/', (req, res) => { res.send('Hello from Homepage....')});

app.listen(POST, () => console.log(`Server running on post: http://localhost${POST}`))
import express, { Express, Request, Response } from 'express';
import walletRouter from './routes/wallet';
import webhookRouter from './routes/webhook';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Blockchain server running');
});

app.use('/api/wallet', walletRouter);
app.use('/api/webhook', webhookRouter);

export default app;

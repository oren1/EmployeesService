import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser'
import setRoutes from './Routes'

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

setRoutes(app)

app.get('/', (req: Request, res: Response) => {
  res.send('Users Service');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
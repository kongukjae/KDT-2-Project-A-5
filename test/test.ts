import express, {Express, Request, Response} from 'express';

const app:Express = express();

app.get('/', (req:Request, res:Response) => {
  console.log(req.headers);
  res.send('Hello World!');
})

app.listen(2080, () => {
  console.log('server running at 2080');
})
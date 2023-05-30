import express from 'express';
import path from 'path';

const app:express.Application = express();
const root:string = path.join(__dirname, '../../');

app.get('/', (req:express.Request, res:express.Response) => {
  res.sendFile(path.join(root, './bundle/index.html'));
});

app.use(express.static(path.join(root, './bundle')))

app.listen(8080, ()=>{
  console.log('server listenning on 8080');
})
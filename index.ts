// index.ts
import express from 'express'
import dotenv from 'dotenv'
import blogRoutes from './src/routes/BlogRoutes'
import userRoutes from './src/routes/UserRoutes'
import { Request, Response } from 'express'
import path from "path"

dotenv.config()

const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))
app.use('/api/blog', blogRoutes);
app.use('/api/user', userRoutes);

const indexHtml = path.join(__dirname, 'public', 'index.html')


app.get('/', (req: Request, res: Response) => {
  return res.sendFile(indexHtml);
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

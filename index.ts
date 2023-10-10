// index.ts
import express from 'express'
import dotenv from 'dotenv'
import blogRoutes from './src/routes/BlogRoutes'
import userRoutes from './src/routes/UserRoutes'
import { Request, Response } from 'express'
import path from "path"

dotenv.config()

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public')); 
const indexHtml = path.join(__dirname, 'public', 'index.html')


app.get('/', (req: Request, res: Response) => {
  return res.sendFile(indexHtml);
});

app.use('/api/v1/blog', blogRoutes);
app.use('/api/v1/user', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

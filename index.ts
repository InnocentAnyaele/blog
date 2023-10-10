// index.ts
import express from 'express'
import dotenv from 'dotenv'
import blogRoutes from './src/routes/BlogRoutes'
import userRoutes from './src/routes/UserRoutes'

dotenv.config()

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/blog', blogRoutes);
app.use('/user', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = 5000;

import user from '../controller/user.js';

app.use(express.json());

app.get('/', (req, res) => {
  res.send(
    'Selamat datang di API BookVerse. Silahkan akses endpoint /api untuk memulai 💓'
  );
});

app.use('/api/user', user);

app.listen(PORT, () => {
  console.log(`Sudah terhubung dengan port http://localhost:${PORT} 💓`);
});

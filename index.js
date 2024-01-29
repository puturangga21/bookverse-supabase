import user from './controller/user.js';
import express from 'express';

const app = express();
const PORT = 5000;

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

import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();

router.get('/', async (req, res) => {
  const data = await prisma.user.findMany();
  res.send(data);
});

router.get('/:id', async (req, res) => {
  const reqId = req.params.id;

  try {
    const data = await prisma.user.findUnique({
      where: {
        id: reqId,
      },
    });

    res.send({
      message: 'Data berhasil ditemukan',
      data: data,
    });
  } catch (error) {
    res.status(400).send({
      message: 'Data gagal ditemukan',
      data: error,
    });
  }
});

router.post('/', async (req, res) => {
  const reqBody = req.body;
  try {
    const data = await prisma.user.create({
      data: {
        user: reqBody.user,
        age: reqBody.age,
        gender: reqBody.gender,
      },
    });

    res.send({
      message: 'Data berhasil ditambahkan',
      data: data,
    });
  } catch (error) {
    res.status(400).send({
      message: 'Data gagal ditambahkan',
      data: error,
    });
  }
});

export default router;

const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

// Listar usuários
app.get('/usuarios', async (req, res) => {
  const usuarios = await prisma.usuario.findMany({ include: { produtos: true } });
  res.json(usuarios);
});

// Criar usuário
app.post('/usuarios', async (req, res) => {
  const { nome, email, senha } = req.body;
  const novoUsuario = await prisma.usuario.create({
    data: { nome, email, senha },
  });
  res.json(novoUsuario);
});

// Criar produto para usuário
app.post('/produtos', async (req, res) => {
  const { nome, descricao, preco, usuarioId } = req.body;
  const novoProduto = await prisma.produto.create({
    data: {nome, descricao, preco, usuario: { connect: { id: usuarioId } }}
  });
  res.json(novoProduto);
});

// Deletar produto
app.delete('/produtos/:id', async (req, res) => {
  const { id } = req.params;
  await prisma.produto.delete({ where: { id: Number(id) } });
  res.json({ message: 'Produto deletado' });
});

app.listen(3001, () => console.log('Servidor rodando na porta 3001'));

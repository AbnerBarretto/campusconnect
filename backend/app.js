const express = require("express");
const cors = require("cors");

const {
  createChamado,
  createReserva,
  createRefeicao,
  listChamados,
  listReservas,
  listRefeicoes,
  getStatus,
} = require("./store");

const app = express();

app.use(cors());
app.use(express.json({ limit: "1mb" }));

app.get("/api/status", (req, res) => {
  res.json(getStatus());
});

app.get("/api/chamados", (req, res) => {
  res.json(listChamados());
});

app.post("/api/chamados", (req, res) => {
  const { titulo, descricao, prioridade } = req.body || {};

  if (!titulo || !descricao) {
    return res.status(400).json({
      erro: "Campos obrigatórios: titulo e descricao.",
    });
  }

  const chamado = createChamado({
    titulo,
    descricao,
    prioridade: prioridade || "normal",
  });

  return res.status(201).json(chamado);
});

app.get("/api/reservas", (req, res) => {
  res.json(listReservas());
});

app.post("/api/reservas", (req, res) => {
  const { local, data, horario } = req.body || {};

  if (!local || !data || !horario) {
    return res.status(400).json({
      erro: "Campos obrigatórios: local, data e horario.",
    });
  }

  const reserva = createReserva({ local, data, horario });
  return res.status(201).json(reserva);
});

app.get("/api/refeicoes", (req, res) => {
  res.json(listRefeicoes());
});

app.post("/api/refeicoes", (req, res) => {
  const { refeicao, itens } = req.body || {};

  if (!refeicao || !Array.isArray(itens)) {
    return res.status(400).json({
      erro: "Campos obrigatórios: refeicao e itens (array).",
    });
  }

  const registro = createRefeicao({ refeicao, itens });
  return res.status(201).json(registro);
});

app.use((req, res) => {
  res.status(404).json({ erro: "Rota não encontrada." });
});

module.exports = app;

const express = require("express");
const cors = require("cors");
const path = require("path");

const {
  createChamado,
  createReserva,
  createRefeicao,
  removeChamado,
  removeReserva,
  updateChamado,
  updateReserva,
  listChamados,
  listReservas,
  listRefeicoes,
  clearRefeicoes,
  getStatus,
} = require("./store");

const app = express();

app.use(cors());
app.use(express.json({ limit: "1mb" }));
app.use(express.static(path.join(__dirname, "..")));

// Status
app.get("/api/status", (req, res) => {
  res.json(getStatus());
});

// Chamados
app.get("/api/chamados", (req, res) => {
  res.json(listChamados());
});

app.post("/api/chamados", (req, res) => {
  const { titulo, descricao, prioridade, local } = req.body || {};

  if (!titulo || !descricao) {
    return res.status(400).json({
      erro: "Campos obrigatórios: titulo e descricao.",
    });
  }

  const chamado = createChamado({
    titulo,
    descricao,
    local: local || "Campus",
    prioridade: prioridade || "normal",
  });

  return res.status(201).json(chamado);
});

app.patch("/api/chamados/:id", (req, res) => {
  const { id } = req.params;
  const atualizado = updateChamado(id, req.body);
  if (atualizado) {
    return res.json(atualizado);
  }
  return res.status(404).json({ erro: "Não encontrado." });
});

app.delete("/api/chamados/:id", (req, res) => {
  const { id } = req.params;
  const removido = removeChamado(id);
  if (removido) {
    return res.status(200).json({ mensagem: "Chamado removido." });
  }
  return res.status(404).json({ erro: "Não encontrado." });
});

// Reservas
app.get("/api/reservas", (req, res) => {
  res.json(listReservas());
});

app.post("/api/reservas", (req, res) => {
  const { local, data, horario, obs } = req.body || {};

  if (!local || !data || !horario) {
    return res.status(400).json({
      erro: "Campos obrigatórios: local, data e horario.",
    });
  }

  const reserva = createReserva({ local, data, horario, obs });
  return res.status(201).json(reserva);
});

app.patch("/api/reservas/:id", (req, res) => {
  const { id } = req.params;
  const atualizada = updateReserva(id, req.body);
  if (atualizada) {
    return res.json(atualizada);
  }
  return res.status(404).json({ erro: "Não encontrado." });
});

app.delete("/api/reservas/:id", (req, res) => {
  const { id } = req.params;
  const removido = removeReserva(id);
  if (removido) {
    return res.status(200).json({ mensagem: "Reserva removida." });
  }
  return res.status(404).json({ erro: "Não encontrado." });
});

// Refeições
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

app.delete("/api/refeicoes", (req, res) => {
  clearRefeicoes();
  res.status(200).json({ mensagem: "Registros limpos." });
});

// Fallback
app.use((req, res) => {
  res.status(404).json({ erro: "Rota não encontrada." });
});

module.exports = app;

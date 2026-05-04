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

// Status
// Status (suporta /api/status e /status)
app.get("/status", (req, res) => {
  res.json(getStatus());
});
app.get("/status", (req, res) => {
  res.json(getStatus());
});

// Chamados
// Chamados (suporta /api/chamados e /chamados)
app.get("/chamados", (req, res) => {
  res.json(listChamados());
});
app.get("/chamados", (req, res) => {
  res.json(listChamados());
});

app.post("/chamados", (req, res) => {
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
app.post("/chamados", (req, res) => {
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

app.patch("/chamados/:id", (req, res) => {
  const { id } = req.params;
  const atualizado = updateChamado(id, req.body);
  if (atualizado) {
    return res.json(atualizado);
  }
  return res.status(404).json({ erro: "Não encontrado." });
});
app.patch("/chamados/:id", (req, res) => {
  const { id } = req.params;
  const atualizado = updateChamado(id, req.body);
  if (atualizado) {
    return res.json(atualizado);
  }
  return res.status(404).json({ erro: "Não encontrado." });
});

app.delete("/chamados/:id", (req, res) => {
  const { id } = req.params;
  const removido = removeChamado(id);
  if (removido) {
    return res.status(200).json({ mensagem: "Chamado removido." });
  }
  return res.status(404).json({ erro: "Não encontrado." });
});

// Reservas
// Reservas (suporta /api/reservas e /reservas)
app.get("/reservas", (req, res) => {
  res.json(listReservas());
});
app.get("/reservas", (req, res) => {
  res.json(listReservas());
});

app.post("/reservas", (req, res) => {
  const { local, data, horario, obs } = req.body || {};

  if (!local || !data || !horario) {
    return res.status(400).json({
      erro: "Campos obrigatórios: local, data e horario.",
    });
  }

  const reserva = createReserva({ local, data, horario, obs });
  return res.status(201).json(reserva);
});
app.post("/reservas", (req, res) => {
  const { local, data, horario, obs } = req.body || {};

  if (!local || !data || !horario) {
    return res.status(400).json({
      erro: "Campos obrigatórios: local, data e horario.",
    });
  }

  const reserva = createReserva({ local, data, horario, obs });
  return res.status(201).json(reserva);
});

app.patch("/reservas/:id", (req, res) => {
  const { id } = req.params;
  const atualizada = updateReserva(id, req.body);
  if (atualizada) {
    return res.json(atualizada);
  }
  return res.status(404).json({ erro: "Não encontrado." });
});
app.patch("/reservas/:id", (req, res) => {
  const { id } = req.params;
  const atualizada = updateReserva(id, req.body);
  if (atualizada) {
    return res.json(atualizada);
  }
  return res.status(404).json({ erro: "Não encontrado." });
});

app.delete("/reservas/:id", (req, res) => {
  const { id } = req.params;
  const removido = removeReserva(id);
  if (removido) {
    return res.status(200).json({ mensagem: "Reserva removida." });
  }
  return res.status(404).json({ erro: "Não encontrado." });
});
app.delete("/reservas/:id", (req, res) => {
  const { id } = req.params;
  const removido = removeReserva(id);
  if (removido) {
    return res.status(200).json({ mensagem: "Reserva removida." });
  }
  return res.status(404).json({ erro: "Não encontrado." });
});

// Refeições
// Refeições (suporta /api/refeicoes e /refeicoes)
app.get("/refeicoes", (req, res) => {
  res.json(listRefeicoes());
});
app.get("/refeicoes", (req, res) => {
  res.json(listRefeicoes());
});

app.post("/refeicoes", (req, res) => {
  const { refeicao, itens } = req.body || {};

  if (!refeicao || !Array.isArray(itens)) {
    return res.status(400).json({
      erro: "Campos obrigatórios: refeicao e itens (array).",
    });
  }

  const registro = createRefeicao({ refeicao, itens });
  return res.status(201).json(registro);
});
app.post("/refeicoes", (req, res) => {
  const { refeicao, itens } = req.body || {};

  if (!refeicao || !Array.isArray(itens)) {
    return res.status(400).json({
      erro: "Campos obrigatórios: refeicao e itens (array).",
    });
  }

  const registro = createRefeicao({ refeicao, itens });
  return res.status(201).json(registro);
});

app.delete("/refeicoes", (req, res) => {
  clearRefeicoes();
  res.status(200).json({ mensagem: "Registros limpos." });
});
app.delete("/refeicoes", (req, res) => {
  clearRefeicoes();
  res.status(200).json({ mensagem: "Registros limpos." });
});

// Fallback
app.use((req, res) => {
  res.status(404).json({ erro: "Rota não encontrada." });
});

module.exports = app;

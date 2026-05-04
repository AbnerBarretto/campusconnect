const express = require("express");
const router = express.Router();
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

// Status
router.get("/status", (req, res) => {
  res.json(getStatus());
});

// Chamados
router.get("/chamados", (req, res) => {
  res.json(listChamados());
});

router.post("/chamados", (req, res) => {
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

router.patch("/chamados/:id", (req, res) => {
  const { id } = req.params;
  const atualizado = updateChamado(id, req.body);
  if (atualizado) {
    return res.json(atualizado);
  }
  return res.status(404).json({ erro: "Não encontrado." });
});

router.delete("/chamados/:id", (req, res) => {
  const { id } = req.params;
  const removido = removeChamado(id);
  if (removido) {
    return res.status(200).json({ mensagem: "Chamado removido." });
  }
  return res.status(404).json({ erro: "Não encontrado." });
});

// Reservas
router.get("/reservas", (req, res) => {
  res.json(listReservas());
});

router.post("/reservas", (req, res) => {
  const { local, data, horario, obs } = req.body || {};

  if (!local || !data || !horario) {
    return res.status(400).json({
      erro: "Campos obrigatórios: local, data e horario.",
    });
  }

  const reserva = createReserva({ local, data, horario, obs });
  return res.status(201).json(reserva);
});

router.patch("/reservas/:id", (req, res) => {
  const { id } = req.params;
  const atualizada = updateReserva(id, req.body);
  if (atualizada) {
    return res.json(atualizada);
  }
  return res.status(404).json({ erro: "Não encontrado." });
});

router.delete("/reservas/:id", (req, res) => {
  const { id } = req.params;
  const removido = removeReserva(id);
  if (removido) {
    return res.status(200).json({ mensagem: "Reserva removida." });
  }
  return res.status(404).json({ erro: "Não encontrado." });
});

// Refeições
router.get("/refeicoes", (req, res) => {
  res.json(listRefeicoes());
});

router.post("/refeicoes", (req, res) => {
  const { refeicao, itens } = req.body || {};

  if (!refeicao || !Array.isArray(itens)) {
    return res.status(400).json({
      erro: "Campos obrigatórios: refeicao e itens (array).",
    });
  }

  const registro = createRefeicao({ refeicao, itens });
  return res.status(201).json(registro);
});

router.delete("/refeicoes", (req, res) => {
  clearRefeicoes();
  res.status(200).json({ mensagem: "Registros limpos." });
});

// Fallback para rotas /api não encontradas
router.use((req, res) => {
  res.status(404).json({ erro: "Rota API não encontrada." });
});

module.exports = router;

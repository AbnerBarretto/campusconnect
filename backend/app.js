const express = require("express");
const router = express.Router();
const {
  createChamado,
	  createReserva,
	  createRefeicao,
	  createAviso,
	  removeChamado,
	  removeReserva,
	  removeAviso,
	  updateChamado,
	  updateReserva,
	  updateCardapio,
	  updateAviso,
	  listChamados,
	  listReservas,
	  listRefeicoes,
	  listCardapio,
	  listAvisos,
  clearRefeicoes,
  getStatus,
} = require("./store");

// ---------------------------------------------------------
// REFEICOES (ULTRA-FLEXIBLE)
// ---------------------------------------------------------

router.get("/refeicoes", (req, res) => {
  const { date } = req.query;
  res.json(listRefeicoes(date));
});

router.post("/refeicoes", (req, res) => {
  // Aceita QUALQUER coisa que tenha 'refeicao'
  const { refeicao, aluno, quantidade, itens, data } = req.body || {};

  if (!refeicao) {
    return res.status(400).json({ erro: "O campo 'refeicao' é obrigatório." });
  }

  // Cria o registro no store (o store cuida dos fallbacks)
  const registro = createRefeicao({ refeicao, aluno, quantidade, itens, data });

  console.log(`[API] Sucesso: Registro de fluxo criado para ${refeicao}`);
  return res.status(201).json(registro);
});

router.delete("/refeicoes", (req, res) => {
  const { date } = req.query;
  clearRefeicoes(date);
  res.json({ mensagem: "Registros foram limpos." });
});

// ---------------------------------------------------------
// OUTRAS ROTAS
// ---------------------------------------------------------

router.get("/status", (req, res) => res.json(getStatus()));
router.get("/chamados", (req, res) => res.json(listChamados()));
router.get("/reservas", (req, res) => res.json(listReservas()));
router.get("/cardapio", (req, res) => res.json(listCardapio()));
router.get("/avisos", (req, res) => res.json(listAvisos()));

router.post("/chamados", (req, res) => {
  const { titulo, descricao } = req.body || {};
  if (!titulo || !descricao)
    return res.status(400).json({ erro: "Faltam campos." });
  res.status(201).json(createChamado(req.body));
});

router.post("/reservas", (req, res) => {
  const { local, data, horario } = req.body || {};
  if (!local || !data || !horario)
    return res.status(400).json({ erro: "Faltam campos." });
  res.status(201).json(createReserva(req.body));
});

router.post("/avisos", (req, res) => {
  const { categoria, titulo, descricao } = req.body || {};
  if (!categoria || !titulo || !descricao)
    return res.status(400).json({ erro: "Faltam campos." });
  res.status(201).json(createAviso(req.body));
});

router.patch("/chamados/:id", (req, res) => {
  const item = updateChamado(req.params.id, req.body);
  item ? res.json(item) : res.status(404).json({ erro: "Não encontrado" });
});

router.patch("/reservas/:id", (req, res) => {
  const item = updateReserva(req.params.id, req.body);
  item ? res.json(item) : res.status(404).json({ erro: "Não encontrado" });
});

router.patch("/cardapio/:id", (req, res) => {
  const item = updateCardapio(req.params.id, req.body);
  item ? res.json(item) : res.status(404).json({ erro: "Não encontrado" });
});

router.patch("/avisos/:id", (req, res) => {
  const item = updateAviso(req.params.id, req.body);
  item ? res.json(item) : res.status(404).json({ erro: "Não encontrado" });
});

router.delete("/avisos/:id", (req, res) => {
  const item = removeAviso(req.params.id);
  item ? res.json(item) : res.status(404).json({ erro: "Não encontrado" });
});

module.exports = router;

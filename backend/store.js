const { randomUUID } = require("crypto");

const chamados = [
  {
    id: randomUUID(),
    titulo: "Troca de lâmpadas",
    descricao: "Corredor do bloco A sem iluminação.",
    prioridade: "alta",
    criadoEm: new Date().toISOString(),
  },
];

const reservas = [
  {
    id: randomUUID(),
    local: "Quadra principal",
    data: "2026-05-02",
    horario: "09:00",
    criadoEm: new Date().toISOString(),
  },
];

const refeicoes = [
  {
    id: randomUUID(),
    refeicao: "Almoço",
    itens: ["Arroz", "Feijão", "Frango grelhado"],
    criadoEm: new Date().toISOString(),
  },
];

const listChamados = () => chamados;
const listReservas = () => reservas;
const listRefeicoes = () => refeicoes;

const createChamado = (dados) => {
  const chamado = {
    id: randomUUID(),
    criadoEm: new Date().toISOString(),
    ...dados,
  };
  chamados.push(chamado);
  return chamado;
};

const createReserva = (dados) => {
  const reserva = {
    id: randomUUID(),
    criadoEm: new Date().toISOString(),
    ...dados,
  };
  reservas.push(reserva);
  return reserva;
};

const createRefeicao = (dados) => {
  const refeicao = {
    id: randomUUID(),
    criadoEm: new Date().toISOString(),
    ...dados,
  };
  refeicoes.push(refeicao);
  return refeicao;
};

const getStatus = () => ({
  versao: "0.1.0",
  status: "ok",
  recursos: {
    chamados: chamados.length,
    reservas: reservas.length,
    refeicoes: refeicoes.length,
  },
});

module.exports = {
  createChamado,
  createReserva,
  createRefeicao,
  listChamados,
  listReservas,
  listRefeicoes,
  getStatus,
};

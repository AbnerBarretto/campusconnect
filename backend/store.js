const { randomUUID } = require("crypto");

// Mock Data for a professional system
const chamados = [
  {
    id: randomUUID(),
    titulo: "Vazamento no banheiro",
    descricao: "Vazamento constante na descarga do 2º andar.",
    local: "Bloco A - Sala 204",
    prioridade: "Alta",
    status: "Aberto",
    responsavel: null,
    criadoEm: new Date(Date.now() - 1000 * 60 * 120).toISOString(), // 2h ago
    sla_limite: new Date(Date.now() + 1000 * 60 * 60 * 2).toISOString(),
  },
  {
    id: randomUUID(),
    titulo: "Ar condicionado desligado",
    descricao: "Unidade não liga após queda de energia.",
    local: "Auditório Central",
    prioridade: "Média",
    status: "Em progresso",
    responsavel: "Carlos Silva",
    criadoEm: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5h ago
    sla_limite: new Date(Date.now() - 1000 * 60 * 60 * 1).toISOString(), // Delayed
  },
  {
    id: randomUUID(),
    titulo: "Troca de lâmpada",
    descricao: "Lâmpada piscando no corredor.",
    local: "Bloco B - Corredor 1",
    prioridade: "Baixa",
    status: "Aguardando",
    responsavel: "Ana Souza",
    criadoEm: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
    sla_limite: new Date(Date.now() + 1000 * 60 * 60 * 48).toISOString(),
  },
];

const reservas = [
  {
    id: randomUUID(),
    local: "Quadra Poliesportiva",
    data: "2026-05-02",
    horario: "09:00 - 10:00",
    obs: "Treino de Basquete",
    status: "Confirmada",
    criadoEm: new Date().toISOString(),
  },
  {
    id: randomUUID(),
    local: "Sala de Estudo A",
    data: "2026-05-03",
    horario: "14:00 - 16:00",
    obs: "Grupo de Cálculo",
    status: "Pendente",
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

const removeChamado = (id) => {
  const index = chamados.findIndex((c) => c.id === id);
  if (index !== -1) return chamados.splice(index, 1)[0];
  return null;
};

const removeReserva = (id) => {
  const index = reservas.findIndex((r) => r.id === id);
  if (index !== -1) return reservas.splice(index, 1)[0];
  return null;
};

const updateChamado = (id, dados) => {
  const chamado = chamados.find((c) => c.id === id);
  if (chamado) {
    Object.assign(chamado, dados);
    return chamado;
  }
  return null;
};

const updateReserva = (id, dados) => {
  const reserva = reservas.find((r) => r.id === id);
  if (reserva) {
    Object.assign(reserva, dados);
    return reserva;
  }
  return null;
};

const createChamado = (dados) => {
  const chamado = {
    id: randomUUID(),
    criadoEm: new Date().toISOString(),
    status: "Aberto",
    responsavel: null,
    sla_limite: new Date(Date.now() + 1000 * 60 * 60 * 4).toISOString(), // 4h SLA by default
    ...dados,
  };
  chamados.push(chamado);
  return chamado;
};

const createReserva = (dados) => {
  const reserva = {
    id: randomUUID(),
    criadoEm: new Date().toISOString(),
    status: "Pendente",
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
  versao: "1.0.0",
  status: "active",
  metrics: {
    open_tickets: chamados.filter((c) => c.status !== "Concluído").length,
    critical_tickets: chamados.filter(
      (c) => c.prioridade === "Alta" && c.status !== "Concluído",
    ).length,
    delayed_tickets: chamados.filter(
      (c) => new Date(c.sla_limite) < new Date() && c.status !== "Concluído",
    ).length,
  },
});

const clearRefeicoes = () => {
  refeicoes.length = 0;
};

module.exports = {
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
};

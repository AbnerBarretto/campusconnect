const { randomUUID } = require("crypto");

// ---------------------------------------------------------
// DATABASE (MOCK)
// ---------------------------------------------------------

const chamados = [
  {
    id: randomUUID(),
    titulo: "Vazamento no banheiro",
    descricao: "Vazamento constante na descarga do 2º andar.",
    local: "Bloco A - Sala 204",
    prioridade: "Alta",
    status: "Aberto",
    responsavel: null,
    aluno: "Abner Silva",
    criadoEm: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
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
    aluno: "Mariana Costa",
    criadoEm: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
    sla_limite: new Date(Date.now() - 1000 * 60 * 60 * 1).toISOString(),
  },
];

const reservas = [
  {
    id: randomUUID(),
    local: "Quadra Poliesportiva",
    data: "2026-05-11",
    horario: "09:00 - 10:00",
    obs: "Treino de Basquete",
    status: "Confirmada",
    criadoEm: new Date().toISOString(),
  },
];

const refeicoes = []; // Log de acessos detalhados

const avisos = [
  {
    id: randomUUID(),
    tipo: "warning",
    categoria: "Manutenção",
    titulo: "Bloco B: energia em manutenção",
    descricao: "Evite os corredores próximos aos laboratórios até 15h.",
    link: "",
    linkLabel: "",
    ativo: true,
    criadoEm: new Date().toISOString(),
  },
  {
    id: randomUUID(),
    tipo: "danger",
    categoria: "Acesso fechado",
    titulo: "Quadra Poliesportiva: fechada para evento",
    descricao: "Atividades esportivas suspensas no período da tarde.",
    link: "",
    linkLabel: "",
    ativo: true,
    criadoEm: new Date().toISOString(),
  },
  {
    id: randomUUID(),
    tipo: "info",
    categoria: "Rota alternativa",
    titulo: "Refeitório: acesso lateral recomendado",
    descricao: "Use a passagem pela biblioteca durante a obra no pátio.",
    link: "pages/mapa-campus.html",
    linkLabel: "Ver no Mapa",
    ativo: true,
    criadoEm: new Date().toISOString(),
  },
];

const cardapio = [
  {
    id: "m1",
    dia: "Segunda-Feira",
    refeicao: "Café da Manhã",
    itens: ["Pão na chapa", "Café"],
    dieta: "Geral",
  },
  {
    id: "m2",
    dia: "Segunda-Feira",
    refeicao: "Almoço",
    itens: ["Frango Grelhado", "Arroz", "Feijão"],
    dieta: "Saudável",
  },
  {
    id: "m3",
    dia: "Segunda-Feira",
    refeicao: "Jantar",
    itens: ["Sopa de Legumes"],
    dieta: "Leve",
  },
  {
    id: "m4",
    dia: "Terça-Feira",
    refeicao: "Café da Manhã",
    itens: ["Cuscuz", "Ovos"],
    dieta: "Geral",
  },
  {
    id: "m5",
    dia: "Terça-Feira",
    refeicao: "Almoço",
    itens: ["Carne de Panela", "Farofa"],
    dieta: "Geral",
  },
  {
    id: "m6",
    dia: "Terça-Feira",
    refeicao: "Jantar",
    itens: ["Macarrão ao Sugo"],
    dieta: "Vegetariana",
  },
  {
    id: "m7",
    dia: "Quarta-Feira",
    refeicao: "Café da Manhã",
    itens: ["Bolo de milho", "Iogurte"],
    dieta: "Energética",
  },
  {
    id: "m8",
    dia: "Quarta-Feira",
    refeicao: "Almoço",
    itens: ["Feijoada", "Couve"],
    dieta: "Geral",
  },
  {
    id: "m9",
    dia: "Quarta-Feira",
    refeicao: "Jantar",
    itens: ["Caldo Verde"],
    dieta: "Leve",
  },
  {
    id: "m10",
    dia: "Quinta-Feira",
    refeicao: "Café da Manhã",
    itens: ["Tapioca", "Frutas"],
    dieta: "Sem Glúten",
  },
  {
    id: "m11",
    dia: "Quinta-Feira",
    refeicao: "Almoço",
    itens: ["Peixe Assado", "Pirão"],
    dieta: "Saudável",
  },
  {
    id: "m12",
    dia: "Quinta-Feira",
    refeicao: "Jantar",
    itens: ["Sanduíche Natural"],
    dieta: "Proteica",
  },
  {
    id: "m13",
    dia: "Sexta-Feira",
    refeicao: "Café da Manhã",
    itens: ["Ovos Mexidos", "Torrada"],
    dieta: "Fitness",
  },
  {
    id: "m14",
    dia: "Sexta-Feira",
    refeicao: "Almoço",
    itens: ["Estrogonofe", "Batata Palha"],
    dieta: "Geral",
  },
  {
    id: "m15",
    dia: "Sexta-Feira",
    refeicao: "Jantar",
    itens: ["Pizza artesanal"],
    dieta: "Geral",
  },
];

// ---------------------------------------------------------
// REFEITORIO LOGIC (VOLUME)
// ---------------------------------------------------------

const createRefeicao = (dados) => {
  const registro = {
    id: randomUUID(),
    criadoEm: new Date().toISOString(),
    data: dados.data || new Date().toISOString().slice(0, 10),
    refeicao: dados.refeicao || "Desconhecido",
    aluno: dados.aluno || "Anônimo",
    quantidade: Number(dados.quantidade) || 1,
    itens: dados.itens || [],
  };
  refeicoes.push(registro);
  return registro;
};

// ---------------------------------------------------------
// EXPORTS
// ---------------------------------------------------------

module.exports = {
  // Lists
  listChamados: () => chamados,
  listReservas: () => reservas,
	  listRefeicoes: (data) =>
	    data ? refeicoes.filter((r) => r.data === data) : refeicoes,
	  listCardapio: () => cardapio,
	  listAvisos: () => avisos,

  // Create
  createChamado: (d) => {
    const c = {
      id: randomUUID(),
      criadoEm: new Date().toISOString(),
      status: "Aberto",
      ...d,
    };
    chamados.push(c);
    return c;
  },
  createReserva: (d) => {
    const r = {
      id: randomUUID(),
      criadoEm: new Date().toISOString(),
      status: "Aberto",
      ...d,
    };
    reservas.push(r);
    return r;
  },
	  createRefeicao,
	  createAviso: (d) => {
	    const aviso = {
	      id: randomUUID(),
	      criadoEm: new Date().toISOString(),
	      ativo: true,
	      tipo: "warning",
	      link: "",
	      linkLabel: "",
	      ...d,
	    };
	    avisos.push(aviso);
	    return aviso;
	  },

  // Delete
  removeChamado: (id) => {
    const i = chamados.findIndex((c) => c.id === id);
    return i !== -1 ? chamados.splice(i, 1)[0] : null;
  },
	  removeReserva: (id) => {
	    const i = reservas.findIndex((r) => r.id === id);
	    return i !== -1 ? reservas.splice(i, 1)[0] : null;
	  },
	  removeAviso: (id) => {
	    const i = avisos.findIndex((a) => a.id === id);
	    return i !== -1 ? avisos.splice(i, 1)[0] : null;
	  },
  clearRefeicoes: (data) => {
    if (!data) {
      refeicoes.length = 0;
      return;
    }
    for (let i = refeicoes.length - 1; i >= 0; i -= 1) {
      if (refeicoes[i].data === data) refeicoes.splice(i, 1);
    }
  },

  // Update
  updateChamado: (id, d) => {
    const c = chamados.find((x) => x.id === id);
    if (c) Object.assign(c, d);
    return c;
  },
  updateReserva: (id, d) => {
    const r = reservas.find((x) => x.id === id);
    if (r) Object.assign(r, d);
    return r;
  },
	  updateCardapio: (id, d) => {
	    const x = cardapio.find((i) => i.id === id);
	    if (x) Object.assign(x, d);
	    return x;
	  },
	  updateAviso: (id, d) => {
	    const aviso = avisos.find((x) => x.id === id);
	    if (aviso) Object.assign(aviso, d);
	    return aviso;
	  },

  // System
  getStatus: () => ({
    status: "active",
    metrics: { open_tickets: chamados.length },
  }),
};

# 🎓 CampusConnect

**CampusConnect** é uma plataforma integrada de gestão acadêmica que conecta alunos, administradores e a comunidade universitária. Oferece funcionalidades para consulta de calendário acadêmico, cardápio do refeitório, mapa do campus, histórico acadêmico, sistema de chamados e reserva de espaços.

---

## Funcionalidades

### Para Alunos
- 📅 **Calendário Acadêmico** - Visualize datas importantes e eventos
- 🍽️ **Cardápio** - Consulte o menu do refeitório da semana
- 🗺️ **Mapa do Campus** - Navegação interativa pelos espaços
- 📊 **Histórico Acadêmico** - Consulte suas notas e disciplinas
- 🎟️ **Sistema de Chamados** - Abra solicitações de suporte
- 📦 **Reservas** - Reserve espaços e recursos disponíveis

### Para Administradores
- 🛠️ **Painel Administrativo** - Gerenciamento centralizado
- 👥 **Gestão de Chamados** - Atende e acompanha solicitações
- 📦 **Gestão de Reservas** - Aprova e gerencia reservas
- 🍽️ **Gestão de Cardápio** - Atualiza menu do refeitório
- 📅 **Gestão de Calendário** - Administra eventos e datas

---

## 🛠️ Stack Tecnológico

### Frontend
- **HTML5** - Estrutura semântica
- **CSS3 + Tailwind CSS** - Estilização responsiva
- **JavaScript (ES6+)** - Interatividade e lógica
- **Figma Design** - Design system profissional

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **CORS** - Compartilhamento de recursos entre origens
- **Mock Data** - Dados simulados para testes

---

## 🚀 Como Começar

### Pré-requisitos
- Node.js (v18+)
- npm ou yarn

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/mouratech/campusconnect.git
cd campusconnect
```

2. **Instale as dependências do backend**
```bash
cd backend
npm install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

O servidor estará disponível em: `http://localhost:3333`

4. **Acesse a aplicação**
Abra o arquivo `index.html` ou `login.html` no navegador.

---

## 👤 Usuários de Teste (Mock)

A autenticação é mockada e redireciona baseado no email:

| Email | Senha | Tipo | Acesso |
|-------|-------|------|--------|
| `aluno@campus.com` | qualquer | Aluno | Dashboard Aluno / `index.html` |
| `admin@campus.com` | qualquer | Admin | Painel Admin / `admin/geral.html` |
| `suporte@campus.com` | qualquer | Aluno | Dashboard Aluno |

**Nota:** Qualquer senha funciona para fins de demonstração. A senha mínima é 3 caracteres.

---

## 📁 Estrutura do Projeto

```
campusconnect/
├── index.html                 # Dashboard aluno (página raiz)
├── login.html                 # Página de autenticação
├── pages/                     # 📄 Funcionalidades para alunos
│   ├── calendario.html        # Calendário acadêmico
│   ├── cardapio.html          # Menu do refeitório
│   ├── mapa-campus.html       # Mapa interativo do campus
│   ├── historico.html         # Histórico acadêmico
│   ├── chamados.html          # Sistema de chamados
│   ├── reservas.html          # Sistema de reservas
│   └── campus.html            # Informações do campus
├── admin/                     # 🛠️ Páginas administrativas
│   ├── geral.html             # Dashboard principal do admin
│   ├── calendario.html        # Gestão de calendário
│   ├── chamados.html          # Gestão de chamados
│   ├── refeitorio.html        # Gestão de cardápio
│   └── reservas.html          # Gestão de reservas
├── backend/                   # 🔧 Backend Node.js
│   ├── app.js                 # Configuração Express
│   ├── server.js              # Inicialização do servidor
│   ├── store.js               # Simulação de banco de dados
│   ├── package.json           # Dependências
│   ├── package-lock.json
│   └── README.md
├── DESIGN.md                  # Documentação de design
├── README.md                  # Este arquivo
└── .gitignore

---

## 🔌 API Endpoints

### Status
- `GET /api/status` - Status geral da API

### Chamados
- `GET /api/chamados` - Lista todos os chamados
- `POST /api/chamados` - Cria novo chamado
- `PATCH /api/chamados/:id` - Atualiza chamado
- `DELETE /api/chamados/:id` - Remove chamado

### Reservas
- `GET /api/reservas` - Lista reservas
- `POST /api/reservas` - Cria nova reserva
- `PATCH /api/reservas/:id` - Atualiza reserva
- `DELETE /api/reservas/:id` - Remove reserva

### Refeições
- `GET /api/refeicoes` - Lista refeições/cardápio
- `POST /api/refeicoes` - Adiciona refeição
- `DELETE /api/refeicoes` - Limpa refeições

---

## 🎨 Recursos de Design

### Logo com Animação
- Efeito de escala ao hover (1.15x)
- Mudança de cor (azul corporativo)
- Transição suave de 0.3s

### Responsividade
- Desktop-first design
- Breakpoint mobile: 768px
- Interface adaptativa

### Paleta de Cores
- **Primária:** #1a73e8 (Azul)
- **Background:** Gradiente azul claro
- **Text:** #0f172a (Azul escuro)
- **Secondary:** #f3f4f6 (Cinza claro)

---

## 🔐 Autenticação

A autenticação é **mockada** para fins de demonstração:

- Emails contendo `admin` → Painel Administrativo
- Outros emails → Dashboard Aluno
- Dados armazenados em `localStorage`

**Nota:** Em produção, implementar autenticação segura com JWT/OAuth2.

---

## 📝 Scripts Disponíveis

```bash
# Backend
cd backend

# Iniciar em modo desenvolvimento
npm run dev

# Iniciar servidor de produção
npm start

# Executar testes (smoke test)
npm run smoke-test
```

---

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Add MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

## 👥 Autores

- **MouraTech** - Desenvolvimento e design
- **Comunidade Campus** - Feedback e testes

---

## 📧 Contato

Para dúvidas ou sugestões:
- Email: suporte@campusconnect.edu
- GitHub Issues: [Abra uma issue](https://github.com/mouratech/campusconnect/issues)

---

## 🎯 Roadmap

- [ ] Integração com LDAP/Active Directory
- [ ] Sistema de notificações push
- [ ] App mobile nativa (React Native)
- [ ] Dashboard com gráficos e analytics
- [ ] Integração com Google Calendar
- [ ] Sistema de chat para suporte
- [ ] Exportação de relatórios (PDF/Excel)
- [ ] Modo escuro

---

**Versão:** 0.1.0
**Última atualização:** 3 de maio de 2026

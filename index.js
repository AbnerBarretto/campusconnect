require('dotenv').config({ path: './.env.local' });

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ limit: '1mb', extended: true }));

// Servir arquivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Importar rotas do backend
const backendApp = require('./backend/app');

// Usar rotas do backend
app.use('/', backendApp);

// Fallback para HTML (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar servidor apenas se não estiver em produção (Vercel)
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3333;
  app.listen(PORT, () => {
    console.log(`✅ CampusConnect API rodando em http://localhost:${PORT}`);
  });
}

module.exports = app;

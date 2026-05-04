require("dotenv").config({ path: "./.env.local" });

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ limit: "1mb", extended: true }));

// Importar backend sempre, porque este app serve frontend e API juntos
const backendApp = require("./backend/app");
app.use("/api", backendApp); // Sem prefixo, o backend trata /api/* e falhas de rota

// Servir arquivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// SPA Fallback - APENAS para rotas SPA (sem extensão de arquivo)
// Isso só é atingido se nenhum arquivo foi encontrado
app.use((req, res, next) => {
  // Se a URL tem uma extensão de arquivo (.html, .css, .js, etc.), é 404
  const hasFileExtension = /\.\w+$/.test(req.path);
  if (hasFileExtension) {
    res.status(404).send("Arquivo não encontrado");
    return;
  }

  // Se chegou aqui, é uma rota SPA (sem extensão) - servir index.html
  res.sendFile(path.join(__dirname, "index.html"));
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ CampusConnect rodando na porta ${PORT}`);
});

module.exports = app;

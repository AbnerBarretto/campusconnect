require("dotenv").config({ path: "./.env.local" });

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ limit: "1mb", extended: true }));

// Em desenvolvimento local, importar backend
// Em produção (Vercel), o backend roda como serviço separado
if (process.env.NODE_ENV !== "production") {
  const backendApp = require("./backend/app");
  app.use("/", backendApp);
}

// Servir arquivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// SPA Fallback - APENAS para rotas SPA (sem extensão de arquivo)
app.use((req, res, next) => {
  // Se for /api/*, deixar passar (backend vai tratar)
  if (req.path.startsWith("/api/")) {
    return next();
  }
  
  // Se a URL tem uma extensão de arquivo (.html, .css, .js, etc.), NÃO fazer fallback
  // O express.static já tentou servir e não achou, então não existe
  const hasFileExtension = /\.\w+$/.test(req.path);
  if (hasFileExtension) {
    res.status(404).send("Arquivo não encontrado");
    return;
  }
  
  // Se chegou aqui, é uma rota SPA (sem extensão) - servir index.html
  res.sendFile(path.join(__dirname, "index.html"));
});

// Apenas listen em desenvolvimento local
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`✅ CampusConnect rodando em http://localhost:${PORT}`);
  });
}

module.exports = app;

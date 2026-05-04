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

// SPA Fallback - APENAS para rotas que não existem como arquivos
// Não fazer fallback para requisições de /api/* ou arquivos estáticos
app.use((req, res, next) => {
  // Se for /api/*, deixar passar (backend vai tratar)
  if (req.path.startsWith("/api/")) {
    return next();
  }
  
  // Se for uma rota HTML válida no pages/ ou admin/, deixar passar
  const fs = require("fs");
  const filePath = path.join(__dirname, req.path);
  if (fs.existsSync(filePath) && !fs.statSync(filePath).isDirectory()) {
    return next();
  }
  
  // Se chegou aqui, é uma rota SPA - redirecionar para index.html
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

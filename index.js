require("dotenv").config({ path: "./.env.local" });

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ limit: "1mb", extended: true }));

// Importar e usar rotas do backend
const backendApp = require('./backend/app');
app.use('/', backendApp);

// Servir arquivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Fallback para HTML (SPA)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Apenas listen em desenvolvimento local
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(
      `✅ CampusConnect Frontend rodando em http://localhost:${PORT}`,
    );
  });
}

module.exports = app;

const app = require("./app");

const PORT = process.env.PORT || 3333;

// Apenas listen em desenvolvimento local
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`API Campus Connect pronta em http://localhost:${PORT}`);
  });
}

module.exports = app;

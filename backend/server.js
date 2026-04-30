const app = require("./app");

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`API Campus Connect pronta em http://localhost:${PORT}`);
});

const http = require("http");
const app = require("./app");

const server = app.listen(0, () => {
  const { port } = server.address();

  http
    .get(`http://127.0.0.1:${port}/api/status`, (res) => {
      let body = "";
      res.on("data", (chunk) => {
        body += chunk;
      });
      res.on("end", () => {
        console.log(body);
        server.close();
      });
    })
    .on("error", (err) => {
      console.error(err);
      server.close();
      process.exit(1);
    });
});

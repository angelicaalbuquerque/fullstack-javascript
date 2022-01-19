//lib responsável por gerar o servidor
const http = require("http");

//criação do servidor para acessar as respostas pela web
const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);
  res.statusCode = 200;
  res.end("<h1>Hello, World!</h1>");
});

server.listen(3000, () => {
  console.log("Servidor ativo! 🚀");
});

const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  fs.createReadStream(__dirname + "/index.html").pipe(response);
});

server.listen(5000, () => {
  console.log("Sunucu 5000 portu üzerinde çalışıyor.");
});

const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((request, response) => {
  const html = fs.readFileSync("./index.html", "utf-8");
  response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  response.end(html);
});

server.listen(5000, () => {
  console.log("Sunucu 5000 portu üzerinde çalışıyor.");
});

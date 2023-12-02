const http = require("node:http");

const server = http.createServer((request, response) => {
  const customer = {
    firstName: "Emin",
    lastName: "Başbayan"
  }

  response.writeHead(300, { "Content-Type": "application/json" });
  response.end(JSON.stringify(customer));
});

server.listen(5000, () => {
  console.log("Sunucu 5000 portu üzerinde çalışıyor.");
});

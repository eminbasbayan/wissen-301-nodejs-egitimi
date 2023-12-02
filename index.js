const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Home Page");
  } else if (request.url === "/products") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Products Page");
  } else if (request.url === "/api") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(
      JSON.stringify([
        {
          id: 1,
          firstName: "Emin",
          lastName: "Başbayan",
        },
      ])
    );
  } else{
    response.writeHead(404)
    response.end("Page not found!")
  }
});

server.listen(5000, () => {
  console.log("Sunucu 5000 portu üzerinde çalışıyor.");
});

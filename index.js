const http = require("node:http");

const server = http.createServer((request, response)=>{
    response.writeHead(300, {"Content-Type": "text/plain"})
    response.end("Hello World!")
}) 


server.listen(5000, ()=>{
  console.log("Sunucu 5000 portu üzerinde çalışıyor.");
})



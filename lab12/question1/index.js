const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer();

const image = path.join(__dirname, "public", "happy.jpeg");

server.on("request", (req, res) => {
  let reader = fs.createReadStream(image);
  reader.on("open", () => {
    res.writeHead(200, { "Content-Type": "image/jpeg" });
    reader.pipe(res);
  });

  reader.on("error", () => {
    res.setHeader("Content-Type", "text/plain");
    res.statusCode = 401;
    res.end("Image no found!");
  });
});

server.listen(3000, () => {
  console.log("Server started on port 3000");
});

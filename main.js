"use-strict";
const http = require("http");

const user = [
  {
    name: "Asadbek",
    surname: "Absuvoitov",
    id: 1,
  },
];

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/" && method === "GET") {
    res.writeHead(200);
    return res.end("Welcome to the first server created with nodejs");
  } else if (url === "/user" && method === "GET") {
    res.writeHead(200, {
      "content-type": "application/json",
    });
    return res.end(JSON.stringify(user));
  }
});

server.listen(3000, () => {
  console.log(`Your server is running on: http://localhost:3000`);
});

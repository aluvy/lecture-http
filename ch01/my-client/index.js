const http = require("http");

const options = new URL("http://localhost:3000/");

const handler = (res) => {
  const data = [];

  res.on("data", chunk => {
    data.push(chunk.toString())
  })

  res.on("end", () => {
    console.log(data.join(""))
  })
}

const req = http.request(options, handler);

req.end();
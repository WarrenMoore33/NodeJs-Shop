const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>This the homepage</title></head>");
    res.write("<body>");
    res.write(
      `<h1>Not your run of the mill greeting</h1><p>Greet me when you see me shawty you'onknow-me</p>`,
    );
    res.write(
      "<form action='/create-user' method='POST'><input type='text' name='username'/><button type='submit'>Set Username</button></form>",
    );
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/user") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>This the user page</title></head>");
    res.write("<body>");
    res.write(
      `<ul><li>User 1</li><li>User 2</li><li>User 3</li><li>User 4</li></ul>`,
    );
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    res.setHeader("Content-Type", "text/html");
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      console.log(message);
    });
    res.statusCode(302);
    res.setHeader("Location", "/user");
    return res.end();
  }
});

server.listen(3000);

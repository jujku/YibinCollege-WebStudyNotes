const http = require("http");
const mysql = require("mysql");

const hostname = "127.0.0.1";

const con = mysql.createConnection({
  user: "jujku",
  password: "529628MCjujku",
  host: "bj-cynosdbmysql-grp-kva1cvqo.sql.tencentcdb.com",
  database: "app",
  port: 21908,
});

con.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(con.threadId);
});

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello world\n");
});

server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}`);
});

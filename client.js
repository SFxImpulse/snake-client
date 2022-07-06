const net = require("net");

const connect = () => {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Connection established, enjoy your game!");
  });

  conn.on("connect", () => {
    conn.write("Name: DB");
  });

  // conn.on("connect", () => {
  //   setInterval(() => {
  //     conn.write("Move: down");
  //   }, 50);
  // });

  return conn;
};

module.exports = { connect }
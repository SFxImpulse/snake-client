const net = require("net");
const { IP, PORT } = require("./constants");

const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Connection established, enjoy your game!");
  });

  conn.on("connect", () => {
    conn.write("Name: DvB");
  });

  // conn.on("connect", () => {
  //   setInterval(() => {
  //     conn.write("Move: down");
  //   }, 50);
  // });

  return conn;
};

module.exports = { connect };
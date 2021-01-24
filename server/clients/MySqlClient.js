// import moment from 'moment'
// var moment = require('moment');
var mysql = require('mysql');

// //can be pre-loaded
// require('dotenv').config()

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database:'bbl',
  port:3306
});

// var con = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PW,
//   database: process.env.DB,
//   port: process.env.DB_PORT
// });

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

exports.getConnection = function getConnection() {
  return connection;
};

// export function getTimestamp() {
//   return moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
// }

// export function getExpiration() {
//   return moment(Date.now()).add('days', 5).format('YYYY-MM-DD HH:mm:ss');
// }
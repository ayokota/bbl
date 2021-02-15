// import * as mysqlTemplate from "../clients/MySqlClient.js";
const mysqlTemplate = require("../clients/MySqlClient.js")

/***
 * @param username 
 * @param password 
 * @return 
 */
// export function createBaseAccount({username, password}, callback) {
//     var sql="call authenticate(?, ?);"
//     mysqlTemplate.getConnection().query(sql, [username, password],(err, result) => {
//       if (err) return callback(err);
//       callback(null, result);
//     });
// }
exports.authenticate = function authenticate({username, password}, callback) {
        var sql="call authenticate(?, ?);"
        mysqlTemplate.getConnection().query(sql, [username, password],(err, result) => {
          if (err) return callback(err);
          callback(null, result);
        });
}

exports.signup = function signup({username, password, firstname, lastname, verification}, callback) {
      var sql="call user_signup(?, ?, ?, ?, ?);"
      mysqlTemplate.getConnection().query(sql, [username, password, firstname, lastname, verification],(err, result) => {
        if (err) return callback(err);
        callback(null, result);
      });
}

exports.verifyEmail = function verifyEmail({username, verificationCode}, callback) {
     var sql="call email_verification(?, ?);"
     mysqlTemplate.getConnection().query(sql, [username, verificationCode],(err, result) => {
       if (err) return callback(err);
       callback(null, result);
     });
}

exports.query = function query(query, callback) {
  mysqlTemplate.getConnection().query(query,(err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
}

exports.updatePassword = function updatePassword({uuid, password}, callback) {
  var sql="call update_password(?, ?);"
  mysqlTemplate.getConnection().query(sql, [uuid, password],(err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
}
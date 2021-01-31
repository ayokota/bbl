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

exports.signup = function signup({username, password, firstname, lastname}, callback) {
      var sql="call user_signup(?, ?, ?, ?);"
      mysqlTemplate.getConnection().query(sql, [username, password, firstname, lastname],(err, result) => {
        if (err) return callback(err);
        callback(null, result);
      });
  }
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
exports.createBaseAccount = function createBaseAccount({username, password}, callback) {
        var sql="call authenticate(?, ?);"
        mysqlTemplate.getConnection().query(sql, [username, password],(err, result) => {
          if (err) return callback(err);
          callback(null, result);
        });
    }
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/db.sqlite');

const dbWrapper = {};
module.exports = dbWrapper;

dbWrapper.init = () => {
  db.serialize(function() {
    db.run("CREATE TABLE lorem (info TEXT)");
  });
}

dbWrapper.insert = (table, value, callback) => {
  // do insert
}

dbWrapper.query = (query, callback) => {

}







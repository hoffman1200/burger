var connection = require("./connection");

var orm = {
    selectAll: (tableInput, cb) => {
        console.log(tableInput);
        var queryString = "SELECT id, burger_name FROM " + tableInput + ";";
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
        
    }

}
// Create this methods:
// selectAll()
// insertOne()
// updateOne()

module.exports = orm;

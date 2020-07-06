var express = require("express");
var router = express.Router();

var burger = require("../models/burger");

router.get("/", function(req, res){
    // console.log(req);
    burger.selectAll(data => {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    })
})
// Export routes for server.js to use.
module.exports = router;

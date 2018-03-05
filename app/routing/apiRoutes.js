//getting my friends data
var friends = require("../data/friends.js");

module.exports = function(app){

app.get("/api/friends", function(req, res){
    //display JSON
    res.json(friends);
});



app.post("/api/friends", function(req, res){
    //post survey results
    friends.push(req.body);

    var allScores = [];

    for(i=0; i < friends.length - 1; i++){
        var sum = 0;
        for(j=0; j < friends[i].scores.length; j++){
          var diff = Math.abs(req.body.scores[j] - friends[i].scores[j]);
          sum += diff;
        }
        allScores.push(sum);
    };

    var matchPosition = allScores.indexOf(Math.min(...allScores));

    var name = {
        name: friends[matchPosition].name
    };
    res.json(name);

});

};
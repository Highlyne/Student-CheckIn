module.exports = function(app) {

    app.get('/', function(req, res) {
    db.student.findall({}).then(function(dbStudent){
        res.json(dbStudent);
      console.log(dbStudent);
      res.render("index", dbStudent);
    });
  });
}

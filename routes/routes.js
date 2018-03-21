db = require('../database/database2');
db.init();

// routes.js
module.exports = function(app,passport) {
  app.get("/web/login", function(req, res) {
    console.log(req.headers);
    res.render("login.ejs", 
    { message: req.flash("loginMessage") });
  });

  app.get("/web/account", function(req, res) {
    res.render("account.ejs", {
      user: req.user 
    });
  });

  app.get("/web/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });


  app.post('/api/login', function (req, res) {
    console.log(req.body);

    db.query('SELECT ...', (err, cursor) => {
      if (err) {
        // manage error

      }

      if ((cursore.next() === null) || (req.body.password === cursor.next())) {
     // send error
    }

      if (req.body.password === cursor.next()) {

    }
    })

    res.send("ok");
  })
};

/*// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/");
}*/

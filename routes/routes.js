// routes.js
module.exports = function(app,passport) {
  app.get("/login", function(req, res) {
    res.render("login.ejs", 
    { message: req.flash("loginMessage") });
  });

  app.get("/account", function(req, res) {
    res.render("account.ejs", {
      user: req.user 
    });
  });

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });
};

/*// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/");
}*/

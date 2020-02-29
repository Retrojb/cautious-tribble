const passport = require('passport');

module.exports = (app) => {
    app.get("/auth/google", passport.authenticate("google", {
        scope: ["profile", "email"]
        })
    );

    //send the code id and turns it to the actual user profile
    app.get("/auth/google/callback", 
        passport.authenticate("google"),
        (req, res) => {
            res.redirect("/api/dashboard");
        }
    );

    app.get("/api/logout", (req, res) => {
        req.logout();
        res.redirect("/");
    });

    app.get("/api/current_user", (req, res) => {
        res.send(req.user);
    });


}
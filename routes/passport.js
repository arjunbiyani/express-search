module.exports = function(app, passport) {

    app.get('/', function(req, res, next) {
        res.render('index', { title: 'Home'});
    });

    app.get('/login', function(req, res) {
        res.render('login', { title:'LoginPage',name:'LoginPage'});
    });

    app.get('/signup', function(req, res) {
        res.render('signup', { title:'Register',name:'Registration'});
    });


    // PROFILE SECTION =====================

    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile', {
            user : req.user // get the user out of session and pass to template
        });
    });

    // LOGOUT ==============================

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

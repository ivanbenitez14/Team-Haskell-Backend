const GitHubStrategy = require('passport-github2').Strategy;
const passport = require('passport');



passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "https://teamhaskell.herokuapp.com/api/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // Usuario.findOrCreate({ githubId: profile.id }, function (err, user) {
    //   console.log(user);
    //   return done(err, user);
    // });
    console.log(profile);
    done(null, profile);
  }
));


// Github login
passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });
  
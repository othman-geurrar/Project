require("dotenv").config();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const Users = require("../Models/user");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "https://localhost:3000/google/callback",
      passReqToCallback: true,
      scope: ["email", "profile"],
    },
    async (req, accessToken, refreshToken, profile, done) => {
      if (profile) {
        try {
          // Find user by ID in the database
          let user = await Users.findOne({ id: profile.id });
          console.log(user);
          // If user does not exist, create a new one
          if (!user) {
            user = await Users.create({
              id: profile.id, // Assuming ID from Google will be used as user's ID
              // You can include other user information here as needed
              // For example, email and display name
              email: profile.email,
              UserName: profile.displayName,
            });
            console.log(user);
          }

          // Return the user
          return done(null, user);
        } catch (err) {
          // Handle errors
          return done(err, null);
        }
      } else {
        return done(new Error("Profile is undefined"), null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  console.log("serialized user");
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  console.log("deserialized user");
  done(null, obj);
});

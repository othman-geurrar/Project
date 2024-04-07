require("dotenv").config();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const Users = require("../Models/user");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "https://localhost:3000/users/google/callback",
      passReqToCallback: true,
      scope: ["email", "profile"],
    },
    async (req, accessToken, refreshToken, profile, done) => {
      if (profile) {
        console.log(profile);
        try {
          // Find user by ID in the database
          let user = await Users.findOne({ GoogleId: profile.id });
          console.log(user);
          // If user does not exist, create a new one
          if (!user) {
            // Generate a unique ID for the new user
            const userCount = await Users.countDocuments();
            const UserID = `User${1000 + userCount}`;
            user = await Users.create({
              id: UserID,
              GoogleId: profile.id, // Assuming ID from Google will be used as user's ID
              email: profile.email,
              UserName: profile.displayName,
              profilePictureURL: profile.picture,
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

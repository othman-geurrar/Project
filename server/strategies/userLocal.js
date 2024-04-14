const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Users = require("../Models/user"); // Assuming User model is defined in "../Models/User"
const bcrypt = require("bcrypt");

passport.serializeUser((user, done) => {
  console.log("serialized user");
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  console.log(`deserialized user ${id}`);
  const user = await Users.findById(id); // Using findById instead of findOne
  console.log(user);
  if (user) {
    return done(null, user);
  }
  return done(null, false);
});

passport.use(
  'user',
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      console.log(email, password);
      const user = await Users.findOne({ email });
      console.log(user);
      if (!user) {
        return done(null, false);
      }
      const validPassword = await bcrypt.compare(password, user.password);

      if (validPassword) {
        return done(null, user);
      }
      return done(null, false);
    }
  )
);

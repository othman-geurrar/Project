const passport = require("passport");
const { Strategy } = require("passport-local");
const Users = require("../Models/users");
const bcrypt = require("bcrypt");

passport.serializeUser((user, done) => {
  console.log("serialized user");
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  console.log(`deserialized user ${id}`);
  const user = await Users.findOne({ id: id });
  console.log(user);
  if (user) {
    return done(null, user);
  }
  return done(null, false);
});

passport.use(
  new Strategy(
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
      const validPassword = await new Promise((resolve, reject) => {
        bcrypt.compare(password, user.password, (err, res) => {
          if (err) reject(err);
          resolve(res);
        });
      });

      if (validPassword) {
        return done(null, user);
      }
      return done(null, false);
    }
  )
);

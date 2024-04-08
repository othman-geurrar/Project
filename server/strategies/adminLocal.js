const passport = require("passport");
const { Strategy } = require("passport-local");
const Admin = require("../Models/admin");
const bcrypt = require("bcrypt");

passport.serializeUser((admin, done) => {
  console.log("serialized admin");
  done(null, admin.id);
});

passport.deserializeUser(async (id, done) => {
  console.log(`deserialized admin ${id}`);
  const admin = await Admin.findOne({ id: id });
  console.log(admin);
  if (admin) {
    return done(null, admin);
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
      const admin = await Admin.findOne({ email });
      console.log(admin);
      if (!admin) {
        return done(null, false);
      }
      const validPassword = await new Promise((resolve, reject) => {
        bcrypt.compare(password, admin.password, (err, res) => {
          if (err) reject(err);
          resolve(res);
        });
      });

      if (validPassword) {
        return done(null, admin);
      }
      return done(null, false);
    }
  )
);

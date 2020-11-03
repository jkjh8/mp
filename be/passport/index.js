const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const users = require('../data/users.json')
exports.config = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.id)
  });

  passport.deserializeUser((id, done) => {
    const result = users.filter((user) => user.id === id);
    if (result.length > 0) {
      done(null, result[0]);
    }
  });

  passport.use(new LocalStrategy({
    usernameField: 'id',
    passwordField: 'password',
  }, (id, password, done) => {
    const result = users.filter((user) => user.id === id);
    if (result.length > 0) {
      const user = result[0];
      if (password === user.password) {
        done(null, user);
      } else {
        done(null, false, { message: "비밀번호를 확인하세요"});
      }
    } else {
      done(null, false, { message: "가입되지 않은 사용자"});
    }
  }));
};

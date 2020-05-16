const router = require('express').Router();

// Middlewares
const catchErrors = fn => (req, res, next) =>
  fn(req, res, next).catch(err => res.status(500).json({ err }));

const isLogged = (req, res, next) =>
  req.isAuthenticated()
    ? next()
    : res.status(401).json({ err: { msg: 'There is no user logged in' } });

// Controllers
const {
  signup,
  login,
  facebook,
  facebookCb,
  google,
  googleCb,
  currentUser,
  logout,
} = require('../controllers/auth');

// Auth routes
router.post('/signup', catchErrors(signup));
router.post('/login', login);
router.get('/facebook', facebook);
router.get('/facebook/redirect', facebookCb);
router.get('/google', google);
router.get('/google/redirect', googleCb);
router.get('/currentUser', isLogged, currentUser);
router.get('/logout', logout);

module.exports = router;

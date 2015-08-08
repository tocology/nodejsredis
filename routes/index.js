module.exports.index = index;
module.exports.login = login;
module.exports.loginProcess = loginProcess;
module.exports.chat = chat;
module.exports.logOut = logOut;

var util = require('../middleware/utilities');

function index(req, res){
  res.cookie('IndexCookie', 'This was set from Index');
  res.render('index', {title: 'Index'});
};
function login(req, res){
  res.render('login', {title: 'Login'});
};
function loginProcess(req, res){
  var isAuth = util.auth(req.body.username, req.body.password, req.session);
  if(isAuth) {
    res.redirect('/chat');
  } else {
    res.redirect('/login');
  }
};
function logOut(req, res){
  util.logOut(req.session);
  res.redirect('/');
};
function chat(req, res){
  res.render('chat', {title: 'Chat'});
};

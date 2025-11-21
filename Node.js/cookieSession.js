var session = require('cookie-session');
var expess = require('express');
var app = new expess();

app.use(session({
  name: 'session',
  keys: ['key1'],
  Maxage: 5 * 60  * 1000 
}));

app.get('/', function(req, res){
    req.session.user="ABC",
    req.session.city="New York",
    res.send('Session data set')
});

app.get('/getsession', function(req, res){
    res.send(req.session);
});

//delete session
app.get('/deletesession', function(req, res){
    req.session = null;
    res.send('Session data deleted');
});

app.listen(3001, function(){
    console.log('Server started on port 3000');
});


const express = require('express');
const app = express();
const port = 4000;
var t=new Date();
var H=t.getHours();
var D=t.getDay();


app.engine('pug', require('pug').__express);
app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views','./views');
if (H>=9 && H<17 && D>0 && D<6) {
   app.get('/home', function(req, res){
      res.render('home');
   });
   app.get('/ourservices', function(req, res){
      res.render('ourservices');
   });
   app.get('/contact', function(req, res){
      res.render('contact');
   });
      
} else app.get('/', function(req, res){
   res.render('sorry');
});
 
//  app.use((req, res, next) => {
//     console.log('A new request received at ' + Date.now());
//     next();
//   });
// app.use('/time', function(req, res, next){
//    console.log("A request for things received at " + t.getHours());
//    next();
// });

// app.get('/time', function(req, res){
//    res.send("A request for things received at "  );
// });

app.listen(port, function(){
  console.log('The server is running, ' +
      ' please, open your browser at http://localhost:%s', 
      port);
});
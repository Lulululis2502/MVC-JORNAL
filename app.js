const express = require('express');
var consign = require('consign');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));


consign()
  .include('src/routes')
  .then('src/models')
  .then('src/controllers')
  .into(app);

app.listen(3000, function(){
  console.log('APP rodando na porta 3000');
});
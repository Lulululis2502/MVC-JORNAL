//Define as rotas de requisição HTTP (como GET e POST) que serão usadas para acessar ou modificar os dados.

module.exports = function(application){
  application.get('/', function(req, res){
    application.src.controllers.news.index(application, req, res);
  });
}

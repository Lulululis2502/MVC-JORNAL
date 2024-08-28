// Controla a lógica para lidar com as notícias, como busca, adição, ou listagem.

module.exports.index = function(application, req, res) {
  var newsModel = new application.src.models.news();

  newsModel.getLastNews(function(err, result) {
    res.render("news/index", {news : result});
  });
}



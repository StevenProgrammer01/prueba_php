

var tweets;
$('#enviar').click(subirTweet);

function subirTweet() {
  var tipo = "publicacion";
  $.ajax({
    url: 'subirTweet.php',
    type: 'post',
    dataType: 'json',
    data: {
      contenido: $('#mensaje').val(),
      tipo: tipo
    }
  }).done(
    function (data) {

    }
  );

  $('#mensaje').val("");
  consultar();
}

function consultar() {
  $.ajax({
    url: 'obtenerTweets.php',
    type: 'get',
    dataType: 'json'

  }).done(
    function (data) {

      tweets = data;
      console.log(tweets);
      generarTweets();
    }
  );
}

function generarTweets() {

  var salida = "";
  for (var i = 0; i < tweets.length; i++) {
    salida += "<div>";
    for (var j = 1; j < tweets[i].length - 1; j++) {
      if (j == 1) {
        salida += "<p>" + "@" + tweets[i][j] + "</p>"
      } else {
        salida += "<p>" + tweets[i][j] + "</p>"
      }
    }
    salida += "<button type='button' id=" + tweets[i][0] + " onclick='verComentarios(this)'>Ver comentarios</button>";
    //hacer funcionamiento de comentar
    salida += "<button type='button' id=" + tweets[i][0] + " onclick='comentar(this)'>Comentar</button>";
    salida += "</div>";
  }
  tweet.innerHTML = salida;

}


function verComentarios(boton) {
  var id_tweet = boton.id;
  console.log(id_tweet);
  //para mostrar el tweet principal
  $.ajax({
    url: 'mostrarComentarioSelecionado.php',
    type: 'post',
    dataType: 'json',
    data: {
      id_tweet: id_tweet
    }
  }).done(
    function (data) {
      mostrarComentarioSelecionado(data);
    }
  );
  //para ver los comentarios
  $.ajax({
    url: 'mostrarComentarios.php',
    type: 'post',
    dataType: 'json',
    data: {
      id_tweet: id_tweet
    }
  }).done(
    function (data) {
      mostrarComentarios(data);
      console.log(data);
    }
  );

}
function mostrarComentarioSelecionado(comentario) {

  var salida = "";
  salida += "<div>";
  salida += "<p>TWEET PRINCIPAL</p>";
  salida += "<p>" + "@" + comentario[0][1] + "</p>";
  salida += "<p>" + comentario[0][3] + "</p>";
  salida += "<p>" + comentario[0][2] + "</p>";
  salida += "<button type='button' id=" + comentario[0][0] + " onclick='comentar(this)'>Comentar</button>";
  salida += "</div>";

  arriba.innerHTML = salida;

}
function mostrarComentarios(comentarios) {

  var salida = "";
  for (var i = 0; i < comentarios.length; i++) {
    salida += "<div>";
    salida += "<p>" + 'Comentarios ' + "</p>";
    for (var j = 2; j < comentarios[i].length - 1; j++) {
      if (j == 1) {
        salida += "<p>" + "@" + comentarios[i][j] + "</p>"
      } else {
        salida += "<p>" + comentarios[i][j] + "</p>"
      }
    }
    salida += "<button type='button' id=" + comentarios[i][0] + " onclick='verComentarios(this)'>Ver comentarios</button>";
    salida += "</div>";
  }
  tweet.innerHTML = salida;

}
function subirComentario(boton) {
  var id_tweet = boton.id;
  var tipo = "comentario";
  $.ajax({
    url: 'subirTweet.php',
    type: 'post',
    dataType: 'json',
    data: {
      contenido: $('#comentario').val(),
      tipo: tipo
    }
  }).done(
    function (data) {
    });
  $.ajax({
    url: 'comentar.php',
    type: 'POST',
    dataType: 'json',
    data: {
      contenido: $('#comentario').val(),
      tipo: tipo,
      id: id_tweet
    }
  }).done(
    function (data) {
    });

}
function comentar(boton) {
  var id_tweet = boton.id;
  console.log(1);
  $.ajax({
    url: 'buscarTweet.php',
    type: 'POST',
    dataType: 'json',
    data: {
      id: id_tweet
    }
  }).done(
    function (data) {
      console.log(data);
      mostrarComentarioSelecionado(data);
      generarText(id_tweet);

    });

}
function generarText(id_tweet) {
  var salida = " <textarea rows='5' maxlength='250' id='comentario'></textarea>";
  salida += "<button type='button' id='" + id_tweet + "' onclick='subirComentario(this)'>Enviar</button>";
  tweet.innerHTML = salida;
}
consultar();
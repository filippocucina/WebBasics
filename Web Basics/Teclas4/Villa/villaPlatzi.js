//Variables del canvas
var vp = document.getElementById("villa");
var papel = vp.getContext("2d");
var x = 150;
var y = 150;

//Variables literales de las imagenes y movimientos
var teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

var fondo = {
  url: "tile.png",
  cargaOk: false
};

var vaca = {
  url: "vaca.png",
  cargaOk: false
};

var cerdo = {
  url: "cerdo.png",
  cargaOk: false
};

var pollo = {
  url: "pollo.png",
  cargaOk: true
};

var lobo = {
  url: "lobo.png",
  cargaOk: false
};

//Creado los Objetos de la clase Image
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

lobo.imagen = new Image();
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener("load", cargarLobo);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

//document.addEventListener("keyup", moverImagen);

/*
function moverTeclado() {

}
/*
function moverImagen(evento) {
  switch(evento.keyCode) {
    case teclas.LEFT




  }

}
*/
//Funciones
function cargarFondo() {
  fondo.cargaOk = true;
  dibujarImagenes();
}

function cargarLobo() {
  lobo.cargaOk = true;
  dibujarImagenes();
}

function cargarCerdo() {
  cerdo.cargaOk = true;
  dibujarImagenes();
}

function cargarPollo() {
  pollo.cargaOk = true;
  dibujarImagenes();
}

function cargarVaca() {
  vaca.cargaOk = true;
  dibujarImagenes();
}

function dibujarImagenes(evento) {
  if (fondo.cargaOk == true) {
    papel.drawImage(fondo.imagen, 0, 0);
  }

  if (cerdo.cargaOk == true) {
    var x = aleatorio(0, 420);
    var y = aleatorio(0, 420);
    papel.drawImage(cerdo.imagen, x, y);
  }

  if (pollo.cargaOk == true) {
    var x = aleatorio(0, 300);
    var y = aleatorio(0, 300);
    papel.drawImage(pollo.imagen, x, y);
  }

  if (vaca.cargaOk == true) {
    var x = aleatorio(0, 360);
    var y = aleatorio(0, 360);
    papel.drawImage(vaca.imagen, x, y);
  }

  if (lobo.cargaOk == true) {
    papel.drawImage(lobo.imagen, 200, 200);
  }

}

//Funcion Matematica de aleatoriedad
function aleatorio(min, max) {
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}

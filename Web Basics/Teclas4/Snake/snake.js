var teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT:39,
  DOWN:40
};

var cuadrito = document.getElementById("cuadrado");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;


function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, lienzo) {

  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xInicial,yInicial);
  lienzo.lineTo(xFinal,yFinal);
  lienzo.stroke();
  lienzo.closePath();

}


console.log(teclas);

//Inicio del punto
document.addEventListener("keyup", dibujarTeclado);

dibujarLinea("red", 149, 149, 151, 151, papel)

function dibujarTeclado(evento) {
  //Dentro del switch se coloca el elemento que cambia
  var colorcito = "red";
  var movimiento = 7;

  switch(evento.keyCode) {
    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
      console.log("Vamos para arriba");
    break;

    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
      console.log("Vamos para la izquierda");
    break;

    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
      x = x + movimiento;
      console.log("Vamos para la derecha");
    break;

    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
      console.log("Vamos para abaja");
    break;

    default:
      console.log("Tecla equivocada");
    break;
  }

}

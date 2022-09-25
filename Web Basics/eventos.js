var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
var c = document.getElementById("cuadrado");
var lienzo = c.getContext("2d");
boton.addEventListener("click", dibujarPorClick);
var ancho = c.width;

function dibujarCanvas(color, xInicio, yInicio, xFinal, yFinal) {

  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xInicio, yInicio);
  lienzo.lineTo(xFinal, yFinal);
  lienzo.stroke();
  lienzo.closePath();

}


function dibujarPorClick() {

  var l = 0;
  var lineas = parseInt(texto.value);
  var espacio = ancho / lineas;

  for(l = 0; l < lineas; l++) {

    yi = espacio * (l + 1);
    xf = espacio * l;
    dibujarCanvas("red", 1, yi, xf, 299);
  }
}
/*
dibujarCanvas("red", 0, l*10, l*10, 300);
dibujarCanvas("red", l*10, 300, 300, 300-l*10);
dibujarCanvas("red", 300, 300-l*10, 300-l*10, 0);
dibujarCanvas("red", 300-l*10, 0, 0, l*10);
*/

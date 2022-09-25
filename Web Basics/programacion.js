var d = document.getElementById("cuadrado");
var lienzo = d.getContext("2d");
var xi, yi, xf, yf;
var l = 0;
var lineas = 30;


for(l = 0; l < lineas; l++) {

    dibujarCanvas("red", 0, l*10, l*10, 300);
    dibujarCanvas("red", l*10, 300, 300, 300-l*10);
    dibujarCanvas("red", 300, 300-l*10, 300-l*10, 0);
    dibujarCanvas("red", 300-l*10, 0, 0, l*10);
}

xi = 10 * l;
xf = 10 * l;
yi = 10 * (l + 1);
yf = 10 * (l + 1);

ryf = yf - 299;
rxf = 299 - xf;

dibujarCanvas("blue", 1, yi, xf, 299);
dibujarCanvas("blue", 299, yi, xf, 1);
dibujarCanvas("blue", 1, 299, xf, ryf);
console.log("Lineas: " + l);

dibujarCanvas("blue", 100, 100, 100, 200);  //Cuerpo
dibujarCanvas("blue", 100, 200, 70, 250);   //Pie Izquierdo
dibujarCanvas("blue", 100, 200, 130, 250);    //Pie Derecho


dibujarCanvas("red", 1, 1, 1, 299);
dibujarCanvas("yellow", 1, 1, 299, 1);
dibujarCanvas("grey", 299, 1, 299, 299);
dibujarCanvas("green", 299, 299, 1, 299);
//dibujarCanvas("blue", 1, 299,299,299);

//Funcion del canvas
function dibujarCanvas(color, xInicio, yInicio, xFinal, yFinal) {

  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xInicio, yInicio);
  lienzo.lineTo(xFinal, yFinal);
  lienzo.stroke();
  lienzo.closePath();

}

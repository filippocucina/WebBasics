//Arreglo
var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

//var nuevasImagenes = new Array();

//Instancias de la clase

//Ejecucion

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 60, 20, "Fuego"));
coleccion.push(new Pakiman("Pokacho", 70, 25, "Electrico"));
coleccion.push(new Pakiman("Tocinauro", 65, 20, "Agua"));

//paki es simplemente una variable

for (var paki of coleccion) {
  paki.mostrar();
  console.log(paki);
}

/*
for (var x in imagenes) {
  console.log(x);
}
*/

/*
for (var paki in coleccion) {
  console.log(coleccion[paki]);
}
*/

//console.log(cauchin, pokacho, tocinauro);
//console.log(imagenes);
//pokacho.hablar();

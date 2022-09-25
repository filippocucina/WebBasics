var z;

for(var i = 0; i <= 5; i++){

    z = aleatorio(10, 20);
    document.write(z + " " + z);
}

function aleatorio(min, max) {

  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;

}

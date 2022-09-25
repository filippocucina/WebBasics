var numeros = 100;

for (var i = 1; i <= 100; i++) {
  document.write("<br />");

  if (esDivisible(i, 3)) {
    document.write("Fizz");
  }

  if (esDivisible(i,5)) {
    document.write("Buzz");
  }

  if (!esDivisible(i, 3) && !esDivisible(i,5)) {
    document.write(i);
  }
}

//Funcion
function esDivisible(numero, divisor) {
  if (numero % divisor == 0) {
    return true;
  } else {
    return false;
  }
}

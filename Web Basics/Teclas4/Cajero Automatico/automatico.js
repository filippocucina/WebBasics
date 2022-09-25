var imagenes = [];
imagenes["50"] = "billete50.png";
imagenes["20"] = "billete20.png";
imagenes["10"] = "billete10.png";

class Billete {
  constructor(valor, cantidad) {
    this.valor = valor;
    this.cantidad = cantidad;
    this.imagen = new Image();
    this.imagen.src = imagenes[this.valor];
  }
}

var caja = [];
caja.push(new Billete(50, 10));
caja.push(new Billete(20, 20));
caja.push(new Billete(10, 15));

var entregados = [];

var division = 0;
var papeles = 0;

//Botones y Resultado
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
var resultado = document.getElementById("resultado");


function entregarDinero() {
  var t = document.getElementById("dinero");
  var dinero = parseInt(t.value);

  for(var bi of caja) {
    if(dinero > 0) {
      division = Math.floor(dinero / bi.valor);
      if(division > bi.cantidad) {
        papeles = bi.cantidad;
      }
      else {
        papeles = division;
      }

      entregados.push(new Billete(bi.valor, papeles));
      dinero -= (bi.valor * papeles);
    }
  }

  if(dinero > 0) {
    //console.log("No tengo dinero");
    resultado.innerHTML = "No tengo Dinero";
  }
  else {
    for(var e of entregados){
      if(e.cantidad > 0) {
      resultado.innerHTML = "<img src=" + e.imagen.src + "  />";
      }
    }
  }

  console.log(entregados);
}

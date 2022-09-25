var teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT:39,
  DOWN:40
};

console.log(teclas);

//Evento
document.addEventListener("keyup", dibujarTeclado);

function dibujarTeclado(evento) {

  //Dentro del switch se coloca el elemento que cambia
  switch(evento.keyCode) {

    case teclas.UP:
      console.log("Vamos para arriba");
    break;

    case teclas.LEFT:
      console.log("Vamos para la izquierda");
    break;

    case teclas.RIGHT:
      console.log("Vamos para la derecha");
    break;

    case teclas.DOWN:
      console.log("Vamos para abaja");
    break;

    default:
      console.log("Tecla equivocada");
    break;
  }

}

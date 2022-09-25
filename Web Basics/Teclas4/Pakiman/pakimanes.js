class Pakiman {
  constructor(nombre, vida, daño, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.vida = vida;
    this.daño = daño;
    this.imagen = new Image();

    this.imagen.src = imagenes[this.nombre];
 }

 hablar() {
    alert(this.nombre);
 }

 mostrar(){
   document.body.appendChild(this.imagen);
   document.write("<p>");
   document.write("<strong>" + this.nombre + "</strong>");
   document.write("<br />");
   document.write("<strong>" + this.tipo + "</strong>");
   document.write("<br />");
   document.write("<strong> Vida: " + this.vida + "</strong>");
   document.write("<br />");
   document.write("<strong> Daño: " + this.daño + "</strong>" + "<hr  />");
   document.write("<br />");
   document.write("</p>");
 }
}

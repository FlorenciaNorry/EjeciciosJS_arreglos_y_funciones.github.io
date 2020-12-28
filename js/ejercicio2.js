let arreglociudades = [];
let ciudades;
let pos = 0;
do {
  let ciudades = prompt("Ingrese nombre de una ciudad");
  arreglociudades[pos] = ciudades;
  pos++;
  val = confirm("¿desea ingresar otra ciudad?");
} while (val);
for (i = 0; i < arreglociudades.length; i++) {
  document.write(arreglociudades[i] + "<br>");
}
arreglociudades.push("Paris");
document.write("<br> Longitud: " + arreglociudades.length);

if (arreglociudades[0]) {
  document.write("<br><ul><li>" + arreglociudades[0] + "</li></ul>" );
}
if (arreglociudades[2]) {
  document.write("<br><ul><li>" + arreglociudades[2] + "</li></ul>");
}
if (arreglociudades[arreglociudades.length - 1]) {
  document.write("<br><ul><li>" + arreglociudades[arreglociudades.length - 1] + "</li></ul>");
}
document.write("<br>La ciudad que esta en la segunda posicion es : " + arreglociudades[2]);

arreglociudades[1] = "Barcelona"
document.write("<br>La ciudad de la segunda posicion es sustituido por : " + arreglociudades[1]);

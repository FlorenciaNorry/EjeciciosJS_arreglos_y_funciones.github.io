function rectangulo(alto,base){
    let P = 0;
    P = ((2*alto) + (2*base));
    document.write("EL perimetro del rectangulo es : " + P);
}

let alto  = prompt("Ingrese la altura");
let base = prompt("Inrese la base");
rectangulo(alto,base);
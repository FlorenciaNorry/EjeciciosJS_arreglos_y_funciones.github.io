function tablademultiplicar(numero) {
    let tabla = [];
    for (i = 1; i <= 10; i++) {
        res = numero * i;
        tabla[i] = res;
    }
    for (i = 1; i < tabla.length; i++) {
        document.write(numero + " * " + i + " = "+ tabla[i] + "<br>");
    }

}

let numero = prompt("Ingrese un numero");
tablademultiplicar(numero);
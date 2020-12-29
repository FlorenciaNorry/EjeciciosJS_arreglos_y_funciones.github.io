function cadena(frase) {
    for (i = 0; i < frase.length; i++) {
        let letra = frase.substr(i, 1);
        document.write(letra);
        if (letra == letra.toUpperCase()) {
            document.write(" es mayuscula<br>");
        } else if (letra == letra.toLowerCase()) {
            document.write(" es minuscula<br>");
        } else {

        }
    }

}

let frase = prompt("Ingresar un texto");
cadena(frase);
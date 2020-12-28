let dado1 = 0;
let dado2 = 0;
let suma;
let listasuma = [];

for (j = 0; j < 50; j++) {
    for (i = 0; i < 50; i++) {
        resultado = Math.random(1, 6);
        dado1 = dado1 + resultado;
    } 
    for (i = 0; i < 50; i++) {
        resultado2 = Math.random(1, 6);
        dado2 = dado2 + resultado2;
    }
    suma = dado1 + dado2;
    listasuma[j] = suma;
    dado1 = 0;
    dado2 = 0;
    suma = 0;
}

for(i=0; i< listasuma.length; i++){
    document.write(listasuma[i]+"<br>");
}


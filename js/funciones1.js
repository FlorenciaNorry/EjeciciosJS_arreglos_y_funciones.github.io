function parimpar(numero){
    if(numero % 2 == 0){
        document.write("el numero " + numero + " es par")
    }else{
        document.write("el numero " + numero + " es impar")
    }
    
}
let numero = prompt("Ingrese un numero");
parimpar(numero);

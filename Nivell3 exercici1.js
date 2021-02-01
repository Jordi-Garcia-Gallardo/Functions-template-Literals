/* 
Nivell 3
- Exercici 1
Crear una matriu de funcions i invocar cada funció de l'array 
recursivament perquè imprimeixi per pantalla els números de l'1 a el 10
*/
let cont = 1

var num = function num(cont) {
    console.log(cont);
    cont++;
    if (cont<=10) {
        num(cont)
    }
}
var element = function element(cont) {
    console.log(cont);
    cont++;
    if (cont<=10) {
        num(cont)
    }
}
var element1 = function element1(cont) {
    console.log(cont);
    cont++;
    if (cont<=10) {
        num(cont)
    }
}

const functions = [num, element, element1];
for ( i=0; (i<functions.length); i++) {
    functions[i](cont);
}
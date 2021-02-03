/* 
Nivell 3
- Exercici 1
Crea una matriu de deu funcions i empleni-la mitjançant un bucle. 
Cada funció comptarà del 0-9 imprimint-ho per pantalla. Invoqui cada funció de l'array iterativament.
 Haurà d'imprimir-se per pantalla el compte de 0-9 deu vegades
*/
var count = function count(cont) {    
    console.log(cont);
    cont++;                              //función para contar 0-9
    if (cont<10) {
        count(cont)
    }
}

let cont = 0
var initial = 0;
var End = 10;

var functions = [];
for (let i=0; i<10;i++){                  // crear matriz de 10 funciones count.
    functions.push(count)   
}

console.log(functions)                    // imprimimos la matriz creada.

for ( i=0; (i<functions.length); i++) {   // recorremos matriz de funciones y las activamos una tras otra.
    functions[i](cont);
}
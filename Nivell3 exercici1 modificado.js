/* 
Nivell 3
- Exercici 1
Crea una matriu de deu funcions i empleni-la mitjançant un bucle. 
Cada funció comptarà del 0-9 imprimint-ho per pantalla. Invoqui cada funció de l'array iterativament.
 Haurà d'imprimir-se per pantalla el compte de 0-9 deu vegades
*/

let cont = 0

var initial = 0;
var End = 10;
var functions = [];

while(initial < End){
  functions.push("functions"+initial++);
}
console.log(functions)

var functions0 = function functions0(cont) {
    console.log(cont);
    cont++;
    if (cont<10) {
        functions0(cont)
    }
}
var functions1 = function functions1(cont) {
    console.log(cont);
    cont++;
    if (cont<10) {
        functions1(cont)
    }
}
var functions2 = function functions2(cont) {
    console.log(cont);
    cont++;
    if (cont<10) {
        functions2(cont)
    }
}
var functions3 = function functions3(cont) {
    console.log(cont);
    cont++;
    if (cont<10) {
        functions3(cont)
    }
}
var functions4 = function functions4(cont) {
    console.log(cont);
    cont++;
    if (cont<10) {
        functions4(cont)
    }
}
var functions5 = function functions5(cont) {
    console.log(cont);
    cont++;
    if (cont<10) {
        functions5(cont)
    }
}
var functions5 = function functions5(cont) {
    console.log(cont);
    cont++;
    if (cont<10) {
        functions5(cont)
    }
}
var functions6 = function functions6(cont) {
    console.log(cont);
    cont++;
    if (cont<10) {
        functions6(cont)
    }
}
var functions7= function functions7(cont) {
    console.log(cont);
    cont++;
    if (cont<10) {
        functions7(cont)
    }
}
var functions8 = function functions8(cont) {
    console.log(cont);
    cont++;
    if (cont<10) {
        functions8(cont)
    }
}
var functions9 = function functions9(cont) {
    console.log(cont);
    cont++;
    if (cont<10) {
        functions9(cont)
    }
}
var functions = [functions0,functions1,functions2,functions3,functions4,functions5,functions6,functions7,functions8,functions9];
    
for ( i=0; (i<functions.length); i++) {
    functions[i](cont);
}
/* 
Nivell 3
- Exercici 2
Crear una funció anònima autoinvocable (igualada a una variable) 
que imprimeixi per pantalla el nom d'usuari rebut com a paràmetre
*/

let b = ("Jordi");

( (a = b) => {
    console.log(a);
})();
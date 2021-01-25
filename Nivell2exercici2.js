/* 
Nivell 2
Exercici 2 
Invocar la funció mitjançant template literals
*/

function logusername(username){
    console.log(`El username es ${username}\ni te els seguents noms i cognoms ${nom} ${cognom}`);
}
  
var nom = 'Jordi';
var cognom = 'Garcia';
  
` Activaremos la funcion utilizando con el siguiente template ${logusername('JorGar')}`;
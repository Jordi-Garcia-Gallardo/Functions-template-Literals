/* 
Nivell 2
Exercici 1 
Imprimir el nom i cognoms de l'usuari en variables mitjançant template literals, 
creant les variables i referenciant en la impressió de l'missatge
*/

function logusername(username){
  console.log(`El username es ${username}\ni te els seguents noms i cognoms ${nom} ${cognom}`);
}
  
var nom = 'Jordi';
var cognom = 'Garcia';
  
logusername('JorGar');
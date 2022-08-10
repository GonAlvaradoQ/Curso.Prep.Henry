// No cambies los nombres de las funciones.

function devolverPrimerElemento(_array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
return _array[0];

}


function devolverUltimoElemento(_array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return _array[_array.length -1];
}


function obtenerLargoDelArray(_array) {
  // Devuelve el largo de un array
  // Tu código:
  return _array.length
}


function incrementarPorUno(_array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
var nuevoarray=[];
  for(let i = 0; i < _array.length; i++){
    nuevoarray[i] = _array[i] + 1; 
  }
  return nuevoarray
}


function agregarItemAlFinalDelArray(_array, _elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  _array[_array.length] = _elemento;  
return _array;
return _array.push(_elemento);

}


function agregarItemAlComienzoDelArray(_array, _elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
_array.unshift(_elemento);
return _array
  
}


function dePalabrasAFrase(_palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
return _palabras.join(" ");
  
}


function arrayContiene(_array, _elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
for(var i = 0; i < _array.length; i++){
  if(_array[i]=== _elemento) return true  
}  return false
}


function agregarNumeros(_numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
    var acc = 0;
    for (var i = 0; i < _numeros.length; i++){
        acc = acc + _numeros[i];      
    } return acc
}


function promedioResultadosTest(_resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var sumaTotal = 0;
  var numeroTest = _resultadosTest.length;
for( var i = 0; i < _resultadosTest.length; i++){
  sumaTotal += _resultadosTest[i]
} var promedio = sumaTotal / numeroTest;
return promedio;
}


function numeroMasGrande(_numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
var acc = 0 ;
  for (let i = 0; i < _numeros.length; i++) {
   if (_numeros[i] > acc) {
    acc = _numeros[i];
   }
  }
return acc;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
var producto = 1;
if (arguments.length === 0) return 0;
  else {
    for (let i = 0; i < arguments.length; i++) {
      producto *= arguments[i]
    }
  } return producto;
}


function cuentoElementos(_arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
var acc = 0 
for (var i =0 ; i < _arreglo.length; i++){
    if ( _arreglo[i] > 18) acc++;
} return acc;
}


function diaDeLaSemana(_numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: "Es fin de semana"
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
switch (_numeroDeDia){
  case 1: 
  case 7: 
  return "Es fin de semana"
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  return "Es dia Laboral"
  default:
    break;
}  
} 


function empiezaConNueve(_n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
    var string = _n + ""
    if ( string[0] === "9") return true;
    else return false;
}


function todosIguales(_arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var primerValor = _arreglo[0]
  for(var i= 0; i < _arreglo.length; i++){
    if(_arreglo[i] !== primerValor) return false
  } return true

} 


function mesesDelAño(_array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevoArray = []
for (var i=0 ; i < _array.length; i++) {
  if (_array[i] === "Enero" || _array[i] === "Marzo" || _array[i] === "Noviembre") nuevoArray.push(_array[i])
} if (nuevoArray.length !== 3) return "No se encontraron los meses pedidos"
return nuevoArray;
}


function mayorACien(_array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var nuevoArray = []
  for (var i = 0; i < _array.length ; i++){
    if (_array[i] > 100 && _array[i] < 201) nuevoArray.push(_array[i])
  } return nuevoArray
}


function breakStatement(_numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var nuevoArray = []
  var acc = _numero
  var j = 0
  
  for(var i = 0; i < 10; i++){
    j = i;
    if (i===acc) break;
    acc = acc +2
    nuevoArray.push(acc)
  }
  if (j === acc) return"Se interrumpió la ejecución"

return nuevoArray;
}


function continueStatement(_numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var nuevoArray = [];
  var acc = _numero;
  for( var i = 1; i < 11; i++) {
    if(i === 5) continue;
    acc = acc + 2;
    nuevoArray.push(acc);
  } return nuevoArray
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};

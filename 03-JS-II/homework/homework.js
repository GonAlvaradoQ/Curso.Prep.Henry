// No cambies los nombres de las funciones.

function obtenerMayor(_x, _y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
if (_x>_y) {
  return _x;
}
else{
  return _y;
}
}

function mayoriaDeEdad(_edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
if (_edad >= 18){
  return "Allowed";
}
else (_edad < 18); {
  return "Not allowed"
} 
}
  
function conection(_status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  if (_status === 1){
    return "Online";
  }
  else if (_status === 2){
    return "Away"
  } return "Offline"
}

function saludo(_idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
if (_idioma === "aleman"){
  return "Guten Tag!";
} else if (_idioma === "mandarin"){
  return "Ni Hao!";
} else if (_idioma === "ingles"){
  return "Hello!";
} return "Hola!";
}

function colors(_color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  switch(_color){
    case("blue"):
      return "This is blue";
    case("red"):
      return "This is red";
    case("green"):
      return "This is green";
    case("orange"):
      return "This is orange";
    default:
      return "Color not found"
  }

}

function esDiezOCinco(_numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  if(_numero === 10 || _numero === 5){
    return true
  } return false
}

function estaEnRango(_numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if(_numero < 50 && _numero > 20){
    return true;
  } return false
}

function esEntero(_numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  if (_numero % 1 === 0){
    return true
  } return false
}

function fizzBuzz(_numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  if (_numero % 3 === 0 && _numero % 5 === 0){
    return "fizzbuzz";
  } else if (_numero % 3 === 0){ 
    return "fizz";
  } else if (_numero % 5 === 0){
    return "buzz";
  } 
  return _numero
}
function operadoresLogicos(_num1, _num2, _num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
if (_num1 < 0 || _num2 < 0 || _num3 < 0){
  return "Hay negativos";
} else if (_num1 > 0 && _num1 > _num2 && _num1 > _num3){
  return "Número 1 es mayor y positivo";
} else if (_num1 === 0 || _num2 === 0 || _num3 === 0){
  return "Error";
} else if (_num3 > _num1 && _num3 > _num2){
  return _num3 + 1
} return false


}

function esPrimo(_numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  if (_numero === 0 || _numero ===1) return false;
  for (var i= 2; i< _numero; i++){
  if (_numero % i === 0) return false
} return true
}
function esVerdadero(_valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  if(_valor === true){
    return "Soy verdadero";
  } else if (_valor === false)
  return "Soy falso";
}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  let arrayTablaDel6 = []
  for (let i = 0; i < 11; i++) {
        arrayTablaDel6.push(6 * i)
  }
  return arrayTablaDel6

}

function tieneTresDigitos(_numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  if(_numero > 99 && _numero < 1000){
    return true
  } return false
}

function doWhile(_numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
var acc = _numero;
var aux = 1
  do{
    acc = acc + 5 ;
    aux = aux + 1

}while(aux < 9)
return acc; 
} 


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};

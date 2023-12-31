// Funcion que procesa la expresión ejecutando las operaciones matemáticas
// Primero necesito separar los números de los operadores
export function procesarExpresion(expresionInterna) {
  // Arrays que almacena los números y los operadores
  const numeros = [];
  const operadores = [];
  // Variable que almacena el número actual
  let numeroActual = "";

  // Foor loop que recorre la expresión
  for (let caracter of expresionInterna) {
    // Condicional que evaluará si el caracter es un número o un operador
    if (
      caracter === "*" ||
      caracter === "/" ||
      caracter === "+" ||
      caracter === "-"
    ) {
      // El operador lo empujo a la variable operadores
      operadores.push(caracter);
      // Agrego el numeroactual al array de números y lo limpio
      if (numeroActual !== "") {
        numeros.push(parseFloat(numeroActual));
        numeroActual = "";
      }
    } else {
      // Si el caracter es un número lo agrega a la variable numeroActual
      numeroActual += caracter;
    }
  }
  // Agrego el último numeroactual al array de números
  if (numeroActual !== "") {
    // El numeroActual lo empujo a la variable números y lo limpio
    numeros.push(parseFloat(numeroActual));
    numeroActual = "";
  }

  // Realizo las operaciones matemáticas
  for (let i = 0; i < operadores.length; i++) {
    // Condicional que evalua si el operador es multiplicación o división
    if (operadores[i] === "*" || operadores[i] === "/") {
      // Variable que almacena el resultado de la operación
      let resultado;
      // Según el operador multiplico o divido
      if (operadores[i] === "*") {
        resultado = numeros[i] * numeros[i + 1];
      } else {
        resultado = numeros[i] / numeros[i + 1];
      }

      // Elimino el operador y sustituyo los doa números por el resultado
      operadores.splice(i, 1);
      numeros.splice(i, 2, resultado);
      // Decremento el contador para que no se salte el siguiente operador
      i--;
    }
  }
  // numeros = [9, 210, 2]
  // operadores = ["+", "-"]

  // i = 2
  // resultado = 217

  // Crear una variable que almacene el resultado y la que retornaré al final
  let resultado = numeros[0];
  // Recorro los operadores que quedan y realizo las operaciones (suma y resta)
  for (let i = 0; i < operadores.length; i++) {
    // Según el operador sumo o resto
    if (operadores[i] === "+") {
      resultado += numeros[i + 1];
    } else {
      resultado -= numeros[i + 1];
    }
  }
  // Retorno el resultado
  return resultado;
}

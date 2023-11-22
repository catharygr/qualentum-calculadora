import { procesarExpresion } from "./node_modules/@bubulazi/calculadora/main.js";

const input = document.querySelector("#input");
const sumar = document
  .querySelector("#sumar")
  .addEventListener("click", () => annadirOperarador("+"));
const restar = document
  .querySelector("#restar")
  .addEventListener("click", () => annadirOperarador("-"));
const multiplicar = document
  .querySelector("#multiplicar")
  .addEventListener("click", () => annadirOperarador("*"));
const dividir = document
  .querySelector("#dividir")
  .addEventListener("click", () => annadirOperarador("/"));
const uno = document
  .querySelector("#uno")
  .addEventListener("click", () => annadirNumero("1"));
const dos = document
  .querySelector("#dos")
  .addEventListener("click", () => annadirNumero("2"));
const tres = document
  .querySelector("#tres")
  .addEventListener("click", () => annadirNumero("3"));
const cuatro = document
  .querySelector("#cuatro")
  .addEventListener("click", () => annadirNumero("4"));
const cinco = document
  .querySelector("#cinco")
  .addEventListener("click", () => annadirNumero("5"));
const seis = document
  .querySelector("#seis")
  .addEventListener("click", () => annadirNumero("6"));
const siete = document
  .querySelector("#siete")
  .addEventListener("click", () => annadirNumero("7"));
const ocho = document
  .querySelector("#ocho")
  .addEventListener("click", () => annadirNumero("8"));
const nueve = document
  .querySelector("#nueve")
  .addEventListener("click", () => annadirNumero("9"));
const cero = document
  .querySelector("#cero")
  .addEventListener("click", () => annadirNumero("0"));
const punto = document
  .querySelector("#punto")
  .addEventListener("click", () => annadirNumero("."));
const clear = document
  .querySelector("#clear")
  .addEventListener("click", () => limpiarDisplay());
const resultado = document
  .querySelector("#result")
  .addEventListener("click", () => calcularResultado());
// Variable que almacena la expresión a calcular
let expresion = "";

// Función que toma el número y lo agrega a la expresión
function annadirNumero(numero) {
  expresion += numero;
  input.innerHTML = expresion;
}

// Función que toma el operador y lo agrega a la expresión
function annadirOperarador(operador) {
  expresion += operador;
  input.innerHTML = expresion;
}

// Función que limpia el display
function limpiarDisplay() {
  expresion = "";
  input.innerHTML = expresion;
}
// Función que toma la expresión la envía a la función procesarExpresion y lo que recibe como retorno lo muestra en el display
function calcularResultado() {
  // Con Try/Catch evaluo si la expresión es válida
  try {
    // Ejecuto la función procesarExpresion, le paso la expresión y lo que retorna (resultado de la operación) lo almaceno en la variable resultado
    const resultado = procesarExpresion(expresion);
    // Convierto el resultado a string
    const expresionFinal = resultado.toFixed(2).toString();
    // Muestro el resultado en el display
    input.innerHTML = expresionFinal;
  } catch (error) {
    input.innerHTML = "Error";
  }
}

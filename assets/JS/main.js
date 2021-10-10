//2.Operación con 2 números

let validacionNumero = false;

do {
//Solicitud de números
let num1 = parseInt(prompt("Ingrese primer número mayor y distinto que cero "));
let num2 = parseInt(prompt("Ingrese segundo número mayor y distinto que cero "));

//Condición de validación
if( !isNaN(num1) && !isNaN(num2) ){
  if(num1 > 0 && num2 > 0) {
    if( num1 !== num2){
      validacionNumero = true;

      //Operatorias
      let suma = num1 + num2;
      let resta = num1 - num2;
      let division = num1 / num2;
      let multiplicacion = num1 * num2;
      let modulo = num1 % num2; 

      console.log("la sumatoria de los numeros ingresados es: " +suma);
      console.log("la resta de los numeros ingresados es: " +resta);
      console.log("la division de los numeros ingresados es: " +division);
      console.log("la multiplicacion de los numeros ingresados es: " +multiplicacion);
      console.log("el modulo de los numeros ingresados es: " +modulo);
      
    }
  }
}
//comparaicón logica
} while (validacionNumero == false);

/////////////////////////////////////////////////////////////////////////////////////////////////

//3. TEMPERATURA
let validacionCelsius = false;

do {
//Solicitud de números
let tempCelsiusC = parseInt(prompt("Ingrese la Temperatura en grados Celsius "));

if( !isNaN(tempCelsiusC) ){
  
  validacionCelsius = true;

      //Operatorias
      let Kelvin =  parseFloat(tempCelsiusC + 273.15);
      let Fahrenheit = parseFloat((tempCelsiusC* 9/5) + 32);

      //Impresion de datos
      console.log("La Temperatura en Grados Kelvin es : " +Kelvin);
      console.log("La Temperatura en Grados Fahrenheit es : " +Fahrenheit);
  
}
//comparaicón logica
} while (validacionCelsius == false);

/////////////////////////////////////////////////////////////////////////////////////////////////
//4.Días equivalentes a años y semanas

let validacionDias = false;
let año = 365;
let semana = 7;

do {
//Solicitud de números
let dias = parseInt(prompt("Ingrese la cantidad de días :"));

if( !isNaN(dias) ){
  
  validacionDias = true;

      //Operatorias
      let años = dias / 365;
      let semana = dias / 7;

      //Impresion de datos
}
if(dias >= 2 * año && días >= 2 * semana && dias > 1){
  console.log("el número ingresado es equivalente a : " + Math.floor(años)+ " años, " + Math.floor(semana)+ " semanas, y " +dias+ "días");
} 
else ( dias == año && días == semana && dias == 1)
console.log("el número ingresado es equivalente a : " + Math.floor(años)+ " año, " + Math.floor(semana)+ " semana, y " +dias+ "día. <br>");

//comparaicón logica
} while (validacionDias == false);



/////////////////////////////////////////////////////////////////////////////////////////////////
//5. PROMEDIO

let validacionPromedios = false;

do {
//Solicitud de números
let nota1 = parseFloat(prompt("Ingrese nota 1 "));
let nota2 = parseFloat(prompt("Ingrese nota 2 "));
let nota3 = parseFloat(prompt("Ingrese nota 3 "));
let nota4 = parseFloat(prompt("Ingrese nota 4 "));
let nota5 = parseFloat(prompt("Ingrese nota 5 "));

//Condición de validación
if( !isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3) && !isNaN(nota4) && !isNaN(nota5)){
  
      validacionPromedios = true;

      //Operatorias
      let sumatoria = nota1 + nota2 + nota3 + nota4 + nota5;
      let promedio = sumatoria /5;
     
      console.log("la sumatoria de los numeros ingresados es: " +sumatoria);
      console.log("la resta de los numeros ingresados es: " +promedio);
    }
  
//comparaicón logica
} while (validacionPromedios == false);



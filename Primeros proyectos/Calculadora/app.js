const calculadora = require('./tpcalculadora/calculadora')

const process = require('process');
const operacion = process.argv[2];
const num1 = +process.argv[3];
const num2 = +process.argv[4];
let resultado = 0;

    if(operacion === "sumar"){
        resultado = calculadora.sumar(num1, num2)
    }else if(operacion === "restar"){
        resultado = calculadora.restar(num1, num2)
    }else if(operacion === "multiplicar"){
        resultado = calculadora.multiplicar(num1, num2)
    }else if(operacion === "dividir"){
        resultado = calculadora.dividir(num1, num2)
    }else {
        resultado = "Elija entre Suma, resta, division o multiplicacion por favor"
    }
    console.log("El resultado es: "+resultado);

    //Alumno Lisandro Palavecino//
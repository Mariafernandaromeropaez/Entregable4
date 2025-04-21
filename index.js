//1.Funciónquedeterminesiunañoesbisiesto.
//Un año es bisiesto si es divisible entre 4, pero no entre 100, o si es divisible entre 400.

function esBisiesto(año) {
    return((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0))
}
console.log(esBisiesto(2024))
console.log(esBisiesto(1900))
console.log(esBisiesto(2000))
console.log(esBisiesto(2023))

  //2 Funcion que convierta grados Celsius a Fahrenheit y viceversa.
//La fórmula para convertir Celsius a Fahrenheit es: (C * 9/5) + 32 = F
//La fórmula para convertir Fahrenheit a Celsius es: (F - 32) * 5/9 = C

function convertirTemperatura(valor, unidad) {
    if (unidad === 'C') {
        return (valor * 9/5) + 32; // Celsius a Fahrenheit
    } else if (unidad === 'F') {
        return (valor - 32) * 5/9; // Fahrenheit a Celsius
    } else {
        return 'Unidad no válida. Usa "C" para Celsius o "F" para Fahrenheit.';
    }
}
console.log(convertirTemperatura(25, 'C')); // 77
console.log(convertirTemperatura(77, 'F')); // 25
console.log(convertirTemperatura(25, 'K')); // Unidad no válida. Usa "C" para Celsius o "F" para Fahrenheit.

//3.Función que devuelva el mayor de dos números.
//La función debe recibir dos números y devolver el mayor de ellos.
//Si son iguales, devolver uno de ellos.

function mayorDeDosNumeros(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        return num1; // o num2, ya que son iguales
    }
        console.log(mayorDeDosNumeros(5, 10)); // 10
        console.log(mayorDeDosNumeros(10, 5)); // 10
        console.log(mayorDeDosNumeros(5, 5)); // 5
        console.log(mayorDeDosNumeros(0, 0)); // 0
    } 

//4 Función que convierta una cantidad de minutos en una cadena que indique cuántas horas y minutos corresponden
//Por ejemplo, si la función recibe 130 minutos, debe devolver "2 horas y 10 minutos".
function convertirMinutos(minutos) {
    const horas = Math.floor(minutos / 60);
    const minutosRestantes = minutos % 60;
    return `${horas} horas y ${minutosRestantes} minutos`;
}
    console.log(convertirMinutos(130)); // "2 horas y 10 minutos
    console.log(convertirMinutos(60)); // "1 horas y 0 minutos"
console.log(convertirMinutos(45)); // "0 horas y 45 minutos"

//5.Función que determine si un número está dentro de un rango dado (incluyendoloslímites)
//La función debe recibir tres parámetros: el número a verificar, el límite inferior y el límite superior.
function estaEnRango(numero, limiteInferior, limiteSuperior) {
    return numero >= limiteInferior && numero <= limiteSuperior;

    console.log(estaEnRango(5, 1, 10)); // true
    console.log(estaEnRango(0, 1, 10)); // false
    console.log(estaEnRango(10, 1, 10)); // true
}

//6.Función que calcule el precio final después de aplicar un porcentaje de descuento a un precio inicial.
//La función debe recibir dos parámetros: el precio inicial y el porcentaje de descuento.
//El precio final se calcula restando el descuento al precio inicial.
//El descuento se calcula multiplicando el precio inicial por el porcentaje de descuento y dividiendo entre 100.

function calcularPrecioFinal(precioInicial, porcentajeDescuento) {
    const descuento = (precioInicial * porcentajeDescuento) / 100;
    return precioInicial - descuento;
}
console.log(calcularPrecioFinal(100, 20)); // 80
console.log(calcularPrecioFinal(50, 10)); // 45
console.log(calcularPrecioFinal(200, 25)); // 150

//Función que determine si una persona puede votar según su edad
//La función debe recibir un parámetro: la edad de la persona.
//Una persona puede votar si tiene 18 años o más.
//La función debe devolver true si puede votar y false si no puede votar.
function puedeVotar(edad) {
    return edad >= 18;
}
console.log(puedeVotar(20)); // true
console.log(puedeVotar(17)); // false
console.log(puedeVotar(18)); // true
console.log(puedeVotar(16)); // false

//.Función que calcule el área de un triángulo dados subase y altura
//La fórmula para calcular el área de un triángulo es: (base * altura) / 2
//La función debe recibir dos parámetros: la base y la altura.
//La función debe devolver el área del triángulo.
function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.log(calcularAreaTriangulo(5, 10)); // 25
console.log(calcularAreaTriangulo(10, 20)); // 100
console.log(calcularAreaTriangulo(7, 14)); // 49
console.log(calcularAreaTriangulo(0, 10)); // 0

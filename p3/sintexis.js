
// const message = "Hola Mundo";
// let mutableMessage = "Hola Mundo";
// mutableMessage = "Hola Mundo mutable";
// // Historia General
// // var mutableMessage2 = "Hola Mundo";

// /*
// Comentarios de Bloque
// */

// //
// const resultado = 1 + 2;
// // + - * /
// // % += -= *= /=

// const residuo = 2 % 2; // 0
// const residuo2 = 3 % 2; // 1

// let acumulador = 1;
// acumulador  = acumulador + 1; //2
// acumulador += 1; //3

// acumulador -= 1; //2

// acumulador *= 2; //4
// acumulador = acumulador * 2; //8

// acumulador ++; //9
// acumulador --; //8

// const texto = "Hola" + " " + "Mundo";

// // Estructuras de Control

// // CamelloHungaro,
// const nombreCompleto = "Juan Perez";
// const cuandolosgatosnoestanlosratonesfiestaofresenycasanada = true;
// const cuandoLosGatosNoEstanLosRatonesFiestaOfrecenyCasaNada = true;

// let intEdad = 10;
// //////  texto, boolean, numeric, object

// if ("2" == 2) {
//     // true
// }

// if ("2" === 2) {
//     // false
// } else {
//     // Expresiones
// }

// if (1===1) {

// } else if( 1===2) {

// } else {

// }

// switch (intEdad) {
//     case 1:
//         //expresiones
//         break;
//     case 2:
//         //expresiones
//         break;
//     default:
//         //expresiones
//         break;
// }


// // Evaluacion ternaria
// const esVerdadero = false;
// let variableX = '';
// if ( esVerdadero === true ) {
//     variableX = "Verdadero";
// } else {
//     variableX = "False";
// }


// let variableY = esVerdadero ? "Verdadero" : "False"; //Condiciones Ternarias.


// // == === != !== > < >= <=

// // && || !


// // if else, while, for, switch, do while

// for ( let i = 0; i < 100 ; i++ ) {
//     console.log(i);
// }

// //
// let exit = 0;
// while (exit <= 100) {
//     console.log(exit);
//     exit ++;
// }

// // do while
// let exit2 = 2000;
// do {
//     console.log(exit2)
//     exit2++;
// } while(exit2 < 100);

// //

let arrNumeros = [10, 15, 20, 21, 68, 93];

arrNumeros.forEach(
    function forEachHandler( valor, indice) {
        console.log(`Iteración ${indice}: ${valor}`);
    }
);

let nuevoArreglo = arrNumeros.map(
    (valor)=>{
        return valor * valor;
    }
);

console.log(nuevoArreglo);


//Funciones

function forEachValue() {
        let variable1 = "hola";
        function innerValue(){
            console.log("Hello");
            variable1 = "adios";
        }
}

const square = (a)=>{
    return a * a;
};

const squareEvolved = a=>a*a;









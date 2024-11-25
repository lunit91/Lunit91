//var numero1= 3
//var numero2= 6

var numero1= parseInt(prompt("ingresa el primer numero para la suma"))
var numero2= parseInt(prompt("ingresa el segundo numero para la sma"))

var resultado = sumarDosNumeros(numero1,numero2) ;
alert( resultado );

function sumarDosNumeros(numero1,numero2) {
    resultado = numero1 + numero2;
    return resultado;
}
//prompt('ingrese su edad')

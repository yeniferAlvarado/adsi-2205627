"use strict"


/* Ejercicio 1 */
/* VALIDAR SI EL USUARIO Y LA CONTRASEÑA INGRESADA SON LAS MISMAS QUE SE ENCUIENTRAN EN LA BASE DE DATOS */
var passInput = 12345;
var passBD = 12345;

if (passInput === passBD){
    console.log("Bienvenido!!")
}



/* Ejercicio 2 */
/* VALIDAR SI LA PERSONA PUEDE VOTAR SI NO MOSTRAR MENSAJE */
var edadUsuario = 18;
var limiteVotacion = 18;

if (edadUsuario >= limiteVotacion){
    console.log("Bienvenido(a) a la votacion!!")
}else if (edadUsuario < limiteVotacion){
    console.log("Lo sentimos, aun no cuenta con la edad suficiente para votar")
}else{
    console.log("Lo sentimos, ha surgido un error. Ingrese solamente numeros")
}



/* Ejercicio 3 */
/* if anidado */
/* Una aerolinea presenta la siguiente oferta: si el pasajero tiene menos de 10 años 
tiene un 10% de descuento. Si el destino es Cartagena, dicho pasajero tendra otro 10%
adicional sobre el valor final y si la aerolinea es Latam tendra otro 10% adicional sobre el valor restante*/
var edadPasajero = 9;
var costoTiquete = 250000;
var destinoPasajero = "Cartagena";
var destinoOferta = "Cartagena";
var aerolineaPasajero = "Latam";
var oferta = 0;
var descuentoEdad = 10;
var aerolineaOferta = "Latam";

if (edadPasajero <= 10){
    oferta = costoTiquete
};
"use strict"
/*
        Suma..................+
        Resta.................-
        Multiplicacion........*
        Division............../
        Residuo...............%
*/

/*Calcular el costo de un producto teniendo en cuenta el impuesto el domicilio y el descuento*/

var costoProducto = 12000;
var impuesto = 5; /*10 por ciento */
var costoImpuesto = 0;
var costoProductoConImp = 0;
var costoProductoConDescuento = 0;
var domicilio = 2500;
var descuento = 20; /* 20 por ciento del valor final sin el domicilio */
var costoFinal = 0;

costoImpuesto =(impuesto / 100) * costoProducto;
var costoProductoConImp = costoProducto + costoImpuesto;



descuento = (descuento / 100);

costoProductoConDescuento = (costoProductoConImp - (costoProductoConImp * descuento));
costoFinal=  costoProductoConDescuento+  domicilio;
console.log( "el costo total es de: $" + costoFinal);
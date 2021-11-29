"use strict"

var n1= 800;
var n2= 400;
var n3= 100;
var n4=600;

if ((n1 > n2 && n1 > n3 && n1 > n4 )){
    console.log("El primer producto cuesta  $" + n1 + ",  este producto es el mas costoso de los 4");
}else if ((n2 > n1 && n2 > n3 && n2 > n4 )){
    console.log("El segundo producto cuesta  $" + n2 + ",  este producto es el mas costoso de los 4");
}else if ((n3 > n1 && n3 > n2 && n3 > n4 )){
    console.log("El tercer producto cuesta  $ " + n3 + ",  este producto es el mas costoso de los 4");
}else if ((n4 > n1 && n4 > n2 && n4 > n3 )){
    console.log("El cuarto producto cuesta  $" + n4 + ", este producto es el mas costoso de los 4");
}

if ((n1 < n2 && n1 < n3 && n1 < n4 )){
    console.log("El primer producto cuesta  $" + n1 + ",  este producto es el menos costoso de los 4");
}else if ((n2 < n1 && n2 < n3 && n2 < n4 )){
    console.log("El segundo producto cuesta  $" + n2 + ",  este producto es el menos costoso de los 4");
}else if ((n3 < n1 && n3 < n2 && n3 < n4 )){
    console.log("El tercer producto cuesta  $" + n3 + ",  este producto es el menos costoso de los 4");
}else if ((n4 < n1 && n4 < n2 && n4 < n3 )){
    console.log("El cuarto producto cuesta  $" + n4 + ",  este producto es el menos costoso de los 4");
}
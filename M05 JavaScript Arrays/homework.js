/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
var array = [16, 2, 3, 5, 6];
var primero = array[0];
   return (primero);
}
devolverPrimerElemento ();

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
var array = [16, 2, 3, 5, 56];
var ultimo = array[array.length - 1];
   return (ultimo);
}
devolverUltimoElemento ();

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
var array = [16, 2, 3, 5, 56, 5, 85];
   return(array.length);
}
obtenerLargoDelArray ();

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var array =[1,525,2, 24];
   var aumentar= [];
   for(var i = 0; i < array.length; i++) {
   aumentar[i] = array[i] + 1;
   }
   return(aumentar);
}
incrementarPorUno();

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   var array = ["cerdo", "gallina", "perro"];
   array.push("gato", "vaca");
return(array);

}
agregarItemAlFinalDelArray();

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   var array = ["a", "e", "i"];
   array.unshift("o", "u");
return(array);

}
agregarItemAlComienzoDelArray();

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var palabras = ["Hola", "Ricardo", "Salguero!"];
   var frase = palabras.join (' ');
   return(frase);
}
dePalabrasAFrase();

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   var array = ["Quito", "Guayaquil", "Cuenca", "Loja"];
   var existe = array.includes("Ambato");
   return(existe);
}
arrayContiene();

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var suma = 0;
   var arrayOfNum = [5, 4, 1];
   arrayOfNum.forEach( function (num) {
   suma += (num);  
   });
return (suma);
}
agregarNumeros();

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var resultadosTest= [5, 10, 15, 20];
   var promedio = 0;
   var suma = 0;
   for (var i = 0; i < resultadosTest.length; i++) {
      suma = suma + resultadosTest[i];
   }
   var promedio = suma / resultadosTest.length;
return(promedio);
}
promedioResultadosTest();

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var arrayOfNums = [1,55,34,71];
   var mayor = 0;

   for (var numero of arrayOfNums) {
      if (mayor < numero)
      mayor= numero;
   }
return(mayor);
}
numeroMasGrande();

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
var arguments = [5, 5, 2, 1];
var total = 1;
   if (arguments.length === 0)
   return(0);
      else if(arguments.length === 1) 
      return(arguments[0]);
   else{
      for(var i = 0; i < arguments.length; i++){
         total = total * arguments[i];
   }
   return(total);
   }
}
multiplicarArgumentos();

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var cont = 0;
   var array = [20, 112, 14 ,18];
   for (var i = 0; i < array.length; i++) {
      if(array[i] >18){
         cont ++;
      }
   }
   return(cont);
}
cuentoElementos();

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
      if (numeroDeDia === 6|| numeroDeDia ===7) {
         return("Es fin de semana");
      }else {
         return("Es dia laboral");
      }
   }
diaDeLaSemana(3);

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var cadena = num.toString();
   if (cadena [0] === '9') {
      return(true);
   }else {
      return(false);
   }
}
empiezaConNueve(9875);

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var array = [1, 1, 1, 1];
   var igual = array => array.every ( num => num === array[0]);
   return (igual(array));   
}
todosIguales();

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var array = ["Enero", "Abril", "Marzo", "Agosto", "Mayo", "Diciembre"];
   var meses =[];
   for (var i = 0; i < array.length; i++) {
      if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
         meses.push(array[i])
      }
   }
   if (meses.length <3) {
      return("No se encontraron los meses pedidos");      
   }else {
      return(meses);
   }
}
mesesDelAño();

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var tablaSeis = [];
   for (var i = 0; i < 11; i++) {
      tablaSeis.push(6*i);
   }
   console.log(tablaSeis);
}
tablaDelSeis();

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var array = [20, 200, 125, 145, 100];
   var mayores = [];

   for (var i = 0; i < array.length; i++) {
      if (array[i] > 100){
         mayores.push(array[i])}
      }
      return(mayores);    
   }
   
mayorACien ();

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var arr = [];
   var numeroRecibido = (num);
   for (var i = 0; i < 10; i++) {
      numeroRecibido = (numeroRecibido + 2);
      if (numeroRecibido === i) break;
      else {
         arr.push(numeroRecibido);
      } 
   }
   if(arr < 10) {
      return("Se interrumpio la ejecucion"); 
   }else {
      return(arr);
   }
}
breakStatement(98);

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var arr = [];
   var numeroRecibido = (num);
   for (var i = 0; i < 10; i++) {
      if (i === 5){
         continue;
      }else {
         numeroRecibido = numeroRecibido + 2;
         arr.push(numeroRecibido);
      }
   }
  return(arr);
}
continueStatement(3);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};

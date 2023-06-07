/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   var ini = nombre[0].toUpperCase();
   var cambio = nombre.substring(1);
   return (ini + cambio);
}
var nombreCambio = mayuscula ('mario');
return (nombreCambio);


function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
cb();
}
invocarCallback();

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   function suma (num1 , num2){
      return (num1 + num2);
   }
   var cb = suma (255 , 5);
   return(cb);

};

operacionMatematica();


function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   var arrayOfNumbers = [5, 5, 5, 5, 5];
   var suma = 0;
   for (var i = 0; i < arrayOfNumbers.length; i++) {
      suma += arrayOfNumbers[i];
   }
   cb(suma);
}


function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   for (var i = 0; i < array.length; i++) {
      cb (array[i]);
   }

}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   var array = [1,2,3,4,5];
   var nuevoArray = array.map(function(elemento) {
      return cb(elemento);
      });
      return (nuevoArray);
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var arrayOfStrings = ['a', 'b','aaa'];
   var nuevoArray = [];
   for (var i = 0; i < arrayOfStrings.length; i++) {
      if (arrayOfStrings[i][0] === 'a') {
         nuevoArray.push(arrayOfStrings[i]);
      }
   }
   return (nuevoArray);
}
filter();



/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};

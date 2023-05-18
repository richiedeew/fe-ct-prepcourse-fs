/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
   if (x === y) {
   return (true);
   }else{
   return (false);
   }
};
sonIguales(14, 1);
sonIguales(1, 1);

function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
   if ( str1.length === str2.length) {
      return (true);
   }else{
      return (false);
   }
};
tienenMismaLongitud("emosion","hi");
tienenMismaLongitud("cola","hola");

function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
   if (num < 90) {
      return (true);
   } else {
      return (false)
   }
};
menosQueNoventa (5);
menosQueNoventa (105);

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   if (num > 50) {
      return (true);
   } else {
      return(false)
   }
};
mayorQueCincuenta (100);
mayorQueCincuenta (50);

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
   if (num % 2=== 0) {
      return(true);
   } else {
      return(false);
   }
};
esPar(41)
esPar(710)
esPar(3475)

function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
   
   if (num % 2 === 1) {
      return (true);
   } else {
      return (false);
   }

}
esImpar(6)
esImpar(7)
esImpar(2657)

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};

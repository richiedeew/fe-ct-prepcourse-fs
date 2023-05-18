/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   // Retorna el valor de "num" elevado al cuadrado.
   // Tu código:
   var cuadrado = Math.pow(num,2);
   return(cuadrado); 
};
elevarAlCuadrado (55);
elevarAlCuadrado(2);

function elevarAlCubo(num) {
   // Retorna el valor de "num" elevado al cubo.
   // Tu código:
   var cubo = Math.pow(num,3);
   return (cubo); 
};
elevarAlCubo (3);
elevarAlCubo (2);

function elevar(num, exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   // Tu código:
   var exponente = Math.pow(num,exponent);
   return(exponente); 
};
elevar (2,2);
elevar (2,5);

function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   // Tu código:
   var redondea = Math.round(num);
   return(redondea);
};
redondearNumero (0.47);
redondearNumero (0.84);

function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   // Tu código:
   var arriba = Math.ceil(num);
   return (arriba);
};
redondearHaciaArriba (4.47);
redondearHaciaArriba (0.24);


function numeroRandom() {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   // Tu código:
   var random = Math.random();
   return (random);
};
numeroRandom ();

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};

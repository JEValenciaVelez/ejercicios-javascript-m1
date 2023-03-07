const Stack = require('../DS').Stack;

/* ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️

2️⃣ ***** EJERCICIO 2 STACK ***** - prepararMenú() 2️⃣

Un barman desea preparar un menú de tragos utilizando diferentes bebidas alcohólicas y tiempos de 
preparación. Hay lista de tragos y una lista de tiempos de preparación correspondientes. Para esto tendrás 
que implementar la función prepararMenú(), la cual recibirá por parámetros un arreglo de tragos, un arreglo
de tiempos, y un tercer párametro que es un número indicando el tiempo límite.

Ayuda al barman a preparar el menú de tragos y tiempos de preparación en orden inverso, ¡y con una 
restricción adicional! ➡ Sólo puede utilizar cada trago si su tiempo de preparación es menor al tiempo 
determinado. Deberás retornar un objeto el cual contendrá dos propiedades:
  - una con el stack de tragos.
  - otra con el stack de tiempos.

📝 EJEMPLO 📝
(INPUT) ➡
  tragos:["Ron", "Vodka", "Whisky", "Tequila"],
  Tiempos de preparación: [5,3,8,10],
  tiempoLimite: 7

guardarTragos(tragos,TiemposDePreparación, tiempoLimite) ➡ (OUTPUT)
{
  tragos: Stack: ['Vodka', 'Ron'],
  tiempos: Stack [3, 5]
};

REQUISITOS
  🟢 Respetar el principio de LIFO que tienen los Stacks.
  🟢 Retornar un objeto que contenga:
  - una propiedad "tragos" que sea un Stack que contenga los tragos menores al tiempo límite.
  - una propiedad "tiempos" que sea un Stack que contenga los tiempos menores al tiempo límite.
*/

function prepararMenú(tragos=[], tiempos=[], tiempoLimite) {
   
   let solucion = {}; //instancio objeto el cual luego voy a llenar con la soluciion
   let stackTragos = new Stack();  // creo una instancia de la clase Stack  para los tragos
   let stackTiempos = new Stack();  // creo una instancia stack paa los tiempos

   //creo bucle para iterar en el array tragos q ingresa por parametro
   for(let i = tragos.length-1; i >= 0; i--){
     if(tiempos[i] < tiempoLimite){ //si el item que correspone a esta iteracion es menor al tiempo limite ingresado por parametro
        stackTragos.push(tragos[i]); // pushealo en la instancia de stack para tragos
        solucion['tragos'] = stackTragos; //al objeto solucion creale propiedad tragos y asignale de valor el stack de tragos
        stackTiempos.push(tiempos[i]);   //al stack tiempos  pusheale el tiempo de esta iteracion
        solucion['tiempos']= stackTiempos;  // al objeto solucion creale propiedad tiempos y asignale de valor el stack de tiempos
      }
      else{ // de lo contrario 
        solucion['tragos'] = stackTragos;  // al objeto solucion crea la prop tragos y asignale la instancia de stack de tragos
        solucion['tiempos']= stackTiempos; // al objeto solucion crea la prop tiempos y asignale el stack de tiempos.
      }
    }
    return solucion;  // apenas validado todo lo anterior , retorna el objeto solucion;

}
const tragos = ["Tequila", "Whisky", "Vodka", "Ron"];
const tiempos = [10, 7, 12, 15];
const tiempoLimite = 2;

console.log(prepararMenú(tragos,tiempos,tiempoLimite));

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = prepararMenú;

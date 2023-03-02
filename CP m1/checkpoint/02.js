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
   // Tu código aquí:
   //instanciar un objeto vacio, luego agruegarle las props tragos y tiempos
   //asiganrles los valores a las props que cumplan con la validacion
   //hacer bucle que que itere en el de tragos o en tiempos  de derecha a izquierda y valide con los tiempos 
   //pushear en las instancias de stack para luego ingreasarlas como values de las props del objeto tragos
   let solucion = {};
   let stackTragos = new Stack();
   let stackTiempos = new Stack();

   for(let i = tragos.length-1; i >= 0; i--){
     if(tiempos[i] < tiempoLimite){
        stackTragos.push(tragos[i]);
        solucion['tragos'] = stackTragos;
        stackTiempos.push(tiempos[i]);
        solucion['tiempos']= stackTiempos; 
      }
      else{
        solucion['tragos'] = stackTragos;
        solucion['tiempos']= stackTiempos;
      }
    }
    return solucion;

}
const tragos = ["Tequila", "Whisky", "Vodka", "Ron"];
const tiempos = [10, 7, 12, 15];
const tiempoLimite = 2;

console.log(prepararMenú(tragos,tiempos,tiempoLimite));

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = prepararMenú;

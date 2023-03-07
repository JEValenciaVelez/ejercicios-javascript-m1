/* 5️⃣ ***** EJERCICIO 5 RECURSIÓN ***** - encontrarMasCaros() 5️⃣

Implementar la función 💲encontrarMasCaros()💲 la cual recibirá por parámetro un arreglo de objetos
que representarán algunos tragos, y un precio el cual servirá como llave de búsqueda. Tendrás que,
recursivamente, iterar el arreglo y retornar uno nuevo sólo con los objetos que tengan un precio superior 
al que recibes.

📝 EJEMPLO 📝 
(INPUT) ➡ [{ nombre: 'Whisky', precio: 312 }, 
            { nombre: 'Ron', precio: 156 }, 
            { nombre: 'Gin', precio: 215 }, 
            { nombre: 'Vino tinto', precio: 100 }]

encontrarMasCaros(arreglo, 200) ➡ (OUTPUT)
[{ nombre: 'Whisky' precio: 312 }, { nombre: 'Gin', precio: 215 }]

REQUISITOS
  🟢 Retornar un nuevo arreglo con los tragos que tengan un precio SUPERIOR al recibido por parámetro.
  🟢 Implementar recursividad🔄!
  🟢 Si ningún precio supera al recibido por parámetros, retornar un mensaje que diga "No hay tragos disponibles".
*/

function encontrarMasCaros(arreglo=[], precio, ) {
   // Tu código aquí:
   let i = 0;  // inicializo variable iteradora en cero
   let masCaros = []; //inicializo arreglo vacio
   
   //itero en el arreglo de objetos ingresado por parametro usando como ref la variable iteradora
   while(i < arreglo.length){
     //si la propiedad precio del objet que corresponde a la iteracion es mayor al precio ingresado por parametro
      if(arreglo[i].precio > precio){
         masCaros.push(arreglo[i]);  //pushealo en el arreglo 
      }

      i++; //incremeta uno a i
   }

   //si el arreglo esta vacio
   if(masCaros.length < 1) return "No hay tragos disponibles"; //retorna el mensaje

   return masCaros; // retorna el arreglo


}
const tragos = [
   { nombre: 'Whisky', precio: 312 },
   { nombre: 'Ron', precio: 156 },
   { nombre: 'Gin', precio: 215 },
   { nombre: 'Vino tinto', precio: 100 },
];
console.log(encontrarMasCaros(tragos,400));


// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
   encontrarMasCaros,
};

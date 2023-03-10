/* 4️⃣ ***** EJERCICIO 4 RECURSIÓN***** - encontrarTragoPopular() 4️⃣

Implementar una función llamada 🍹 encontrarTragoPopular 🍹 que reciba como parámetro un objeto de tragos.
a función debe utilizar recursión para recorrer el objeto y encontrar el trago con la mayor cantidad vendida. La función debe devolver el  trago más popular y además crearle la propiedad tragoMasVendido con el valor en true.


📝 EJEMPLO 📝 
(INPUT) ➡ 
tragos = {"trago1": {"nombre": "Margarita", "cantidadVendida": 20},
          "trago2": {"nombre": "Daiquiri", "cantidadVendida": 15},
          "trago3": {"nombre": "Mojito", "cantidadVendida": 25}
        };

encontrarTragoPopular(tragos,) ➡ (OUTPUT)
  {
    "nombre": "Mojito",
    "cantidadVendida": 25,
    "tragoMasVendido": true
  }

REQUISITOS
  🟢 SI O SI aplicar recursión.
  🟢 Retornar sólo el objeto que es el trago más popular.
  🟢 El objeto debe tener una nueva propiedad llamada "cantidadVendida" en true.

⛔️ Tip: puedes agregar un default parameter a la función.
*/

function encontrarTragoPopular(tragos={},respuesta = {}) {
   // Tu código aquí:
   //agruego respuesta como default parametrer instanciada como objeto vacio y asi me sirva de acumulador en cada recursion
   //guardo una copia de la longitud actual del objeto que ingresa por parametro
   let count = Object.keys(tragos).length-1;
   
   //valido si la cantidad de porpiedades de trago es igul a uno, retorno el objeto respuesta
   if(Object.keys(tragos).length === 1) return respuesta; //caso de corte

   //valido si en el valor de la prop cantidadvendida de la ultima propiedad del objeto es mayor a el valor de la prop cantidadvendida de la anterior
   //si es asi instancio las siguientes propiedades en el objeto respuesta con sus respectivos valores
   if(Object.values(tragos)[count].cantidadVendida > Object.values(tragos)[count-1].cantidadVendida){
    
    respuesta["nombre"] = Object.values(tragos)[count].nombre;
    respuesta["cantidadVendida"] = Object.values(tragos)[count].cantidadVendida;
    respuesta[ "tragoMasVendido"] = true;
    delete tragos[Object.keys(tragos)[count-1]]; //borro la propiedad de el objeto tragos
   }else{ //de lo contrario
    respuesta["nombre"] = Object.values(tragos)[count-1].nombre;
    respuesta["cantidadVendida"] = Object.values(tragos)[count-1].cantidadVendida;
    respuesta[ "tragoMasVendido"] = true;
    delete tragos[Object.keys(tragos)[count]]; // borro la prop del objeto tragos
   }
   //vuelvo y valido lo anterior hasta q se cumpla el caso de corte
   return encontrarTragoPopular(tragos,respuesta);
  
}
const tragos2 = {
  trago1: {
     nombre: 'Daiquiri',
     cantidadVendida: 30,
  },
  trago2: {
     nombre: 'Aperol Spritz',
     cantidadVendida: 28,
  },
  trago3: {
     nombre: 'Manhattan',
     cantidadVendida: 12,
  },
};

const resultado2 = encontrarTragoPopular(tragos2);
console.log(resultado2)


// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = encontrarTragoPopular;

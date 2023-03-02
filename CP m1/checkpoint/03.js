/* 3️⃣ ***** EJERCICIO 3 CLOSURES ***** - consultarPreparacion() 3️⃣

Implementar la función 🔍consultarPreparacion()🔍, la cuál recibirá inicialmente por parámetro un arreglo 
con los tragos que quieran consultar de la carta del bar.

Luego podrá ser nuevamente invocada, recibiendo por parámetro un arreglo con todos los tragos disponibles 
en el bar y su preparacion. Debes retornar por cada trago solicitado un arreglo de arreglos con sus 
respectivos mensajes. Si hay algun error devolver el mensaje correspondiente.

📝 EJEMPLO 📝
(INPUT) ➡ 
Se solicitan los siguientes tragos: ["Fernet", "Destornillador"]
Y a continuación la carta del bar es: [{name: "Fernet", preparacion: "Fernet y Coca"}, {name: "Gancia", preparacion: "Gancia y Sprite"}, {name: "Destornillador", preparacion: "Jugo de naranja y Vodka"}]

consultarPreparacion(tragos)(carta) ➡ (OUTPUT)
  [
    ['El trago: Fernet, se prepara de la siguiente forma: Fernet y Coca'],
    ['El trago: Destornillador, se prepara de la siguiente forma: Jugo de naranja y Vodka ]
  ]

Si un trago no está en la carta deberás retornar un mensaje indicando el error.
tragos: ["Fernet", "Limonada"]
consultarPreparacion(tragos)(carta) Devuelve ➡
"Por favor verifique bien los nombres de los tragos que quiere solicitar su preparación"

REQUISITOS
  🟢 Retornar por cada trago solicitado un arreglo de arreglos con sus respectivos mensajes.
  🟢 Retornar "Por favor verifique bien los nombres de los tragos que quiere solicitar su preparación".

⛔️ ACLARACIÓN: chequear el output de los test para poder colocar los mensajes como corresponden!
No debería de arrojar el error si nos pasan los tragos en minúscula o mayúscula, y si esta en la carta debe encontrarlo igual.
*/

function consultarPreparacion(tragos=[]) {
   // Tu código aquí:
   function menu(carta){
    //debo iterar en la carta que es un array de objetos
    let array = [];
    for(let object of carta){
      
      if(tragos.includes(Object.values(object)[0])){

        let mensaje = [`El trago: ${Object.values(object)[0]}, se prepara de la siguiente forma: ${Object.values(object)[1]}`];
        array.push(mensaje);
    
      }
      else if(!tragos.includes(Object.values(object)[0])){
        return 'Por favor verifique bien los nombres de los tragos que quiere solicitar su preparación';
      
    }
    
    }
    return array;
  }
  return menu;

}
const tragos2 = ['Fernet', 'Destornillador', 'Gancia'];
      const carta2 = [
         {
            name: 'Fernet',
            preparacion: 'Fernet y Coca',
         },
         { name: 'Gancia', preparacion: 'Gancia y Sprite' },
         { name: 'Destornillador', preparacion: 'Jugo de naranja y Vodka' },
      ];
      const chequear2 = consultarPreparacion(tragos2);
      console.log(chequear2(carta2))





// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
   consultarPreparacion,
};

////Funciones Arrow =>
////Ejemplo de funciones
var aleatorio1 = function(min, max) {
    min = min || 1;
    max = max || 100;
    return Math.round(Math.random() * (max - min) + min);
}



let aleatorio2 = (min, max) => {
    let res = Math.random() * (max - min) + min;
    return Math.round(res)
}

console.log("aleatorio1: " + aleatorio1());
console.log("aleatorio2: " + aleatorio2(1, 100));


var obtenerLibro2 = function (p_id)
{
  return {
    id:p_id,
    titulo:"El señor de las moscas",
    autor: " William Golding",
  }
}

var obtenerLibro1 = (p_id) => ({
    id:p_id,
    titulo:"El señor de las moscas",
    autor: " William Golding",
  });


console.log(obtenerLibro1(1234));

////Funciones anónimas

var saludo1 = function (nombre){
  return "Hola, " + nombre;
}("Domingo");

console.log(saludo1);

let saludo2 = (nombre =>`Hola, ${nombre}`)("Pilar");
console.log(saludo2);

////No hay cambios en el objeto this

var manejador1 = {
    id:"123",
    init: function(){
      document.addEventListener("click", (function(event){
        console.log(this);
        this.clickEnPagina(event.type);
      }).bind(this), false );
    },
    clickEnPagina: function(tipo){
      console.log("Manejando1" + tipo + " para el id: " + this.id);
    }
};
manejador1.init();

let manejador2 = {
    id:"456",
    init: function () {
        document.addEventListener ( "click",
        event => {
          console.log(this);
          this.clickEnPagina (event.type)
        }, false );
    },
    clickEnPagina: function(tipo) { console.log( "Manejando2" + tipo + " para el id: " + this.id ) }
  //clickEnPagina: tipo => console.log( "Manejando2" + tipo + " para el id: " + this.id )
};
manejador2.init();

//Flechas y arreglos

var arreglo = [4, 20 , 5, 22, 6, 3, 44];
var arreglOrden = arreglo.sort(function(a,b){return a-b});
console.log(arreglOrden);

let arreglo2 = [6, 23 , 52, 212, 6, 3, 44];
let arreglOrden2 = arreglo2.sort((a,b) => a-b);
console.log(arreglOrden2);

//Identificando funciones =>

var restar = (a,b) => a - b;

console.log(typeof(restar));
console.log(restar instanceof Function);
